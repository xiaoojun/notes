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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "04ae2bc1b9fe558c48380ed291daec5e"
  },
  {
    "url": "assets/css/0.styles.44077ee5.css",
    "revision": "ce6d35e6ea70459c56c84ddbfa1e5cfe"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f067e472.js",
    "revision": "da4e5b3c93d8619ef651cba49318539e"
  },
  {
    "url": "assets/js/11.3456d6ae.js",
    "revision": "eba337bf7ef15404ec8a4eeda2e77465"
  },
  {
    "url": "assets/js/12.b2668f31.js",
    "revision": "8e5fbbdf8d5921e6d4e85cd64c1dba39"
  },
  {
    "url": "assets/js/13.4bf0ff78.js",
    "revision": "a39ef8e72d2d6cb9b2031ac47cefeca9"
  },
  {
    "url": "assets/js/14.98b053e2.js",
    "revision": "dd8ef59e25594cc38666359f89a39ec5"
  },
  {
    "url": "assets/js/15.678af564.js",
    "revision": "c35bd8368004d8735927b1e2bcd16a7d"
  },
  {
    "url": "assets/js/16.eef2675a.js",
    "revision": "11d5b6f48236df09d8826e6ee75a00c6"
  },
  {
    "url": "assets/js/17.f381ea0f.js",
    "revision": "6e4eb84f5b6a74194aac290df2cb73eb"
  },
  {
    "url": "assets/js/18.96f2964d.js",
    "revision": "047a57e19a392f3212aa7ce528194854"
  },
  {
    "url": "assets/js/19.bcfbb986.js",
    "revision": "a8fe09eccd7cbf7345947a5e5321121c"
  },
  {
    "url": "assets/js/2.5bcd11a3.js",
    "revision": "372e7c7e4461a58596eef2e87338923b"
  },
  {
    "url": "assets/js/3.729ab745.js",
    "revision": "7e90896ac01ad3031c17a002f4dc8b08"
  },
  {
    "url": "assets/js/4.793feb68.js",
    "revision": "077169a6a2d0ea36699aae16125de0a9"
  },
  {
    "url": "assets/js/5.7cf14d81.js",
    "revision": "ed9eec28fe8f2b9dbf1a7c7dd4f54630"
  },
  {
    "url": "assets/js/6.14aa9855.js",
    "revision": "383d067e3d55c66a596a7cad6283e825"
  },
  {
    "url": "assets/js/7.f4aae905.js",
    "revision": "facf90f1ecd212e46a501eb91eb4f8dc"
  },
  {
    "url": "assets/js/8.20cd3249.js",
    "revision": "3742ade85756f9a83c53a0a7b0e8f8af"
  },
  {
    "url": "assets/js/9.9fb0919e.js",
    "revision": "671c08982a51a3eed7ef84d3671642ec"
  },
  {
    "url": "assets/js/app.d23db79b.js",
    "revision": "6efafa8ae89d842ec623dea35b2d0489"
  },
  {
    "url": "index.html",
    "revision": "e4e469541e210ff180dfebfa36341bd3"
  },
  {
    "url": "life/index.html",
    "revision": "bda209e906b3c468f748a26c252daedd"
  },
  {
    "url": "logo.png",
    "revision": "46bb0e215bd7f8ef64c4aac8e6d33439"
  },
  {
    "url": "others/index.html",
    "revision": "1b713f669c9955dfd46d5cc142930793"
  },
  {
    "url": "technology/ios/flutter_widget.html",
    "revision": "76337e175a180f82c6192499356cdc77"
  },
  {
    "url": "technology/ios/Flutter-State.html",
    "revision": "13a7c2502758de4996c4f2fea849341f"
  },
  {
    "url": "technology/ios/flutter01.html",
    "revision": "6208d8790165a5b807ba51d3f5901497"
  },
  {
    "url": "technology/ios/flutter02.html",
    "revision": "b8e3ee7b981292f606bedc6db1eb591b"
  },
  {
    "url": "technology/ios/index.html",
    "revision": "50103a93fde7bf233f06dbfa66cc4bf1"
  },
  {
    "url": "technology/ios/ios_gcd.html",
    "revision": "d7189f6a2f39d65cb671d6b0eb94feee"
  },
  {
    "url": "technology/mac/index.html",
    "revision": "c5a8b5e186f5e08f3c898c947b2aae8d"
  },
  {
    "url": "technology/others/index.html",
    "revision": "b8d0a8ffa37f29254fa9bb32828b46cd"
  }
].concat(self.__precacheManifest || []);
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
