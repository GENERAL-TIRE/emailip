require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { notifySupport } = require('./notifier');
const { readConfig, writeConfig } = require('./config-manager');

const LAST_IP_FILE = path.join(__dirname, 'last_ip.txt');
const CHECK_INTERVAL_MS = 5 * 60 * 1000;

// Variables de estado del monitor
let monitorInterval = null;
let isMonitorRunning = false;
let lastCheckTime = null;
let currentIpStatus = null;

const app = express();
app.use(cors());
app.use(express.json());

// --- Lógica del Monitor IP ---

async function getCurrentIp() {
    try {
        // En producción usaremos import() dinámico para node-fetch si es necesario
        // pero podemos seguir usando la API de fetch nativa en Node 18+
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error al obtener la IP actual:', error.message);
        return null;
    }
}

function getLastIp() {
    try {
        if (fs.existsSync(LAST_IP_FILE)) {
            return fs.readFileSync(LAST_IP_FILE, 'utf8').trim();
        }
        return null;
    } catch (error) {
        console.error('Error al leer la última IP:', error.message);
        return null;
    }
}

function saveCurrentIp(ip) {
    try {
        fs.writeFileSync(LAST_IP_FILE, ip, 'utf8');
    } catch (error) {
        console.error('Error al guardar la nueva IP:', error.message);
    }
}

async function checkIpChange() {
    console.log(`[${new Date().toISOString()}] Revisando IP...`);
    lastCheckTime = new Date().toISOString();
    
    const currentIp = await getCurrentIp();
    if (!currentIp) return;

    currentIpStatus = currentIp;
    const lastIp = getLastIp();

    if (currentIp !== lastIp) {
        console.log(`¡Cambio de IP detectado! Anterior: ${lastIp || 'Ninguna'} -> Nueva: ${currentIp}`);
        saveCurrentIp(currentIp);
        await notifySupport(lastIp, currentIp);
    } else {
        console.log(`La IP no ha cambiado (${currentIp}).`);
    }
}

function startMonitor() {
    if (!isMonitorRunning) {
        console.log('Iniciando monitor...');
        checkIpChange();
        monitorInterval = setInterval(checkIpChange, CHECK_INTERVAL_MS);
        isMonitorRunning = true;
    }
}

function stopMonitor() {
    if (isMonitorRunning) {
        console.log('Deteniendo monitor...');
        clearInterval(monitorInterval);
        isMonitorRunning = false;
    }
}

// Iniciar automáticamente
startMonitor();

// --- API REST ---

// Servir frontend estático (cuando se compile con vite build)
const uiPath = path.join(__dirname, 'ui', 'dist');
if (fs.existsSync(uiPath)) {
    app.use(express.static(uiPath));
}

app.get('/api/status', (req, res) => {
    res.json({
        isRunning: isMonitorRunning,
        lastCheckTime: lastCheckTime,
        currentIp: currentIpStatus || getLastIp(),
        interval: CHECK_INTERVAL_MS
    });
});

app.post('/api/action', async (req, res) => {
    const { action } = req.body;
    try {
        if (action === 'start') {
            startMonitor();
            res.json({ success: true, message: 'Monitor iniciado' });
        } else if (action === 'stop') {
            stopMonitor();
            res.json({ success: true, message: 'Monitor detenido' });
        } else if (action === 'test_email') {
            await notifySupport(getLastIp(), currentIpStatus || getLastIp() || '127.0.0.1');
            res.json({ success: true, message: 'Correo de prueba enviado' });
        } else if (action === 'force_check') {
            await checkIpChange();
            res.json({ success: true, message: 'Chequeo forzado completado' });
        } else {
            res.status(400).json({ success: false, message: 'Acción no válida' });
        }
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

app.get('/api/config', (req, res) => {
    const config = readConfig();
    // Ocultar la contraseña por seguridad al enviar al frontend (si se desea)
    // Pero como es local, podemos enviarla o enviar un placeholder
    res.json({ config });
});

app.post('/api/config', (req, res) => {
    const newConfig = req.body;
    try {
        writeConfig(newConfig);
        // Recargar variables de entorno
        require('dotenv').config({ override: true });
        res.json({ success: true, message: 'Configuración guardada' });
    } catch (e) {
        res.status(500).json({ success: false, message: 'Error guardando configuración' });
    }
});

// Manejar rutas de react router si existen
app.use((req, res) => {
    if (fs.existsSync(path.join(uiPath, 'index.html'))) {
        res.sendFile(path.join(uiPath, 'index.html'));
    } else {
        res.status(404).send('La interfaz UI aún no ha sido compilada. Ejecute npm run build en la carpeta ui.');
    }
});

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
    console.log(`Servidor de monitoreo web y API ejecutándose en el puerto ${PORT}`);
});
