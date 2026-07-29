require('dotenv').config();
const { notifySupport } = require('./notifier');

async function testEmail() {
    console.log('Sending test email...');
    await notifySupport('1.2.3.4', '187.138.83.74');
    console.log('Test email sent.');
}

testEmail();
