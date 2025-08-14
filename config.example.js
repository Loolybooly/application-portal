const WEBHOOK_CONFIG = {
    encoded: 'sigma_webhook',
    
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
