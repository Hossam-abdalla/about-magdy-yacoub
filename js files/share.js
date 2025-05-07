/* Social Share Component JavaScript - All functions prefixed to avoid conflicts */
function socialShareCopyLink() {
    // Get the current URL
    const url = window.location.href;
    
    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = url;
    document.body.appendChild(tempInput);
    
    // Select and copy the URL
    tempInput.select();
    document.execCommand('copy');
    
    // Remove the temporary input
    document.body.removeChild(tempInput);
    
    // Show the copied alert
    const copiedAlert = document.getElementById('social-copied-alert');
    copiedAlert.classList.add('show');
    
    // Hide the alert after 2 seconds
    setTimeout(() => {
        copiedAlert.classList.remove('show');
    }, 2000);
}

function socialShareToSocial(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    let shareUrl = '';
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
        case 'pinterest':
            shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&description=${title}`;
            break;
        case 'whatsapp':
            shareUrl = `https://api.whatsapp.com/send?text=${title} ${url}`;
            break;
        case 'telegram':
            shareUrl = `https://t.me/share/url?url=${url}&text=${title}`;
            break;
        case 'instagram':
            // Instagram doesn't have a direct web share API, but you could redirect to Instagram
            alert('Instagram sharing is typically done through their app.');
            return;
    }
    
    // Open the share URL in a new window
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

/* Initialize function - You can call this with custom options */
function initSocialShareComponent(options = {}) {
    const component = document.querySelector('.social-share-component');
    
    // Apply position options if provided
    if (options.position) {
        // Reset all positioning first
        component.style.top = 'auto';
        component.style.right = 'auto';
        component.style.bottom = 'auto';
        component.style.left = 'auto';
        
        // Apply new positioning
        if (options.position.top !== undefined) component.style.top = options.position.top;
        if (options.position.right !== undefined) component.style.right = options.position.right;
        if (options.position.bottom !== undefined) component.style.bottom = options.position.bottom;
        if (options.position.left !== undefined) component.style.left = options.position.left;
    }
    
    // Apply positioning style if provided
    if (options.positionStyle) {
        component.style.position = options.positionStyle; // 'fixed', 'absolute', 'relative', etc.
    }
    
    // Apply custom colors if provided
    if (options.mainButtonColor) {
        const mainButton = component.querySelector('.share-btn');
        mainButton.style.backgroundColor = options.mainButtonColor;
    }
}

// Auto-initialize with default settings
document.addEventListener('DOMContentLoaded', function() {
    initSocialShareComponent();
});
