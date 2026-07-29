hecador@2806-109f-0015-5414-0000-0000-0000-0004:~/Descargas/emailip-main(1)/emailip-main$ chmod +x instalar.sh
./instalar.sh
=============================================
   Instalador del Monitor IP Llantas Regio   
=============================================
=> Instalando dependencias del servidor backend...
./instalar.sh: línea 15: npm: orden no encontrada
=> Construyendo la interfaz web...
./instalar.sh: línea 20: npm: orden no encontrada
./instalar.sh: línea 21: npm: orden no encontrada
=> Configurando el arranque automático con PM2...
PM2 no encontrado. Instalando PM2 globalmente (requiere permisos de administrador)...
[sudo] contraseña para checador: 
sudo: npm: command not found
=> Iniciando el servicio...
./instalar.sh: línea 34: pm2: orden no encontrada
./instalar.sh: línea 35: pm2: orden no encontrada
=============================================
 ¡Instalación Completa! 
=============================================

El monitor ya está corriendo en segundo plano.
Para acceder al panel de control, abre tu navegador en:
http://localhost:5173

NOTA IMPORTANTE: Para que el servicio inicie automáticamente al prender la PC,
ejecuta el siguiente comando en la terminal y sigue las instrucciones:
pm2 startup
=============================================
checador@2806-109f-0015-5414-0000-0000-0000-0004:~/Descargas/emailip-main(1)/emailip-main$ chmod +x instalar.sh
./instalar.sh
=============================================
   Instalador del Monitor IP Llantas Regio   
=============================================
=> Instalando dependencias del servidor backend...
./instalar.sh: línea 15: npm: orden no encontrada
=> Construyendo la interfaz web...
./instalar.sh: línea 20: npm: orden no encontrada
./instalar.sh: línea 21: npm: orden no encontrada
=> Configurando el arranque automático con PM2...
PM2 no encontrado. Instalando PM2 globalmente (requiere permisos de administrador)...
sudo: npm: command not found
=> Iniciando el servicio...
./instalar.sh: línea 34: pm2: orden no encontrada
./instalar.sh: línea 35: pm2: orden no encontrada
=============================================
 ¡Instalación Completa! 
=============================================

El monitor ya está corriendo en segundo plano.
Para acceder al panel de control, abre tu navegador en:
http://localhost:5173

NOTA IMPORTANTE: Para que el servicio inicie automáticamente al prender la PC,
ejecuta el siguiente comando en la terminal y sigue las instrucciones:
pm2 startup
=============================================
checador@2806-109f-0015-5414-0000-0000-0000-0004:~/Descargas/emailip-main(1)/emailip-main$ curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
bash: curl: orden no encontrada
Leyendo lista de paquetes... Hecho
Creando árbol de dependencias... Hecho
Leyendo la información de estado... Hecho
Se instalarán los siguientes paquetes adicionales:
  libcares2 libnode115 node-acorn node-balanced-match node-brace-expansion
  node-cjs-module-lexer node-corepack node-minimatch node-undici node-xtend
  nodejs-doc
Paquetes sugeridos:
  npm
Se instalarán los siguientes paquetes NUEVOS:
  libcares2 libnode115 node-acorn node-balanced-match node-brace-expansion
  node-cjs-module-lexer node-corepack node-minimatch node-undici node-xtend
  nodejs nodejs-doc
