const fs = require('fs');
const path = require('path');

const ENV_FILE = path.join(__dirname, '.env');

function readConfig() {
    if (!fs.existsSync(ENV_FILE)) {
        return {};
    }
    const content = fs.readFileSync(ENV_FILE, 'utf8');
    const lines = content.split('\n');
    const config = {};
    for (const line of lines) {
        if (line.trim() === '' || line.trim().startsWith('#')) continue;
        const index = line.indexOf('=');
        if (index > -1) {
            const key = line.substring(0, index).trim();
            const value = line.substring(index + 1).trim();
            config[key] = value;
        }
    }
    return config;
}

function writeConfig(newConfig) {
    let content = '';
    if (fs.existsSync(ENV_FILE)) {
        content = fs.readFileSync(ENV_FILE, 'utf8');
    }

    const lines = content.split('\n');
    const updatedKeys = new Set();
    const newLines = [];

    for (const line of lines) {
        if (line.trim() === '' || line.trim().startsWith('#')) {
            newLines.push(line);
            continue;
        }
        const index = line.indexOf('=');
        if (index > -1) {
            const key = line.substring(0, index).trim();
            if (newConfig.hasOwnProperty(key)) {
                newLines.push(`${key}=${newConfig[key]}`);
                updatedKeys.add(key);
            } else {
                newLines.push(line);
            }
        } else {
            newLines.push(line);
        }
    }

    for (const [key, value] of Object.entries(newConfig)) {
        if (!updatedKeys.has(key)) {
            newLines.push(`${key}=${value}`);
        }
    }

    fs.writeFileSync(ENV_FILE, newLines.join('\n'), 'utf8');
}

module.exports = {
    readConfig,
    writeConfig
};
