importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/549fb86e38187dc1e90f.js",
    "revision": "42c425d733b8ea9907a8be17785d9347"
  },
  {
    "url": "/_nuxt/713d401a3f147185dda4.js",
    "revision": "4e3a921310770e7e78e1e09dd3399f44"
  },
  {
    "url": "/_nuxt/775a994d66b27bb8b6e2.js",
    "revision": "31872d2fea2ffdc06473c30851010dad"
  },
  {
    "url": "/_nuxt/8678580adf513920a768.js",
    "revision": "7729ea7c3fae8e52405a07ed11c39fc7"
  },
  {
    "url": "/_nuxt/8c5523128f530e245fc4.js",
    "revision": "069c2f5073e361884ba53d07c3f0bff6"
  },
  {
    "url": "/_nuxt/9cfe2d9965da5d3ab7d1.js",
    "revision": "ea6f582413954d9d0089f53ce742fbde"
  },
  {
    "url": "/_nuxt/cbec6edcf9846099468b.js",
    "revision": "96ea3e5aa9212ed5c8a725f855ad7ff9"
  },
  {
    "url": "/_nuxt/cbf03ce5e706e3bd8ba4.js",
    "revision": "e9e93b63f122ec38c0ce39f9d85a414a"
  },
  {
    "url": "/_nuxt/cff80d962a901d155492.js",
    "revision": "b8aeae2724e57471a16c2bc9509c2d01"
  },
  {
    "url": "/_nuxt/d949558073bfbe1911cb.js",
    "revision": "4457da05dc6bc115b0c1bc6981bcef3c"
  },
  {
    "url": "/_nuxt/de8de207536763751f6e.js",
    "revision": "a3cc85d3d33d8d291486776c3b2a4a4e"
  },
  {
    "url": "/_nuxt/e1f6e3da6e4998ebaa8b.js",
    "revision": "0bf1ec7d8792176ff69872e6522a67cf"
  },
  {
    "url": "/_nuxt/f7c9ea0fc3919b08c895.js",
    "revision": "818a58ac156aeef46410ad3d7acca78d"
  },
  {
    "url": "/_nuxt/fc2d79856e462b8882a7.js",
    "revision": "704f328092835c81bebcbc8a5a4d60f1"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
