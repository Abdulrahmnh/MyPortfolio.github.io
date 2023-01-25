'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7a69268f2b8fcea9ab23388584b5c2fb",
".git/config": "ad6d37291f98c10ba2cd8de2d133a37c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "fe30b3cc825f06c4362434ce89b25b7e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1a1ecc146ec733bfb753792f7070611f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7f9200ce5cc55b2567546cea9236f50d",
".git/logs/refs/heads/main": "ff9855df9aca82350142c40a49f6e9fb",
".git/logs/refs/remotes/origin/main": "9c8813e8b87d3d3e6b55406bd9ef5d4f",
".git/objects/02/eebd3fc09c0c7e9ee5192ecfde34c641c4969f": "31db583dd566fe24998298a91a9878b9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/335bc84fe75d727ae9b53ca33cd134964966e5": "a66373ff72cc1795c05952dacd66f50a",
".git/objects/06/8b58f2ed61e0d7f70da07fc2b9942e5efa529b": "b1e8f9599b69904cd8849f3ac4d75c78",
".git/objects/12/e72113a494849eefb411d79d0b3cb748e66950": "3a36e3350dcb9fdb6b1fbd969ba166a0",
".git/objects/16/2b7b69ee2ea4a2bbc84127707c2756373ff4c5": "3e56269a80a47d779ea3393135dd3757",
".git/objects/18/0e8db8ee8017b992d6d534d12a96075108d3de": "d67bd0e3abcf189ee9349bec901f0633",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/20/33008f83d518dcd433161d6465642cfd75f0a4": "f751b228c33175d8bac308bd11007f38",
".git/objects/21/628f2aa174f071b582214f2c1748fcb23c5688": "29021ad174f088792ba9a9322687bfe4",
".git/objects/23/91cefaacca7bfcddb29822176ac65885ec9346": "855ad387a41b202fa7e8ced5977ae6ab",
".git/objects/23/f8d9406198f6c756df1af9438df9d48cc40709": "a0245be1ffa6aea1ed860635559c86e9",
".git/objects/25/dbb647ca23504979a32ee34b7a356795e052a1": "55d203408f32a559dd05091084e88f67",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/9a9946f8157b9893359d91d604c066e361e903": "ddd6e6bb84e91a16e552ccfffde7dab1",
".git/objects/2e/ee997b9de8b9f4527ddd8e29d2e359c0865f78": "6613680f608c1540099cb9b18d86cdac",
".git/objects/30/b0d949c90e5c0e90fbc55bd0f565abe7f6f39b": "bba0ef46b70c83d7a1c6041302245366",
".git/objects/31/353564009760e42d74bdd3fbf680372af7c5f8": "665c1bcb593734c1f0453b9fd36ea1f8",
".git/objects/34/0b90147801a61377fb67a485b5c237aa73f77e": "2fd3a736d8ff40340466b0c33b709a8c",
".git/objects/3b/745b1c4fbb0d0310dffbfeb05a453f359be7d7": "4d2d613c515e83e8557ad585430323c5",
".git/objects/3b/7886654693d25c01c634c6f7ed5bec7d230b58": "caacb2224c834e2e5b3092fd26aa55f0",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/43/c2545b63d077055deb38923e710ad633fb9fd8": "22467d9e67e8745ff8bb60cfee93912f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/aa49ad4de6e5d8480edc45f125aab4cbd725da": "293a1a469aeaf3a95b6510a3875b076d",
".git/objects/49/fb326016f8f118c1cad2113e4c22712a3234b9": "434d26318170f2ccf46b09860307987c",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/5c/2f30c9cb446423af285b128deb215f15e203de": "4aa542543bb7a7fbfd6eeab1d3c945cb",
".git/objects/5f/1306ac729f5026f50130a586f6e3c404b2f7c0": "9f2c12aca41e92873a108b540062f0d4",
".git/objects/6b/53a6095d2e9d63a511b1c0226eceeb4152ee76": "e1e050b789063a9d4ffa889b56c43a38",
".git/objects/6d/ed1e4a6f24b61e795662cf459019148cb40f47": "7f249bf8c37ed85c4690bc98e0a2d47b",
".git/objects/6f/ba7d9aa99327669293267d887b7f6da6233a18": "d215fad00a9354201643ab175b566e09",
".git/objects/6f/d845730e01637ead797a5ad11e0e2a9dc02eac": "3f7ef92b24af5561e51f8bb89715fd0c",
".git/objects/74/1389ca3c7ffb9123d01d49afa912e3691ecf50": "d228cb5fd614cb8d7a38940f01afc4d1",
".git/objects/77/51f8e1f7f4669dffe8a26de3daa01d057843ed": "900cc0a45a06859fad320625103452c0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/b3bac08a6551e7eebe4e463a18f21a76f01b9d": "5018b7656750f2e1e2e0f0f6d5bd40b4",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/52d5798bf4c310909586daf14c182259a2f361": "6c031f1b39b6a55fe8b3e5a6a52159c7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/b4583676eae449f29e997c9ac5021ad20fdcb1": "89d6a9d88987bacc6e2024cb5a4d17aa",
".git/objects/91/37293c18e4da8d19cd8d37806752a8dcf4e44c": "6bf0dbf8c53419f9d9620eb061ae9f00",
".git/objects/92/1345bd4bdeb31170d3a425c7d702c21bdc34d0": "fc8dd0185eb5c7d0e9f52c4418f09b74",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/892dfb9039566b1d5b2d6210f0b90b9fb21375": "beb847d51efe3be34bec68bf5bb544b1",
".git/objects/98/9463c0962b5adc4d74b00dbe87097feee8c990": "212f83682ad95ea455e03d726ff181f2",
".git/objects/9a/362c1a4a062fc7da4239c4d921e474ca64bef5": "72948d1c66825c3180937e766e4e9315",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/19ce89b7d7d65ef9902b844e8ec07534096c18": "923dcee51b265af52a0d6c3204d7e37e",
".git/objects/a5/4af5bc4d43318e35efa9b34560850658306186": "b1c2b1306f0705a17a590c6337434d38",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/ca9cd15d211a2442d80d8a7a033a1667170027": "e43c87b1e2c2871f9bf41e53e159cac0",
".git/objects/b1/8d3f7ec9eb15a2f831a14417b2ce0e41d0717f": "1f2a0252cd2106e7e3aab031cc26fa9e",
".git/objects/b2/f652e7a1bba6c6dc0ddc027f212cda65623e5c": "bd6a7f7e4234f3572ec3800fc733624a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c0/c402498980b4ca88f0e5aaa757574f8e195571": "e71b06633027dd3f1541fe58967aaeb4",
".git/objects/c1/a4890f6bc5da8e2ad4d8f812e3ed433fca7af3": "9ee379a1013039ca082dd7140c86933d",
".git/objects/c4/401f3ece6654952cfec3f606c6a5adff2b11e8": "3b61caaa95f0cc9fc93956e1d9b4e3d8",
".git/objects/cb/68235b5611f8bb22914773693a55ddb7743546": "d9556638d055ffcf7357bb0275cc8bec",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/2467b2ca9f104efd9e5c6747debe4021752c51": "050ae7e1ecc3c2378261bf897e4069ac",
".git/objects/d0/271fef027b75feda4a5220d726f7fb78aaf38d": "91c91738b76a0a54721c99df6247b987",
".git/objects/d1/4b81e9bc7fc33e4c993271e6c71c354945f646": "db04e64aee46f37740e5b12219586c44",
".git/objects/d1/e019f122618d668bff81f08064c909981f031f": "22878c5aa113a43dba11b77df24e5e97",
".git/objects/d4/63aa1874d42fb2581f8cc021044f8c564f089d": "5b2bbf93eeacab6dc4e1cdba75df0a19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/c4f975ab75f14fa75e08170026df4869ee52a5": "ad7cdb3a6ceab106e314a9c7368be289",
".git/objects/dd/3548e8a2bba75e300bb0fee2afbda269f8a5cd": "1f4e6fc8cf7ee8744fdff29ab7b99c1a",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/d98e01fe1530beb11c4ab62c7a5a3df8a2d372": "62140cd83fce83f522c7880c8ab203a4",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/ea2943a63b0f4bb43d45ef3f2b046b6f76c882": "d9d7cb5d92739933cc07b0b651015838",
".git/objects/e1/a76b338bb6c67993000025e8730870c51f3176": "7dfe417a97f4151296d8b896ed02efd4",
".git/objects/e2/107f902e2d5a01fb6f29db9da00b9da0fdf7d5": "39de407ba9b686c2eeda02ddc87ebf24",
".git/objects/e2/8c79aa1d2bb29b12609a1fbfe996b4b7b47bb4": "8d5e0a183e449515199825f262000a40",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/ac4128c2ce01f7546a446b2290e980ef7da810": "054b79e593fcb9b63d90cbcd72f286e5",
".git/objects/ec/cc36ad8c478136f372a9c98ad67efa741f083e": "8fd92cfe7667edff987b4a7b0381dba8",
".git/objects/f1/a1f8babf1786f48cb8546f7f9958522ac0dad3": "06a5d0adc686d2073586ec39367f54e2",
".git/objects/fa/3aa6618fac6de3f5044de4f4552d2e6182820c": "a873d0df9b2cf9f66de76d8d53704efc",
".git/refs/heads/main": "3484c7bc26f5f2c1129eab3cc6fb1745",
".git/refs/remotes/origin/main": "5fcf3cac75b9de81346084facd9b2768",
"assets/AssetManifest.json": "de4a40444183eff507a5982f7a6bd386",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "01b7d967f59bb3bfb08d4b8014f993eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e9f2f143310604845f8aa26c42ad5f55",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ebeb9e24f865260330313bffb3d13c24",
"/": "ebeb9e24f865260330313bffb3d13c24",
"main.dart.js": "1c2f7acc8981a9d925e1efb8b9bec5ac",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"
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
