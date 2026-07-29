# Monitor de IP Pública - Llantas Regio

Este es un servicio automatizado diseñado para monitorear continuamente la IP pública de la red local. Si detecta que la IP ha cambiado, envía automáticamente una alerta profesional por correo electrónico al proveedor de telefonía y a los contactos en copia (CC) para que actualicen el enlace del SIP Trunk (Línea 8181351000).

Incluye una **Interfaz Web (Panel de Control)** moderna desde la cual se puede visualizar el estado del monitor, iniciar/detener el servicio, actualizar credenciales y enviar correos de prueba.

---

## 🚀 Instalación Rápida (Mini PC / Servidor)

Para instalar y dejar corriendo este proyecto en una nueva computadora, simplemente abre la terminal y ejecuta los siguientes comandos:

**0. Pre-requisitos (Instalar Node.js)**
Si la computadora es completamente nueva y no tiene Node.js, instálalo corriendo estos dos comandos primero:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**1. Clonar el repositorio:**
```bash
git clone git@github.com:GENERAL-TIRE/emailip.git
cd emailip
```

**2. Ejecutar el script de instalación:**
```bash
chmod +x instalar.sh
./instalar.sh
```

El script `instalar.sh` se encargará de:
1. Instalar todas las dependencias (Backend y Frontend).
2. Construir la interfaz web.
3. Instalar `pm2` para el manejo del proceso.
4. Iniciar el servicio en segundo plano.

*(Nota: Al finalizar, el script te pedirá que ejecutes un comando `pm2 startup ...` generado automáticamente. Cópialo y pégalo en la terminal para que el sistema inicie solo al prender la computadora).*

---

## ⚙️ Configuración (Panel de Control)

Una vez que la instalación haya finalizado, abre tu navegador web y entra a:
👉 **http://localhost:5173**

Desde ese panel podrás configurar:
- El servidor **SMTP**, puerto, usuario y contraseña.
- El **Correo Principal** del proveedor (Soporte).
- Los **Correos en Copia (CC)**.

Al presionar "Guardar Cambios", la configuración se guardará en el archivo `.env` y el monitor empezará a utilizar esos datos inmediatamente.

---

## 🛠️ Comandos Útiles (Mantenimiento)

El servicio es gestionado por **PM2**. Si necesitas administrarlo manualmente desde la terminal, aquí tienes los comandos principales:

- **Ver el estado del servicio:** 
  `pm2 status`
- **Ver los registros (logs) en tiempo real:**
  `pm2 logs monitor-ip`
- **Detener el servicio:**
  `pm2 stop monitor-ip`
- **Reiniciar el servicio:**
  `pm2 restart monitor-ip`

## 🗂️ Estructura del Proyecto

- `index.js`: Servidor Express unificado y demonio que verifica la IP cada 5 minutos.
- `notifier.js`: Lógica y diseño HTML de la notificación enviada por SMTP.
- `config-manager.js`: Módulo que permite reescribir el archivo `.env` dinámicamente.
- `instalar.sh`: Instalador automatizado.
- `ui/`: Carpeta que contiene la Single Page Application (SPA) en React + Vite para el panel web.
