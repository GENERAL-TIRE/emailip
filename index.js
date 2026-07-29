require('dotenv').config();
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const { notifySupport } = require('./notifier');
const { updateServices } = require('./updater');

const LAST_IP_FILE = path.join(__dirname, 'last_ip.txt');
const CHECK_INTERVAL_MS = 5 * 60 * 1000; // 5 minutos por defecto

async function getCurrentIp() {
    try {
        const response = await axios.get('https://api.ipify.org?format=json');
        return response.data.ip;
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
    const currentIp = await getCurrentIp();
    if (!currentIp) return;

    const lastIp = getLastIp();

    if (currentIp !== lastIp) {
        console.log(`¡Cambio de IP detectado! Anterior: ${lastIp || 'Ninguna'} -> Nueva: ${currentIp}`);
        
        // Guardar la nueva IP inmediatamente para evitar reintentos duplicados
        saveCurrentIp(currentIp);

        // Notificar a soporte
        await notifySupport(lastIp, currentIp);

        // Actualizar servicios
        await updateServices(currentIp);
    } else {
        console.log(`La IP no ha cambiado (${currentIp}).`);
    }
}

// Ejecución inicial
checkIpChange();

// Ejecución periódica (como daemon)
setInterval(checkIpChange, CHECK_INTERVAL_MS);
