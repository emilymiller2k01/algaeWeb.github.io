'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.bin": "5bb8eb897734740bda51d1bd81af1e0d",
"assets/AssetManifest.json": "c2b5039c5f01976b2f58c2ba40f74aeb",
"assets/assets/images/Algae%252001.png": "0795cc427218e581ea62d873e7bb7e55",
"assets/assets/images/Algae%252002.png": "c8145e9d2c815648f4167aa665b1fc10",
"assets/assets/images/Algae%252003.png": "524b276217decd8a815b67ef436093a3",
"assets/assets/images/Algae%252004.png": "4d027a783ec6230989ad61db613ad4dd",
"assets/assets/images/Algae%252005.png": "7625d59747612b484f33f293b329d25b",
"assets/assets/images/Algae%252006.png": "4d865f57b4d0ca461462c34d31679950",
"assets/assets/images/Algae%252007.png": "acec10c8ccbd113b38db31b73eebeddd",
"assets/assets/images/Algae%252008.png": "6b87269604f733e09194c4ee64bc3dab",
"assets/assets/images/Algae%2520level%252002.png": "30c0821a9623f284f01e6b06f2abf595",
"assets/assets/images/Algae%2520level.png": "14504105f59fa21d2297344f635c5834",
"assets/assets/images/Amazing.png": "17a8a15b93b54cb23ebbf7bcd0ec7f0e",
"assets/assets/images/Antioxidants.png": "6603681825b5a1cbcedebf9425374aa7",
"assets/assets/images/Biofuel.png": "58e112e72c01ee5f0bbe68eda35bfc9d",
"assets/assets/images/Chromeocard.png": "93edc1ac57e9a5d76635165e2274972c",
"assets/assets/images/copyFluorescent.png": "e7a91f61b9d87d478226922626367035",
"assets/assets/images/copyLEDlight.png": "051a0cfd10f7c05b7b4ed37896945d46",
"assets/assets/images/copySunlight.png": "48df19f43b95e6282016ced23ec46640",
"assets/assets/images/Dial.png": "609d41a7b7d250a10c3392f0b1b367e0",
"assets/assets/images/Dunecard.png": "672ed3e21889f9586bbef0bb5fb0fc30",
"assets/assets/images/Ellacard.png": "d8954ef7254c254a495034a5f46432e2",
"assets/assets/images/England.png": "00c43e133214929134bf63769fd5165b",
"assets/assets/images/Fantastic.png": "e85db21fb204854cd2a85b6880eb32c1",
"assets/assets/images/Fluorescent.png": "ba45587878c71c22eab12fc07f1df7ec",
"assets/assets/images/Food%2520supply.png": "ab589d7f5423f694a4f8bfebdea806ac",
"assets/assets/images/Freshwater.png": "266f071daecc839f4f5c3d9254560873",
"assets/assets/images/Great%2520job.png": "f5e4b84e987fafe2cdca1d8e39351269",
"assets/assets/images/Iceland.png": "c995082f83c688aa333c394f3678dcb6",
"assets/assets/images/LEDlight.png": "c85f93a4847b81bba5575426fc397b52",
"assets/assets/images/Pond01.png": "c88612a740d25ab9d648b4ac4a5f8879",
"assets/assets/images/Pond02.png": "d17e157536609e18d233c061dd21e82a",
"assets/assets/images/Pond03.png": "ca61196b71e299c0beaeca8f17b60a1b",
"assets/assets/images/Pond04.png": "5dfe24890a07025939b6e702adf07732",
"assets/assets/images/Pond05.png": "65a4be1cf1ef713f638149ea1414bf47",
"assets/assets/images/Protein.png": "739570337bc6f370785edfac1b1aa881",
"assets/assets/images/Raphaelcard.png": "01fd1efefb958cc1e214cd28eef10a9a",
"assets/assets/images/Saltwater.png": "63ad9ed688bcd1fb918e4dc977e6258b",
"assets/assets/images/SaudiArabia.png": "48edb12183a6e1e79a4add50004c8efc",
"assets/assets/images/Scotland.png": "de8ad5f3909d59c30eed41b4f3c33998",
"assets/assets/images/Spyrocard.png": "88df5908324388adfff6b982d66eb324",
"assets/assets/images/Squaretank01.png": "8711f98f5fdbc98b5b8715a2f359d105",
"assets/assets/images/Squaretank02.png": "39f103f2948ae27c322666e0b8a3f1d3",
"assets/assets/images/Squaretank03.png": "b147ee5664d9385e006bdcc6cd38e2c8",
"assets/assets/images/Squaretank04.png": "143311640c85539c4d6040193bbf47ce",
"assets/assets/images/Squaretank05.png": "77dcb9cb23a6e17fbbfa5bdfe640b2a5",
"assets/assets/images/Sunlight.png": "fdcf0e56e25bea574c8749b72dc00c90",
"assets/assets/images/Temp.png": "c91f7fd9f6fcd76c0ce73ecff8421e5f",
"assets/assets/images/Theocard.png": "af790450d9a455ec852e2e01ff272521",
"assets/assets/images/Time.png": "5a0807a24200536a556faaad76cb009e",
"assets/assets/images/Title.png": "922ca62ca065a63f939d734d1de9dba2",
"assets/assets/images/Tubetank01.png": "b291e7e8dfb78f6356f880006e703e15",
"assets/assets/images/Tubetank02.png": "59eb7f2c55a3918f5a7e32d6d2f728fc",
"assets/assets/images/Tubetank03.png": "775fc7274b94e5baeb5be720e7594d0f",
"assets/assets/images/Tubetank04.png": "0a4c0135db6c3e776a08e70ea6c2a4e6",
"assets/assets/images/Tubetank05.png": "5e876e621eb1b698cd5cd65909fdd445",
"assets/assets/images/Waveguidetank01.png": "2025c5db1acf27da3bff3658ef5690c3",
"assets/assets/images/Waveguidetank02.png": "6ef6d9801b5889838d6f2102f7a0d9f5",
"assets/assets/images/Waveguidetank03.png": "03f3c1020ed3c123b35ad43451a04081",
"assets/assets/images/Waveguidetank04.png": "b2ea91629b4789ac9c6435b9305047c2",
"assets/assets/images/Waveguidetank05.png": "c62f5b80fd04e7d337da0d5d5a567238",
"assets/assets/images/Welldone.png": "1974b8045cba3e8c955f23983e3704e1",
"assets/FontManifest.json": "5c955cb0c277fca7c52c51c033270fb4",
"assets/fonts/MaterialIcons-Regular.otf": "48edc4ce26b7ba9eb683418fad111a52",
"assets/NOTICES": "76f307bcda92a73f0a023932a782bc52",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/neon/lib/fonts/Automania/Automania.ttf": "3baf3e2ca3c97dc06fcd1332b7fa0d73",
"assets/packages/neon/lib/fonts/Beon/Beon.otf": "725bc066722fdfc327f582568e8ce97e",
"assets/packages/neon/lib/fonts/Cyberpunk/Cyberpunk.ttf": "9deb7d5fae2c035eb8b7d35f62169309",
"assets/packages/neon/lib/fonts/LasEnter/LasEnter.ttf": "c161024b53fd9d99a60fa0ebc0a587fb",
"assets/packages/neon/lib/fonts/Membra/Membra.ttf": "e378d80f5875e9095843e141e283897e",
"assets/packages/neon/lib/fonts/Monoton/Monoton-Regular.ttf": "f6aa15866bffca161454d7554a004259",
"assets/packages/neon/lib/fonts/Night-Club-70s/Night-Club-70s-Bold.ttf": "c06f06e0a1b9e7bdb9ece19e455ae9cb",
"assets/packages/neon/lib/fonts/Night-Club-70s/Night-Club-70s-Regular.ttf": "2f52ea89848cc22583a19a3517387465",
"assets/packages/neon/lib/fonts/Samarin/Samarin.ttf": "e86112fa7734f71b0292102dfb322181",
"assets/packages/neon/lib/fonts/TextMeOne/TextMeOne-Regular.ttf": "475b539094d914ff68e420b4571c96c3",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "1338eccfe817956d34753284f2b1cdf6",
"canvaskit/canvaskit.wasm": "21caa647209531f823c0a58c085c86ec",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5ef4eaed85c726213222d20529ee6b01",
"/": "5ef4eaed85c726213222d20529ee6b01",
"main.dart.js": "0a9c7361172d9edb1c108042cd1662de",
"manifest.json": "955a094939c6cb4333a997cba3f14c7c",
"version.json": "fda1c943391cf9c16806aa1bb03dd323"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
