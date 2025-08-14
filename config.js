const WEBHOOK_CONFIG = {
    encoded: 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTQwNTIxNDgyNTgxNDAzNjYxMS9ZOEZiS0p2SDZkTXMydXNvaVVKNUJ0bXVRRlhRUVNpbm15akJIZjlaMWRoZXgtNkw0Zl9feGNQMllPQzBHS19fU1FaaQ==',
    key: 0x42
};

function getWebhookUrl() {
    try {
        const decoded = atob(WEBHOOK_CONFIG.encoded);
        
        let result = '';
        for (let i = 0; i < decoded.length; i++) {
            result += String.fromCharCode(decoded.charCodeAt(i) ^ WEBHOOK_CONFIG.key);
        }
        
        return result;
    } catch (error) {
        console.error('Error decoding webhook URL:', error);
        return null;
    }
}
