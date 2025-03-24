const cacheName = "clickgame-cache-v1";
const assets = [
  "/index.html",
  "/leaderboard.html",
  "/about.html",
  "/ball.png",
  "/coin.mp3"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
