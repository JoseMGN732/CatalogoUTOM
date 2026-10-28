/* Service worker: guarda los archivos para que la app funcione sin internet */

const NOMBRE_CACHE = "tiid-v5";

const ARCHIVOS = [
    "./",
    "index.html",
    "css/styles.css",
    "js/data.js",
    "js/app.js",
    "manifest.webmanifest",
    "img/icon-192.png",
    "img/icon-512.png"
];

// Al instalar: guarda los archivos
self.addEventListener("install", function (e) {
    e.waitUntil(caches.open(NOMBRE_CACHE).then(function (c) { return c.addAll(ARCHIVOS); }));
    self.skipWaiting();
});

// Al activar: borra cachés viejas
self.addEventListener("activate", function (e) {
    e.waitUntil(
        caches.keys().then(function (claves) {
            return Promise.all(claves.filter(function (k) { return k !== NOMBRE_CACHE; })
                                    .map(function (k) { return caches.delete(k); }));
        })
    );
});

// Al pedir un archivo: usa la caché y, si no está, internet
self.addEventListener("fetch", function (e) {
    e.respondWith(
        caches.match(e.request).then(function (r) {
            return r || fetch(e.request).catch(function () { return caches.match("index.html"); });
        })
    );
});
