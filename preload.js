window.addEventListener('DOMContentLoaded', () => {
    const preload = document.createElement('script');
    preload.src = 'preload.js';
    preload.type = 'text/javascript';
    document.body.appendChild(preload);
});