const nodemailer = require('nodemailer');

async function notifySupport(oldIp, newIp) {
    console.log('--- Iniciando notificación a soporte (SMTP) ---');
    
    try {
        // Configuración de SMTP desde variables de entorno
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT, 10),
            secure: process.env.SMTP_SECURE === 'true', // true para 465, false para otros puertos
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"Soporte Llantas Regio" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
            to: process.env.SUPPORT_EMAIL,
            cc: process.env.CC_EMAILS,
            subject: 'Solicitud de Actualización de IP - Enlace de Telefonía Llantas Regio (8181351000)',
            text: `Estimado equipo de Soporte Técnico,\n\nPor medio del presente correo les solicitamos amablemente la actualización de nuestra dirección IP pública para el servicio de telefonía asociado al número 8181351000 (SIP Trunk).\n\nIP Anterior: ${oldIp || 'No registrada'}\nNueva IP: ${newIp}\n\nFavor de confirmar de recibido y avisarnos una vez que el cambio haya sido aplicado.\n\nSaludos cordiales,\nEquipo de TI - Llantas Regio`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                    <!-- Header -->
                    <div style="background-color: #1a365d; color: #ffffff; padding: 25px 20px; text-align: center;">
                        <h2 style="margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">Actualización de IP - Telefonía</h2>
                        <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">Llantas Regio</p>
                    </div>
                    
                    <!-- Body -->
                    <div style="padding: 30px 20px; color: #333333; line-height: 1.6;">
                        <p style="margin-top: 0; font-size: 16px;">Estimado equipo de <strong>Soporte Técnico</strong>,</p>
                        <p style="font-size: 16px;">Por medio del presente correo les solicitamos amablemente la actualización de nuestra dirección IP pública autorizada para el servicio de telefonía asociado a la línea <strong>8181351000</strong>, debido a un cambio reciente en nuestra red.</p>
                        
                        <!-- IP Table -->
                        <div style="margin: 30px 0; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 20px;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: 600; font-size: 14px; width: 40%;">Línea / Número</td>
                                    <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 16px; font-weight: bold;">
                                        8181351000
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-weight: 600; font-size: 14px; width: 40%;">IP Anterior</td>
                                    <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #475569; font-size: 15px;">
                                        <span style="background-color: #fee2e2; color: #991b1b; padding: 4px 8px; border-radius: 4px; font-family: monospace;">${oldIp || 'No registrada'}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 15px; color: #64748b; font-weight: 600; font-size: 14px;">Nueva IP (Actual)</td>
                                    <td style="padding: 12px 15px; color: #0f172a; font-size: 16px; font-weight: bold;">
                                        <span style="background-color: #dcfce7; color: #166534; padding: 4px 8px; border-radius: 4px; font-family: monospace;">${newIp}</span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        
                        <p style="font-size: 16px;">Les pedimos de favor aplicar este cambio a la brevedad para restablecer nuestra comunicación, y responder a este correo confirmando una vez que el ajuste haya sido realizado.</p>
                    </div>
                    
                    <!-- Footer -->
                    <div style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #64748b; border-top: 1px solid #e2e8f0; font-size: 13px;">
                        <p style="margin: 0;"><strong>Equipo de TI - Llantas Regio</strong></p>
                        <p style="margin: 5px 0 0 0;">Este es un mensaje generado automáticamente por nuestro sistema de monitoreo de red.</p>
                    </div>
                </div>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log(`Correo de notificación enviado exitosamente. MessageId: ${info.messageId}`);
    } catch (error) {
        console.error('Error al enviar la notificación por correo:', error.message);
    }
    
    console.log('--- Notificación completada ---');
}

module.exports = {
    notifySupport
};
