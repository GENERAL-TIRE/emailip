#!/bin/bash

echo "============================================="
echo "   Instalador del Monitor IP Llantas Regio   "
echo "============================================="

# 1. Asegurar que exista un archivo .env
if [ ! -f .env ]; then
    echo "=> Creando archivo .env por defecto..."
    cp .env.example .env
fi

# 2. Instalar dependencias del Backend
echo "=> Instalando dependencias del servidor backend..."
npm install

# 3. Instalar dependencias del Frontend y compilarlo
echo "=> Construyendo la interfaz web..."
cd ui
npm install
npm run build
cd ..

# 4. Instalar y configurar PM2
echo "=> Configurando el arranque automático con PM2..."
# Checar si PM2 está instalado globalmente
if ! command -v pm2 &> /dev/null; then
    echo "PM2 no encontrado. Instalando PM2 globalmente (requiere permisos de administrador)..."
    sudo npm install -g pm2
fi

# 5. Iniciar la aplicación
echo "=> Iniciando el servicio..."
pm2 start index.js --name "monitor-ip"
pm2 save

echo "============================================="
echo " ¡Instalación Completa! "
echo "============================================="
echo ""
echo "El monitor ya está corriendo en segundo plano."
echo "Para acceder al panel de control, abre tu navegador en:"
echo "http://localhost:5173"
echo ""
echo "NOTA IMPORTANTE: Para que el servicio inicie automáticamente al prender la PC,"
echo "ejecuta el siguiente comando en la terminal y sigue las instrucciones:"
echo "pm2 startup"
echo "============================================="
