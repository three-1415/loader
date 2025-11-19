importScripts("https://raw.githubusercontent.com/three-1415/loader/refs/heads/main/hi8.js");

const sw = new UVServiceWorker();

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