0 actualizados, 12 nuevos se instalarán, 0 para eliminar y 263 no actualizados.
Se necesita descargar 19.9 MB de archivos.
Se utilizarán 84.8 MB de espacio de disco adicional después de esta operación.
Des:1 http://deb.debian.org/debian trixie/main amd64 libcares2 amd64 1.34.5-1+deb13u1 [98.3 kB]
Des:2 http://deb.debian.org/debian trixie/main amd64 node-xtend all 4.0.2-3 [3 932 B]
Des:3 http://deb.debian.org/debian trixie/main amd64 node-corepack all 0.24.0-5 [712 kB]
Des:4 http://deb.debian.org/debian trixie/main amd64 nodejs amd64 20.19.2+dfsg-1+deb13u2 [353 kB]
Des:5 http://deb.debian.org/debian trixie/main amd64 node-acorn all 8.8.1+ds+~cs25.17.7-2 [128 kB]
Des:6 http://deb.debian.org/debian trixie/main amd64 node-cjs-module-lexer all 1.2.3+dfsg-1 [30.6 kB]
Des:7 http://deb.debian.org/debian trixie/main amd64 node-balanced-match all 2.0.0-1 [4 872 B]
Des:8 http://deb.debian.org/debian trixie/main amd64 node-brace-expansion all 2.0.1+~1.1.0-2 [8 012 B]
Des:9 http://deb.debian.org/debian trixie/main amd64 node-minimatch all 9.0.3-6 [76.8 kB]
Des:10 http://deb.debian.org/debian trixie/main amd64 node-undici all 7.3.0+dfsg1+~cs24.12.11-1 [333 kB]
Des:11 http://deb.debian.org/debian trixie/main amd64 libnode115 amd64 20.19.2+dfsg-1+deb13u2 [12.1 MB]
Des:12 http://deb.debian.org/debian trixie/main amd64 nodejs-doc all 20.19.2+dfsg-1+deb13u2 [6 084 kB]
Descargados 19.9 MB en 1s (13.8 MB/s)
Seleccionando el paquete libcares2:amd64 previamente no seleccionado.
(Leyendo la base de datos ... 139399 ficheros o directorios instalados actualmente.)
Preparando para desempaquetar .../00-libcares2_1.34.5-1+deb13u1_amd64.deb ...
Desempaquetando libcares2:amd64 (1.34.5-1+deb13u1) ...
Seleccionando el paquete node-xtend previamente no seleccionado.
Preparando para desempaquetar .../01-node-xtend_4.0.2-3_all.deb ...
Desempaquetando node-xtend (4.0.2-3) ...
Seleccionando el paquete node-corepack previamente no seleccionado.
Preparando para desempaquetar .../02-node-corepack_0.24.0-5_all.deb ...
Desempaquetando node-corepack (0.24.0-5) ...
Seleccionando el paquete nodejs previamente no seleccionado.
Preparando para desempaquetar .../03-nodejs_20.19.2+dfsg-1+deb13u2_amd64.deb ...
Desempaquetando nodejs (20.19.2+dfsg-1+deb13u2) ...
Seleccionando el paquete node-acorn previamente no seleccionado.
Preparando para desempaquetar .../04-node-acorn_8.8.1+ds+~cs25.17.7-2_all.deb ...
Desempaquetando node-acorn (8.8.1+ds+~cs25.17.7-2) ...
Seleccionando el paquete node-cjs-module-lexer previamente no seleccionado.
Preparando para desempaquetar .../05-node-cjs-module-lexer_1.2.3+dfsg-1_all.deb ...
Desempaquetando node-cjs-module-lexer (1.2.3+dfsg-1) ...
Seleccionando el paquete node-balanced-match previamente no seleccionado.
Preparando para desempaquetar .../06-node-balanced-match_2.0.0-1_all.deb ...
Desempaquetando node-balanced-match (2.0.0-1) ...
Seleccionando el paquete node-brace-expansion previamente no seleccionado.
Preparando para desempaquetar .../07-node-brace-expansion_2.0.1+~1.1.0-2_all.deb ...
Desempaquetando node-brace-expansion (2.0.1+~1.1.0-2) ...
Seleccionando el paquete node-minimatch previamente no seleccionado.
Preparando para desempaquetar .../08-node-minimatch_9.0.3-6_all.deb ...
Desempaquetando node-minimatch (9.0.3-6) ...
Seleccionando el paquete node-undici previamente no seleccionado.
Preparando para desempaquetar .../09-node-undici_7.3.0+dfsg1+~cs24.12.11-1_all.deb ...
Desempaquetando node-undici (7.3.0+dfsg1+~cs24.12.11-1) ...
Seleccionando el paquete libnode115:amd64 previamente no seleccionado.
Preparando para desempaquetar .../10-libnode115_20.19.2+dfsg-1+deb13u2_amd64.deb ...
Desempaquetando libnode115:amd64 (20.19.2+dfsg-1+deb13u2) ...
Seleccionando el paquete nodejs-doc previamente no seleccionado.
Preparando para desempaquetar .../11-nodejs-doc_20.19.2+dfsg-1+deb13u2_all.deb ...
Desempaquetando nodejs-doc (20.19.2+dfsg-1+deb13u2) ...
Configurando node-cjs-module-lexer (1.2.3+dfsg-1) ...
Configurando node-balanced-match (2.0.0-1) ...
Configurando node-brace-expansion (2.0.1+~1.1.0-2) ...
Configurando libcares2:amd64 (1.34.5-1+deb13u1) ...
Configurando nodejs-doc (20.19.2+dfsg-1+deb13u2) ...
Configurando node-undici (7.3.0+dfsg1+~cs24.12.11-1) ...
Configurando node-minimatch (9.0.3-6) ...
Configurando node-xtend (4.0.2-3) ...
Configurando node-acorn (8.8.1+ds+~cs25.17.7-2) ...
Configurando node-corepack (0.24.0-5) ...
Configurando libnode115:amd64 (20.19.2+dfsg-1+deb13u2) ...
Configurando nodejs (20.19.2+dfsg-1+deb13u2) ...
update-alternatives: utilizando /usr/bin/nodejs para proveer /usr/bin/js (js) en modo automático
Procesando disparadores para man-db (2.13.1-1) ...
Procesando disparadores para libc-bin (2.41-12+deb13u1) ...
checador@2806-109f-0015-5414-0000-0000-0000-0004:~/Descargas/emailip-main(1)/emailip-main$ chmod +x instalar.sh
checador@2806-109f-0015-5414-0000-0000-0000-0004:~/Descargas/emailip-main(1)/emailip-main$ ./instalar.sh
=============================================
   Instalador del Monitor IP Llantas Regio   
=============================================
=> Instalando dependencias del servidor backend...
./instalar.sh: línea 15: npm: orden no encontrada
=> Construyendo la interfaz web...
./instalar.sh: línea 20: npm: orden no encontrada
./instalar.sh: línea 21: npm: orden no encontrada
=> Configurando el arranque automático con PM2...
PM2 no encontrado. Instalando PM2 globalmente (requiere permisos de administrador)...
sudo: npm: command not found
=> Iniciando el servicio...
./instalar.sh: línea 34: pm2: orden no encontrada
./instalar.sh: línea 35: pm2: orden no encontrada
=============================================
 ¡Instalación Completa! 
=============================================

El monitor ya está corriendo en segundo plano.
Para acceder al panel de control, abre tu navegador en:
http://localhost:5173

NOTA IMPORTANTE: Para que el servicio inicie automáticamente al prender la PC,
ejecuta el siguiente comando en la terminal y sigue las instrucciones:
pm2 startup
=============================================
checador@2806-109f-0015-5414-0000-0000-0000-0004:~/Descargas/emailip-main(1)/emailip-main$ 


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
