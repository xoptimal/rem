/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f76d2a71da48c7490e37c1c1f5c90173"
  },
  {
    "url": "api/components/ListViewComponent.html",
    "revision": "4495dc4fb3982044295ff1d755128032"
  },
  {
    "url": "api/components/TableComponent.html",
    "revision": "a143b3cc450c23e68f8bc6b13ec172e7"
  },
  {
    "url": "api/forms/MobileForm.html",
    "revision": "5802401bdb234c8a499ee809bec9ae96"
  },
  {
    "url": "api/forms/WebForm.html",
    "revision": "3316d57f3ed3c99d63e0095f9bf32e70"
  },
  {
    "url": "api/index.html",
    "revision": "9d58b33493cf249516825c6db3a8f053"
  },
  {
    "url": "api/modals/CommonModal.html",
    "revision": "ce4111e5226d95c7d0b207dc05aaf49f"
  },
  {
    "url": "api/styles/CommonStyle.html",
    "revision": "5ccd47995eb413e4d9dd2fa9493fd573"
  },
  {
    "url": "api/utils/CommonHelper.html",
    "revision": "511625fcaa37eb15a8e38efdf18fcc53"
  },
  {
    "url": "api/utils/ExRouteHelper.html",
    "revision": "962eb98c7b8b49ba50ccfc5769d739ee"
  },
  {
    "url": "api/utils/ExToastHelper.html",
    "revision": "39e3cbc880206cab7843aea4cb649240"
  },
  {
    "url": "api/utils/InputHelper.html",
    "revision": "d6c64a00a41014d890a3f1d265fd9971"
  },
  {
    "url": "api/utils/RequestHelper.html",
    "revision": "d733d4e05f5f26fc55c8f5766a56f815"
  },
  {
    "url": "api/views/DescriptionView.html",
    "revision": "b26956747c5bab3b0fceda6204064358"
  },
  {
    "url": "api/views/ExDrawer.html",
    "revision": "9738fdaec0568c649ab809e642630e33"
  },
  {
    "url": "api/views/ExListView.html",
    "revision": "bc71714cf6a653415b1d60d72ce66e9e"
  },
  {
    "url": "api/views/ExModal.html",
    "revision": "f9c5630525959ba25a7e0c7ca0caf9d6"
  },
  {
    "url": "api/views/NavLayout.html",
    "revision": "c81ee4158346bdaf7c1960f7253763c7"
  },
  {
    "url": "api/views/NetLayout.html",
    "revision": "fb6cbb5d6243bac5042a1ac8a275bcb6"
  },
  {
    "url": "assets/css/0.styles.3e9a43d3.css",
    "revision": "b81cd5d07432e64a2181c884da0f27a8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.20f1460a.js",
    "revision": "416bf8224727f4d08dda614d20db70db"
  },
  {
    "url": "assets/js/11.87087887.js",
    "revision": "790e23b1791972b8e989e3e0cf2a7c24"
  },
  {
    "url": "assets/js/12.1f07b2ee.js",
    "revision": "9998178c45090378ad54507e0eb8597f"
  },
  {
    "url": "assets/js/13.c77300c6.js",
    "revision": "d9a7269eea3f9bc7b9119f5b1f2e35f0"
  },
  {
    "url": "assets/js/14.e6d7c7b2.js",
    "revision": "66552722d267ae8d97cd6f139ccdfc7e"
  },
  {
    "url": "assets/js/15.95a46891.js",
    "revision": "7d771a9b4c1146d86dfa517c83f18f8a"
  },
  {
    "url": "assets/js/16.6593060c.js",
    "revision": "ffa1aedc4072a07b9b292d7afbaf5b03"
  },
  {
    "url": "assets/js/17.560b9fe2.js",
    "revision": "27847c5ebac9fc4d0535fe20efec83b7"
  },
  {
    "url": "assets/js/18.c9efcb95.js",
    "revision": "0449128c5ea6bf3e2b023cf9265ed4e5"
  },
  {
    "url": "assets/js/19.d7473f7b.js",
    "revision": "92d094ac21b13977b51923dd0c229943"
  },
  {
    "url": "assets/js/2.2cc3f25f.js",
    "revision": "834f2da9e05519a1b3157907543f6cf1"
  },
  {
    "url": "assets/js/20.c4b8195b.js",
    "revision": "22a081c61edbdca0e49620afa9ae62d7"
  },
  {
    "url": "assets/js/21.5057ed45.js",
    "revision": "9b2be5850a2cf08d34b2f1ebc5f31bb1"
  },
  {
    "url": "assets/js/22.3650c2a8.js",
    "revision": "40f7bd9979eb7158bc8229e15abfb716"
  },
  {
    "url": "assets/js/23.ad513c48.js",
    "revision": "64d7178f3f913baf0e0b4a571b344074"
  },
  {
    "url": "assets/js/24.897297e4.js",
    "revision": "3b0e4dc8a76b9924dc1ff5d68fb4fdbe"
  },
  {
    "url": "assets/js/3.bf024fa6.js",
    "revision": "deed8590367b668518a0971849102f96"
  },
  {
    "url": "assets/js/4.22633a12.js",
    "revision": "6042f2a2710598e9d062752d252cea0d"
  },
  {
    "url": "assets/js/5.631ba49e.js",
    "revision": "444a82b320a019b988906d2fc1385beb"
  },
  {
    "url": "assets/js/6.cd161a1d.js",
    "revision": "88b6d00f746d9966d250c5c2363b0bee"
  },
  {
    "url": "assets/js/7.bc665046.js",
    "revision": "f5943d7b90888a87e24c7d2fa1dbe3fb"
  },
  {
    "url": "assets/js/8.16f2874e.js",
    "revision": "50f9769d16b1f1119c9ead601f6e6874"
  },
  {
    "url": "assets/js/9.f747432f.js",
    "revision": "f499362cc9e21ceacd82b10f19e5caa3"
  },
  {
    "url": "assets/js/app.3fb153f1.js",
    "revision": "ce7fce77ab5254026d3543c576fdf20a"
  },
  {
    "url": "config/index.html",
    "revision": "7ed8402383676212d98deb42a6816a8a"
  },
  {
    "url": "guide/index.html",
    "revision": "b2511e517b8ec422ad6edf913e080863"
  },
  {
    "url": "index.html",
    "revision": "d978f9caececdb852225e4119ae1c7de"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
