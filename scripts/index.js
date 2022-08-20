async function createCache (){
    if ('caches' in window) {
        const newCache = await caches.open('new-cache');
        const urls= ['styles/index.css', 'index.html', 'scripts/index.js'];
        newCache.addAll(urls); 
    }
}

window.addEventListener('load',createCache)
