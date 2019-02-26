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
    "revision": "eb8ec40e5f0b315cebadb8db4c0991e6"
  },
  {
    "url": "api/components/ListViewComponent.html",
    "revision": "4d0d630538fd37734354b091fbe6e733"
  },
  {
    "url": "api/components/TableComponent.html",
    "revision": "0901d18b75ea6c76a858b5699d65cccd"
  },
  {
    "url": "api/forms/MobileForm.html",
    "revision": "64fb59b97b45dfcc0d78a03184f8071d"
  },
  {
    "url": "api/forms/WebForm.html",
    "revision": "bd1b4b4a2b2281e9f53dbf8f420a7a52"
  },
  {
    "url": "api/index.html",
    "revision": "fde7c8b3072fea11a4707c2a78e159d1"
  },
  {
    "url": "api/modals/CommonModal.html",
    "revision": "321f83eab89238b1118702042cd08ea6"
  },
  {
    "url": "api/styles/CommonStyle.html",
    "revision": "c657b3242b0c44f817d78e267d4bd295"
  },
  {
    "url": "api/utils/CommonHelper.html",
    "revision": "6f18f97c2375344feeca5bcdc212d3a7"
  },
  {
    "url": "api/utils/ExRouteHelper.html",
    "revision": "5eb17a3e0d5887575faaa1cc7757476d"
  },
  {
    "url": "api/utils/ExToastHelper.html",
    "revision": "c641f07d7d24aa44d037107b3df7bf4e"
  },
  {
    "url": "api/utils/InputHelper.html",
    "revision": "54e9ff66518e2070fe13e9175ca89b55"
  },
  {
    "url": "api/utils/RequestHelper.html",
    "revision": "dbd020225fecb194fb31002dcc1237e7"
  },
  {
    "url": "api/views/DescriptionView.html",
    "revision": "9bfb54fe1bb84178a7758b26e6669f53"
  },
  {
    "url": "api/views/ExDrawer.html",
    "revision": "71124b03d93fbeb345188f98ba2d440b"
  },
  {
    "url": "api/views/ExListView.html",
    "revision": "5e9f2bedc88a7d84eb3051bcdfb82d13"
  },
  {
    "url": "api/views/ExModal.html",
    "revision": "21b128208c5d3cdf18c8c47e0d2cf5de"
  },
  {
    "url": "api/views/NavLayout.html",
    "revision": "8e5d360fd474ae339992779b327ac4b3"
  },
  {
    "url": "api/views/NetLayout.html",
    "revision": "cd313102aee27a99166030d14ef97ae3"
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
    "url": "assets/js/2.3d367515.js",
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
    "url": "assets/js/23.19b0feca.js",
    "revision": "f73fb774a92879f31c8c1989a19280c5"
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
    "url": "assets/js/app.787a7245.js",
    "revision": "d4b6f5b7f75581ff21e0e06fe2d2b755"
  },
  {
    "url": "config/index.html",
    "revision": "41d55a56bee02ef4e036bccc8d749a90"
  },
  {
    "url": "guide/index.html",
    "revision": "586fb85da93b42ffb4bb7399d112c8f4"
  },
  {
    "url": "index.html",
    "revision": "9f877a210801653784fc388cce7aae59"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
});
