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
    "revision": "843061339958a56da43724eb9666de8c"
  },
  {
    "url": "api/components/ListViewComponent.html",
    "revision": "c206cc8760d30db11571ac11588bf4bc"
  },
  {
    "url": "api/components/TableComponent.html",
    "revision": "b21384d7e16e616e7eac129d0db5e21b"
  },
  {
    "url": "api/forms/MobileForm.html",
    "revision": "66edace2700019b0aab05e429b9ff5b5"
  },
  {
    "url": "api/forms/WebForm.html",
    "revision": "216c9a826bbc0f26d3a8a51632e07e2c"
  },
  {
    "url": "api/index.html",
    "revision": "b4d46991d51d9226f8cdca048ce0d2c1"
  },
  {
    "url": "api/models/Common.html",
    "revision": "3fb4fcea394a4df28394ae19e86a39f1"
  },
  {
    "url": "api/styles/CommonStyle.html",
    "revision": "4f8234c63a6d794706fc90f2a60ce0e6"
  },
  {
    "url": "api/utils/CommonHelper.html",
    "revision": "4b2d306728c198c950ddda194d3b04a5"
  },
  {
    "url": "api/utils/ExRouteHelper.html",
    "revision": "4d63bd215e756cbb5ee3ceea7a0bbe76"
  },
  {
    "url": "api/utils/ExToastHelper.html",
    "revision": "7e7acf5c9757e2dadcfeca2517682b59"
  },
  {
    "url": "api/utils/InputHelper.html",
    "revision": "7fdfcf5d92f414c4c5b575bc3eab07b0"
  },
  {
    "url": "api/utils/RequestHelper.html",
    "revision": "9c30a45d17a9b823b40c1da78a54dec5"
  },
  {
    "url": "api/views/DescriptionView.html",
    "revision": "1dd9a64bcbe805bd0ec2bd1a764672de"
  },
  {
    "url": "api/views/ExDrawer.html",
    "revision": "eef854ef2abe39d548575636398cf6df"
  },
  {
    "url": "api/views/ExListView.html",
    "revision": "76ffe8a455db69985a7a42b7ad9823b3"
  },
  {
    "url": "api/views/ExModal.html",
    "revision": "ad733c35ecc78fc0cc99a5b9f13877b5"
  },
  {
    "url": "api/views/NavLayout.html",
    "revision": "bd03f9eeee7f18986df25b9067eac67d"
  },
  {
    "url": "api/views/NetLayout.html",
    "revision": "40c97063bac96537cc7a4f2f476cf04e"
  },
  {
    "url": "assets/css/0.styles.f5dd2495.css",
    "revision": "50258271486054d46fdba919430b6c6f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.339ead66.js",
    "revision": "416bf8224727f4d08dda614d20db70db"
  },
  {
    "url": "assets/js/11.e95971ee.js",
    "revision": "790e23b1791972b8e989e3e0cf2a7c24"
  },
  {
    "url": "assets/js/12.67c2001d.js",
    "revision": "9998178c45090378ad54507e0eb8597f"
  },
  {
    "url": "assets/js/13.6b2fb6ad.js",
    "revision": "d9a7269eea3f9bc7b9119f5b1f2e35f0"
  },
  {
    "url": "assets/js/14.af0f4360.js",
    "revision": "66552722d267ae8d97cd6f139ccdfc7e"
  },
  {
    "url": "assets/js/15.dc7e888d.js",
    "revision": "7d771a9b4c1146d86dfa517c83f18f8a"
  },
  {
    "url": "assets/js/16.815729d2.js",
    "revision": "ffa1aedc4072a07b9b292d7afbaf5b03"
  },
  {
    "url": "assets/js/17.84c36589.js",
    "revision": "27847c5ebac9fc4d0535fe20efec83b7"
  },
  {
    "url": "assets/js/18.026e18b8.js",
    "revision": "0449128c5ea6bf3e2b023cf9265ed4e5"
  },
  {
    "url": "assets/js/19.cc8aed81.js",
    "revision": "92d094ac21b13977b51923dd0c229943"
  },
  {
    "url": "assets/js/2.57cd34da.js",
    "revision": "834f2da9e05519a1b3157907543f6cf1"
  },
  {
    "url": "assets/js/20.6cd5ff9c.js",
    "revision": "22a081c61edbdca0e49620afa9ae62d7"
  },
  {
    "url": "assets/js/21.dbdaead6.js",
    "revision": "9b2be5850a2cf08d34b2f1ebc5f31bb1"
  },
  {
    "url": "assets/js/22.f317ac53.js",
    "revision": "40f7bd9979eb7158bc8229e15abfb716"
  },
  {
    "url": "assets/js/23.292f04a7.js",
    "revision": "64d7178f3f913baf0e0b4a571b344074"
  },
  {
    "url": "assets/js/24.762a82ef.js",
    "revision": "3b0e4dc8a76b9924dc1ff5d68fb4fdbe"
  },
  {
    "url": "assets/js/3.b6d05caf.js",
    "revision": "deed8590367b668518a0971849102f96"
  },
  {
    "url": "assets/js/4.e04ba772.js",
    "revision": "6042f2a2710598e9d062752d252cea0d"
  },
  {
    "url": "assets/js/5.c5043ceb.js",
    "revision": "444a82b320a019b988906d2fc1385beb"
  },
  {
    "url": "assets/js/6.539c219f.js",
    "revision": "88b6d00f746d9966d250c5c2363b0bee"
  },
  {
    "url": "assets/js/7.17498244.js",
    "revision": "f5943d7b90888a87e24c7d2fa1dbe3fb"
  },
  {
    "url": "assets/js/8.25da25e0.js",
    "revision": "50f9769d16b1f1119c9ead601f6e6874"
  },
  {
    "url": "assets/js/9.5fd7e3af.js",
    "revision": "5b88f24188cdab5ce76d75dc54971ab5"
  },
  {
    "url": "assets/js/app.b59bf647.js",
    "revision": "816e7d21b8dad976bfb36052fec5167a"
  },
  {
    "url": "config/index.html",
    "revision": "7d289618c8aae3e79a29a60dc449ee34"
  },
  {
    "url": "guide/index.html",
    "revision": "414ebc5653d2d426558a2d75dcfd8270"
  },
  {
    "url": "index.html",
    "revision": "b381be7047e75f7e037436f759838f70"
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
