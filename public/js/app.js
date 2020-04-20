if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then((registration) => {
            // registration successful 
            // CHECK SCOPE
            console.log("Service worker registered: ", registration);
        })
        .catch((err) => {
            console.log("Error: ", err);
        });
    })
}