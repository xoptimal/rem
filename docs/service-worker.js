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
    "revision": "eca03e6186e2a0e18b292ccaf09fa345"
  },
  {
    "url": "api/components/ListViewComponent.html",
    "revision": "157cfe23c6fec8be4ce8eee3665e8557"
  },
  {
    "url": "api/components/TableComponent.html",
    "revision": "25fd4dd925ef743fa83c36f6df6f238b"
  },
  {
    "url": "api/forms/MobileForm.html",
    "revision": "bc4945c210170abc9ac13405c9b52ecc"
  },
  {
    "url": "api/forms/WebForm.html",
    "revision": "5237de0c74582c16773cc9420952a70a"
  },
  {
    "url": "api/index.html",
    "revision": "c0c75f085d73d10317e2e025cd8277e3"
  },
  {
    "url": "api/modals/CommonModal.html",
    "revision": "fb67b64c01464bf2917bc3ac3fd644ac"
  },
  {
    "url": "api/styles/CommonStyle.html",
    "revision": "e2969b250c50b5a69f5b0f71f3ed65e7"
  },
  {
    "url": "api/utils/CommonHelper.html",
    "revision": "9fa7f7c448d6b89a1b3bd666ea6f2168"
  },
  {
    "url": "api/utils/ExRouteHelper.html",
    "revision": "b7043c0d6b07973dce8d765a2d6b4802"
  },
  {
    "url": "api/utils/ExToastHelper.html",
    "revision": "a86e61a64a7f89962b3dffdb5021d241"
  },
  {
    "url": "api/utils/InputHelper.html",
    "revision": "3c1037820de103c919f1150ba6c92bbc"
  },
  {
    "url": "api/utils/RequestHelper.html",
    "revision": "ff9f67bd1a82f8b9e5a9b10ffb62a66a"
  },
  {
    "url": "api/views/DescriptionView.html",
    "revision": "023ad8f8f373ace28842619f137def96"
  },
  {
    "url": "api/views/ExDrawer.html",
    "revision": "e71942d158fedda0873e61aa230c9b08"
  },
  {
    "url": "api/views/ExListView.html",
    "revision": "8719829d4f91c3a6783e6d7f3c6e21bf"
  },
  {
    "url": "api/views/ExModal.html",
    "revision": "2249b3f5ec4d1dd41507fd005e945ed8"
  },
  {
    "url": "api/views/NavLayout.html",
    "revision": "76298ea3fc68c94c454e83a0c3311f55"
  },
  {
    "url": "api/views/NetLayout.html",
    "revision": "fd13a6aa3225b6e1dc36256790c0843c"
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
    "url": "assets/js/23.c3b3529c.js",
    "revision": "7492fe20b5c2587990f17191b3902e1b"
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
    "url": "assets/js/app.20b960ae.js",
    "revision": "d863d2f9729126360bd5a0074f5ec72e"
  },
  {
    "url": "config/index.html",
    "revision": "78769fc5b6fe0818b557ac37a8c613f7"
  },
  {
    "url": "guide/index.html",
    "revision": "2173d9fe958a29d76cac006a99312ae1"
  },
  {
    "url": "index.html",
    "revision": "04cb0de04047add688fd2c0bc4be8902"
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
