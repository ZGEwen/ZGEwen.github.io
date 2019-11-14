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
    "revision": "24d2bbaaed4e18e734f3036fa3ad1d10"
  },
  {
    "url": "about/index.html",
    "revision": "49d0edf9eb7f028ae68838fefb94b0b1"
  },
  {
    "url": "assets/css/0.styles.e1ae1f0c.css",
    "revision": "03ae3d1267127888cb500e76dbf452ab"
  },
  {
    "url": "assets/img/1.fa1a9a7f.gif",
    "revision": "fa1a9a7f9a2c84e3df07e40eaf4f8262"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/home-head.9e98f9ef.png",
    "revision": "9e98f9efba10bcad33519b782a1d09db"
  },
  {
    "url": "assets/img/icon_vuepress_reco.406370f8.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "assets/img/output_10_0.bb909ff0.png",
    "revision": "bb909ff025ba42e73e6f90ee8a8986b4"
  },
  {
    "url": "assets/img/output_12_0.ec151a60.png",
    "revision": "ec151a60531daa6bcdb80fea66373d6d"
  },
  {
    "url": "assets/img/output_8_0.7f731987.png",
    "revision": "7f731987b27cc58d77a61537e658e012"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.bfacb0d5.js",
    "revision": "0dac92d6006cb5fa77f1b63a8f7cff1d"
  },
  {
    "url": "assets/js/10.b0a6fd11.js",
    "revision": "50e2a2d4e505737a7b4f0574053587fa"
  },
  {
    "url": "assets/js/11.8f89eba9.js",
    "revision": "11177c2c6261edc7dd425f47a93847d2"
  },
  {
    "url": "assets/js/12.2f106301.js",
    "revision": "7bd21cbffab2a82d4fff7fe89f7bec30"
  },
  {
    "url": "assets/js/13.a52cea49.js",
    "revision": "13423f7aacd4e9eacc8007fae0ca958f"
  },
  {
    "url": "assets/js/14.7027f4ad.js",
    "revision": "dc76cee299edc1f9a80055526c27261d"
  },
  {
    "url": "assets/js/15.0bab5f59.js",
    "revision": "c8ce363b1728be11d5a499831402b202"
  },
  {
    "url": "assets/js/16.eb25232a.js",
    "revision": "ed14b08c25fd3c6ccd57c35de12d657a"
  },
  {
    "url": "assets/js/17.07ec8ea9.js",
    "revision": "6173e25e325b991534a5f426a8e3cd81"
  },
  {
    "url": "assets/js/18.de51fa4b.js",
    "revision": "94c8416beb61082178a7067fb7f22b60"
  },
  {
    "url": "assets/js/19.5f2dff45.js",
    "revision": "42808f4aab16815cf20d4fcb96323325"
  },
  {
    "url": "assets/js/20.3c34269c.js",
    "revision": "b255159a9688e71c0cce6897904dd5fc"
  },
  {
    "url": "assets/js/4.8658b51d.js",
    "revision": "dd057f2145d194012ff026fbadbb7310"
  },
  {
    "url": "assets/js/5.07b27abc.js",
    "revision": "10adad03f86237774ce834881638114d"
  },
  {
    "url": "assets/js/6.15c26c55.js",
    "revision": "f85581c9ec27eea0eae87839bc9ebc8e"
  },
  {
    "url": "assets/js/7.ba21dfac.js",
    "revision": "91f07fdcbb8a4a52051f7df83b49a738"
  },
  {
    "url": "assets/js/8.e8e0b90e.js",
    "revision": "09760b4f5b69aeb3bc50452054c2fe1d"
  },
  {
    "url": "assets/js/9.05b68e76.js",
    "revision": "f0b7f6d9f2d3df457cd8ecec0c38d932"
  },
  {
    "url": "assets/js/app.b71f5896.js",
    "revision": "7868b4b92460f3b0a2e1c8f897cc03d2"
  },
  {
    "url": "assets/js/vendors~flowchart.8c1c93e8.js",
    "revision": "d7a56d31667050d6a27cc6af909f5980"
  },
  {
    "url": "bg.png",
    "revision": "7c2eac8723aa1d62fc78876d36bb3833"
  },
  {
    "url": "categories/index.html",
    "revision": "e5d63912e4ddbe0e9f1ac30b00fb3585"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "9dd007efd909c08dd0ea7880b5d64b4e"
  },
  {
    "url": "categories/机器学习实战/index.html",
    "revision": "c87a35feb50cd3e7fa7d29792ed7f26a"
  },
  {
    "url": "index.html",
    "revision": "76bd7030191d7d023af83100b9bab72f"
  },
  {
    "url": "logo.png",
    "revision": "181127bddac4a56574f07d75c7de02dc"
  },
  {
    "url": "tag/index.html",
    "revision": "946bb0fbc64f5310c83a645f42dae697"
  },
  {
    "url": "tags/axios/index.html",
    "revision": "9a49d96169de49d4b12fde25ad00d668"
  },
  {
    "url": "tags/baseURL/index.html",
    "revision": "e6037d108c27fad8cb3068a72d72f0de"
  },
  {
    "url": "tags/kNN/index.html",
    "revision": "679de08ce692ab0d2da4e724e42ee4aa"
  },
  {
    "url": "tags/Python3/index.html",
    "revision": "6fba8d4a72e6f4fe6ec32256ac17b3a9"
  },
  {
    "url": "tags/Streamlit/index.html",
    "revision": "9b0d543458c3ce8606640e9936ceedee"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "99df65247991ea5123815ed7b5420d3b"
  },
  {
    "url": "tags/笔记/index.html",
    "revision": "3ed785aca885ddac95b1aa6753456c2a"
  },
  {
    "url": "timeline/index.html",
    "revision": "19b944a29c476efb641412bd8a725efd"
  },
  {
    "url": "try/index.html",
    "revision": "76bd7030191d7d023af83100b9bab72f"
  },
  {
    "url": "views/ml/示例：使用k-近邻算法改进约会网站的配对效果.html",
    "revision": "2bef742d57abee38a36f9d7c5c09b11f"
  },
  {
    "url": "views/ml/示例：使用k-近邻算法改进约会网站的配对效果streamlit版.html",
    "revision": "1c04b6a98786e6864363467b1a1359ef"
  },
  {
    "url": "views/ml/示例：使用k-近邻算法构建手写识别系统.html",
    "revision": "6d60ab71107f9b2bdc3334f54f2961fc"
  },
  {
    "url": "views/vue/Vue项目中使用axios遇到的相对路径和绝对路径.html",
    "revision": "f38b533933e5ee27246ba0c38fb84148"
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
