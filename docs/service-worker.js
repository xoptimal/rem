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
    "revision": "e1359a124b050b12952f523e65a0e7f1"
  },
  {
    "url": "api/components/ListViewComponent.html",
    "revision": "1d1b7545bf36ffb0326c0d423fa7c10a"
  },
  {
    "url": "api/components/TableComponent.html",
    "revision": "1a4eb61571a3848221d0f5bab31f0f12"
  },
  {
    "url": "api/forms/MobileForm.html",
    "revision": "0ca780100a99ac33409c155157ee1380"
  },
  {
    "url": "api/forms/WebForm.html",
    "revision": "90b9b5fdade62de03f3157febf237be4"
  },
  {
    "url": "api/index.html",
    "revision": "2ecc4c5942530aea912a3f93370373d5"
  },
  {
    "url": "api/modals/CommonModal.html",
    "revision": "1ad15cbe2b2f6165d17d17b8a3a4ac7b"
  },
  {
    "url": "api/styles/CommonStyle.html",
    "revision": "7739c576286b1594d42c01bdb95ad742"
  },
  {
    "url": "api/utils/CommonHelper.html",
    "revision": "a94085043af52f81d2e02e43963f1ad4"
  },
  {
    "url": "api/utils/ExRouteHelper.html",
    "revision": "b6a43877d3f7091aeeff01c00762993a"
  },
  {
    "url": "api/utils/ExToastHelper.html",
    "revision": "7bf2bd7e5d8fba67cb4844e7366144c5"
  },
  {
    "url": "api/utils/InputHelper.html",
    "revision": "000cb7592783bfc532cfae55e8714630"
  },
  {
    "url": "api/utils/RequestHelper.html",
    "revision": "9739a387d50a3dd27060c50127cd99c2"
  },
  {
    "url": "api/views/DescriptionView.html",
    "revision": "7234288094e7f57a698a5c3aafd6b3db"
  },
  {
    "url": "api/views/ExDrawer.html",
    "revision": "ef50d37e528fdf2631a0cb04f956fe5d"
  },
  {
    "url": "api/views/ExListView.html",
    "revision": "78d95e75508174eadace96ea540659dd"
  },
  {
    "url": "api/views/ExModal.html",
    "revision": "8f0c5b50248f731e5ef78a2ae315d3e8"
  },
  {
    "url": "api/views/NavLayout.html",
    "revision": "1a921674dd2174a1dab2332398acf79e"
  },
  {
    "url": "api/views/NetLayout.html",
    "revision": "9caa4902d2defe47b6640fa4bf58d39c"
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
    "url": "assets/js/22.e53f8a2a.js",
    "revision": "490fae4511fb27f70270994bf10ba551"
  },
  {
    "url": "assets/js/23.0e4bf0ad.js",
    "revision": "511f510302cd51d8bf1f629557e40a9a"
  },
  {
    "url": "assets/js/24.897297e4.js",
    "revision": "3b0e4dc8a76b9924dc1ff5d68fb4fdbe"
  },
  {
    "url": "assets/js/3.8343bc68.js",
    "revision": "7ac74ba946b11111d747f17518d86a6b"
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
    "url": "assets/js/app.d35fda73.js",
    "revision": "dca4964f7ccd3f30252af524294ed03b"
  },
  {
    "url": "config/index.html",
    "revision": "dcf58f4154f1b77ae07d52ad87db1a37"
  },
  {
    "url": "guide/index.html",
    "revision": "dd36578ad094fdbe27f563c0d5d01cfc"
  },
  {
    "url": "index.html",
    "revision": "3533a4a2e75ae8b6e26b0082097805e4"
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
