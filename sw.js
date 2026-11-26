self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open('ttc3018-live').then(c => c.addAll(['./', './index.html', './manifest.json']))); });
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== 'ttc3018-live').map(k => caches.delete(k))))));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request).then(r => { const cp = r.clone(); caches.open('ttc3018-live').then(c => c.put(e.request, cp)); return r; }).catch(() => caches.match(e.request))));
