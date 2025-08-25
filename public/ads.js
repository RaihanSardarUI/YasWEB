// Load ads when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Set global ad options
    window.atOptions = {
        'key': '826f292d2220f0443cf1b759ae9a729c',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
    };

    // Get all ad containers
    const adContainers = document.querySelectorAll('[data-ad-container]');

    adContainers.forEach(function (container, index) {
        if (container) {
            // Clear container
            container.innerHTML = '';

            // Create a unique container for each ad
            const adWrapper = document.createElement('div');
            adWrapper.id = 'ad-wrapper-' + index;
            container.appendChild(adWrapper);

            // Create and append the ad script immediately
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '//pregnantskipper.com/826f292d2220f0443cf1b759ae9a729c/invoke.js';
            script.async = true;

            // Append to the wrapper
            adWrapper.appendChild(script);
        }
    });
});