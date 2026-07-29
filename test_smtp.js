require('dotenv').config();
const nodemailer = require('nodemailer');

async function testSMTP() {
    console.log('Testing SMTP with port', process.env.SMTP_PORT);
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT, 10),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        logger: true,
        debug: true
    });

    try {
        await transporter.verify();
        console.log('SMTP verification success!');
    } catch (err) {
        console.error('SMTP verification failed:', err.message);
    }
}
testSMTP();
