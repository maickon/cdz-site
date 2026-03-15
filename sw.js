const CACHE_NAME = "meu-pwa-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/database.js",
  "/icon.js",
  "/style.css",
  "/script.js",
  "/pages/ARMORS.js",
  "/pages/CHARACTER_CREATE.js",
  "/pages/COMBAT.js",
  "/pages/COSMO.js",
  "/pages/HOME.js",
  "/pages/MARKET.js",
  "/pages/RESUME.js",
  "/pages/SKILLS.js",
  "/pages/TALENTS.js",
  "/pages/TECHNIQUES.js",
  "/img/icon-192.png",
  "/img/icon-512.png",
  "/athenas.jpg",
  "/bg.jpg",
  "/sparta.jpg",
  "/m1.jpg",
  "/m2.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {

      if (response) {
        return response;
      }

      return fetch(event.request).then(networkResponse => {

        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });

      });

    })
  );
});