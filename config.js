// Example configuration file - copy this to config.js and add your webhook
// Obfuscated webhook configuration
const WEBHOOK_CONFIG = {
    // Base64 encoded webhook URL (replace with your actual encoded webhook)
    encoded: 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTQwNTIxNDgyNTgxNDAzNjYxMS9ZOEZiS0p2SDZkTXMydXNvaVVKNUJ0bXVRRlhRUVNpbm15akJIZjlaMWRoZXgtNkw0Zl9feGNQMllPQzBHS19fU1FaaQ==',
    
    // Simple XOR key for additional obfuscation (change this to any number)
    key: 0x42
};

// Function to decode the webhook URL
function getWebhookUrl() {
    try {
        // Decode base64
        const decoded = atob(WEBHOOK_CONFIG.encoded);
        
        // Apply XOR decryption (simple additional layer)
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

// To encode your webhook URL:
// 1. Take your Discord webhook URL
// 2. Encode it to base64: btoa('your_webhook_url_here')
// 3. Replace 'YOUR_BASE64_ENCODED_WEBHOOK_URL_HERE' with the result
// 4. Optionally change the XOR key for additional security
