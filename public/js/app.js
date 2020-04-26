if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log("service worker registered", registration);
            })
            .catch((err) => {
                console.log("error", err);
            })
    })
}