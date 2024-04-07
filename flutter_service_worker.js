'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "60f747cf7f112aac456fce2a2cb23551",
"index.html": "fd2c4d01478bdb65cd5020a96ab96d39",
"/": "fd2c4d01478bdb65cd5020a96ab96d39",
"main.dart.js": "01e9be3f51166fda88281e0be5cf85b2",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1d4f52b4730558f29c1e5701338b2a1a",
"assets/AssetManifest.json": "2249ad5fc2a4a0099c9c833ed3845e90",
"assets/NOTICES": "b3ab31dcd82dd1a7542f28bc16425a2e",
"assets/FontManifest.json": "fd04ba93fdeb0f42ab6fc75e18d4f026",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "15645d421ea48840b28e953605dd879f",
"assets/fonts/MaterialIcons-Regular.otf": "65b27dc011f0e1a0a40ed56dc8056f80",
"assets/assets/applicants_resume_button.png": "5be020252d3b111254ddedf95bc87dc5",
"assets/assets/results_soon_button.png": "55890624e4399d37ece396f36333747a",
"assets/assets/outgoing_resume_button.png": "515d38c90991c3bea5b4ea4cf05c98a7",
"assets/assets/add_outgoing.png": "21ecba4120fe42df39c634131c2d36a1",
"assets/assets/submatch_logo.png": "d87b0474a98683c573d7dfa307a88751",
"assets/assets/start_match_button.png": "c5e3c22f6c09ce505e59ed6a355880cc",
"assets/assets/bg_logo.png": "8150f06ace85b682d1fa841f2b43aa9b",
"assets/assets/file_icon.png": "4e6c1baf10793adaff1a92b81772b07d",
"assets/assets/like_up.png": "2efd269f22e69e8a4ddb30f48630f843",
"assets/assets/attribute_button.png": "7002ab2cd8a5d97ed480df549561f6c5",
"assets/assets/BG30.png": "453ed51fdc953afff9347a9ff8948abd",
"assets/assets/expand_button.png": "448ed8c6fcaacfb87a06917295777773",
"assets/assets/attribute_match.png": "6c5b7d5d579e1dac6e3d975436efe128",
"assets/assets/quick_compare.png": "5aa51aa1458dbef66580a0ddccc9c1d6",
"assets/assets/attribute_soon_button.png": "8cec6cb62356bc7109990bdd099f7f81",
"assets/assets/quick_compare_button.png": "ea15827574f4be75fbed72a63601b1d7",
"assets/assets/start-matching.png": "92bf6bc987103f688c4e9b9972fc6200",
"assets/assets/add_attributes.png": "20ed1385191c097b69aaef04067fc840",
"assets/assets/attribute_match_button.png": "675d6926aa889fb5761816bc5157a050",
"assets/assets/like_down.png": "ae7be8350ea036b1f4c69d6bf55be93b",
"assets/assets/Get-Started.png": "1b5c537812d31c8724817a42b4b162cb",
"assets/assets/like_button.png": "35d55fbadb8ccad561b663ace376a6e5",
"assets/assets/search.png": "28f0689f45091df43f4946970a27ec02",
"assets/assets/get_started_button.png": "037314c788012ba90c1ee8288265dace",
"assets/assets/outgoing.png": "1e0d5fdf4d70a0e741134ee69423a854",
"assets/assets/BG1.png": "a7b3647c7e5f15fb69fcd5435f93ba5d",
"assets/assets/past_result_button.png": "f624df60acaa701bab48fda23f69c45c",
"assets/assets/BG29.png": "98027ab214bf11e154393735de5a4b75",
"assets/assets/close_button.png": "a56c159f42b358c300e3fa6aff91b241",
"assets/assets/add_resume.png": "32565f9c40b727b9dbeab7a1659e3622",
"assets/assets/logo_expand.png": "bddc2a59fbc9b66784dfac074a888266",
"assets/assets/Past-Results.png": "9059b6f2d69052d5260d713d1d487c55",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/start-new-match.png": "cc63b1ecb756eb8d5d3cca594809d42a",
"assets/assets/applicants.png": "e7b18d8b86949f4c03991d4de975d3b4",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
