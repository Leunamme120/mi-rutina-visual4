'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c0a8957349696c135d473427dc8c03ba",
"assets/AssetManifest.bin.json": "bc54b04980671f67ebb14fc1bac09d2a",
"assets/AssetManifest.json": "7fc18460114e4a9819dd0683e71e366e",
"assets/assets/google_logo.png": "153c536dbf057db3aebff7ce405d609b",
"assets/assets/images/almuerzo.PNG": "c6f95a8af28aed213794d466d453d54f",
"assets/assets/images/bano.png": "3b64b6e40440bc6cb8db9d22639eae93",
"assets/assets/images/colegio.PNG": "c3c0de401de3d8f8d4d9fa1290c1ba23",
"assets/assets/images/desayuno.PNG": "77f10a5eb733cea68fd8913c59cf2124",
"assets/assets/images/ducharse.PNG": "d8583e06be4f16fd525d19c868f16354",
"assets/assets/images/ejemplo.png": "683128e3b241ad6f645eed0456a1a6a1",
"assets/assets/images/juego.PNG": "f66b9e555240e3e24d624bee7c2828f7",
"assets/assets/images/mochila.png": "08ef4312e3f1bd73aeda021ab966cf73",
"assets/assets/images/pictogramas/almuerzo.PNG": "c6f95a8af28aed213794d466d453d54f",
"assets/assets/images/pictogramas/bano.png": "3b64b6e40440bc6cb8db9d22639eae93",
"assets/assets/images/pictogramas/correr.PNG": "e5221844034fabb27755f928d260dfc2",
"assets/assets/images/pictogramas/correr2.PNG": "ffcfed6187d5d449d938f30e346be2fe",
"assets/assets/images/pictogramas/desayuno.PNG": "77f10a5eb733cea68fd8913c59cf2124",
"assets/assets/images/pictogramas/Dormir.PNG": "ef6995435f3af8b1d2fe30e11ecf76b5",
"assets/assets/images/pictogramas/ducharse.PNG": "d8583e06be4f16fd525d19c868f16354",
"assets/assets/images/pictogramas/ejemplo.png": "683128e3b241ad6f645eed0456a1a6a1",
"assets/assets/images/pictogramas/juego.PNG": "f66b9e555240e3e24d624bee7c2828f7",
"assets/assets/images/pictogramas/mochila.png": "08ef4312e3f1bd73aeda021ab966cf73",
"assets/assets/images/pictogramas/usuario.PNG": "92d73f0fec350c838d97e86ddcbfdfbf",
"assets/assets/images/pictogramas/usuario2.PNG": "2a1169c76f6c5b7548005b9957043f6c",
"assets/assets/images/pictogramas/vestir.PNG": "d6f2abf77b6d808a7aba3157b5cde63d",
"assets/assets/images/premios/confeti1.png": "1833a3cc768ae04ef3521c26ec9ed012",
"assets/assets/images/premios/confeti2.png": "6f1b074f701063cbf80abb32598a4a6b",
"assets/assets/images/premios/copa.png": "62cbf33cfc73f50e27933caaa317f3c2",
"assets/assets/images/premios/copa1.png": "232cb212a17799df704703d184a32665",
"assets/assets/images/premios/estrella.png": "e04ad3937a6d4279525647f53dbd7187",
"assets/assets/images/premios/estrella1.png": "abff5bb64845fe5d7389426a7957aa6c",
"assets/assets/images/usuario.PNG": "92d73f0fec350c838d97e86ddcbfdfbf",
"assets/assets/images/usuario2.PNG": "2a1169c76f6c5b7548005b9957043f6c",
"assets/assets/images/vestir.PNG": "d6f2abf77b6d808a7aba3157b5cde63d",
"assets/assets/sounds/test_sound.mp3": "737205a0c77fd92fc2ceaff7a0544938",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ec21f621c2380e65127d3bff111f5a75",
"assets/NOTICES": "146c48831b768d8654b3d50bc08e3f55",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "258057c85bad311938638bcf7ee3b01a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "684cf4a182c0cc54527f98c367695263",
"/": "684cf4a182c0cc54527f98c367695263",
"main.dart.js": "5f0ed43254a0344909e848ab07ef5b00",
"manifest.json": "7857d4e9c40bc1433030a8e9c236cb8e",
"version.json": "4c47f63e39bdd6c7968b022b02921e15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
