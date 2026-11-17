'use strict';
const CACHE = 'forward-black-blue-v2-0-0';
const ASSETS = ['./', './index.html', './style.css?v=2.0.0', './app.js?v=2.0.0', './manifest.json', './icon-192.png', './icon-512.png', './plop.wav', './thud.wav'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([caches.keys().then(keys => Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))),self.clients.claim()]));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(event.request).then(response => {
    if (response && response.ok) { const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy)); }
    return response;
  }).catch(()=>caches.match(event.request).then(cached => cached||caches.match('./index.html'))));
});
