const STATIC_CACHE_NAME = 'static-cache-v4';
const DYNAMIC_CACHE_NAME = 'dynamic-cache-v1';

const urlsToCache = [
    '/',
    '/views/fallback.html',
    '/css/bootstrap.min.css',
    '/css/styles.css',
    '/img/homescreen/cinema-96x96.png',
    '/js/jquery-3.4.1.min.js',
    '/js/bootstrap.min.js',
    '/js/app.js',
    '/js/home.js',
    '/manifest.json',
    '/img/homescreen/cinema-144x144.png'
];

const limitCacheSize = (cacheName, size) => {
    caches.open(cacheName)
        .then((cache) =>{
            cache.keys()
                .then((keys) => {
                    if (keys.length > size) {
                        cache.delete(keys[0]).then(limitCacheSize(cacheName, size));
                    }
                })
        })
}

// listen to install event
self.addEventListener('install', (event) => {
    // console.log('install');
    event.waitUntil(
        caches.open(STATIC_CACHE_NAME)
            .then((cache) => {
                console.log('default assets cached');
                return cache.addAll(urlsToCache);
            })
    )
});

// activated event
self.addEventListener('activate', (event) => {
    console.log('activated');
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter(name => name !== STATIC_CACHE_NAME)
                        .map(name => caches.delete(name))
                )
            })
    )
});

// fetch event
self.addEventListener('fetch', (event) => {
    // console.log("fetch event", event.request);
    if (event.request.url.indexOf('firestore.googleapis.com') === -1) {
        event.respondWith(
            caches.match(event.request)
                .then((cacheResponse) => {
                    return cacheResponse || fetch(event.request)
                        .then((fetchResponse) => {
                            return caches.open(DYNAMIC_CACHE_NAME)
                                .then((cache) => {
                                    cache.put(event.request.url, fetchResponse.clone());
                                    limitCacheSize(DYNAMIC_CACHE_NAME, 5);
                                    return fetchResponse;
                                })
                        });
                })
                .catch((err) => {
                    return caches.match('/views/fallback.html');
                })
        )
    }
})