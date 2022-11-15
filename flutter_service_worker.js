'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6623a141c731a413982efad87221ae05",
".git/config": "ad6d37291f98c10ba2cd8de2d133a37c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a2a8df81e12d4d98bbdebf2d1be77e55",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "ee69b4fd1ba6e962f196ea88f1f3669b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "96146cb068d17db8e067020b4201b281",
".git/logs/refs/heads/main": "4c408a977a538976051bd5270cb7dca2",
".git/logs/refs/heads/tmp": "257dc25a6bdc8bc0a02a76a3ab8d8f04",
".git/logs/refs/remotes/origin/main": "c90eb7cbaed4f667fe6910aefdfc1d8d",
".git/objects/00/2ade4a3526441487026a753ac983791998cd54": "68063c52d8c39b230d0662b99ac4ce57",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/19bf5c07e6ac7347f18390980d805bd34092af": "a4a799de3479c9316af4e61ec3c9a58a",
".git/objects/09/f57895f7a37b5b2ab5e2324bf45763dd3c2399": "0d4a9776860c281d9afc4eee20f0e9b5",
".git/objects/10/1ce8e4ca43d9345efea5b071e18ffd51830619": "37f6a597efbefd46209409503e805aa8",
".git/objects/1a/81c767c8ecb322e046875c0b2cab72aadd80a0": "8471e7a2d7cc3a417fa6fde6dd1c61d8",
".git/objects/1b/dd819b78c5d142c57f94a1e6d00c3f55834d86": "0629f305968c6ccc61bafcb84620b6a4",
".git/objects/1c/877365f97558e68ea705c0eb90e2b10e30f4c6": "48a596bc0b10f6161206a674e849f2ba",
".git/objects/1d/d3d0c3f72f6ce2471640b2147c09933db2fd1f": "286308a84776078b1ae5bc83df450159",
".git/objects/22/1a1989e6bf23707951ef9d3646ea727971ff25": "1e395c159fa5571108785815fbbfeafd",
".git/objects/25/3d2b145238253182329cf1a7067094fdb523b1": "854f384e8422dfdaf978ab3c06a8ff7c",
".git/objects/26/23761c16adf0006e8f373766bb6bcddcdb6a3a": "bc0e24b5ba1fd0fd9175056308e7744a",
".git/objects/27/3e678d1405d2774c4c1ffab1c0bcf328f1f781": "f40c5a9b015fdcb3ecfc18e225a97d53",
".git/objects/28/fcf828833255887056dd1060963a6419437710": "f4c6f4023f8a03a51e14490e6d8a54e8",
".git/objects/29/a05ad6d342377938cc9cadea8f31fa0d673af8": "11176ae5c31fa3b288753427f0741cf0",
".git/objects/2b/a54988ba1e14d1c05ee506f7a59f67aab914c5": "697a39d5f81cccff36eeafdece11eeb1",
".git/objects/2c/391297dd317cf83e7730d95938f3e777143b39": "803ff93db3a1926b43c5dfe3f3841c5b",
".git/objects/2c/eba71d0911b123c9581232043b3d27727eda16": "be52995891f122028be78c74d78d6afa",
".git/objects/2d/c319bfb7654c572a809915991a088ead0d1c91": "37b90e7fad155f0e7846eb94041e0dea",
".git/objects/2f/7289b01753964cdbf0f3bf80527b1e091f89e9": "6fba8b929b1617e1485803657e371dba",
".git/objects/30/fb9b2018ae1c273ed2c308ee413c632614bbf2": "18b4d473168c9d13a640591296d2c741",
".git/objects/31/01d6634ee3a578a28720c64b6a1a3a45b9240a": "b94f4af238a4937158c84f7da53e5d69",
".git/objects/36/33463f58d663aa55b68efad34dd25b36315572": "aff237e6ead0bd108047052802829487",
".git/objects/3a/bdaf0d2da3ecf0d0327aac6e27e5840ad9cca6": "60bbc13433157359af13d124aa529eb0",
".git/objects/3b/f57c723cf2e5a2668d8ffcf443577ecd8cb482": "852b6aece91d031b454f0c8e840d450d",
".git/objects/41/0b232d567db8d3c70182efc203f8b4c975237e": "0e4a0a0e2adcbf8f0ce536db5be5f0ae",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/b4e50d1c1ff08533db469a249981252de1b895": "7652d329eefe2e49b525ab8df10d05a5",
".git/objects/45/0552b1ee13089c7f770fd3f6d685c01861c5b5": "5e0649c8f1a353d0a5d603ccdf303622",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/e6ae16392a856e1cba302470968a965ee986ea": "ad8c88078cd9b167f38a01ab06ed08e3",
".git/objects/52/1dedc2c745fb6f827a9e8c247eb763b78f65b2": "709af77ccc2424e93f8d2aa797111a81",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/54/355f9dc230e56fd55692171fcd602fdab310ce": "15eb2f40fb5719f45d5c7786e3a43a4a",
".git/objects/56/aad26e52d2c305e6cfc6d38553d53dae0fc8f2": "eae58a3a6808655f4e3e802fd6571f2d",
".git/objects/5c/451400208fca80326ae3f012ad57b27db2b252": "793988431a15b18556b8d38f95510125",
".git/objects/5e/8b00333886356afbd1fef938075c271e12bec8": "aced09a77db85075e67f65ef4e0d2078",
".git/objects/60/d0014bb2513ad3ee9b0b75ed40904954e97c43": "53c17f800a358be6854121f5272bf5a4",
".git/objects/62/37f06a9c9a0ca07ff46d39b08dfa655f1b9531": "4eea53e227e634981d5e1fc55a6282ba",
".git/objects/69/b3e6f48c6ab073da56a0b07c3a235392c6b4e5": "d46868e5b574531a858e89eee261b787",
".git/objects/6c/060d036e95100a7e88bc83affe5446954a6250": "df3ec90dac02fb4c8bf4449c83fc2a30",
".git/objects/6f/bea0451b8740b708d2dd3cd5d93c99ea5f0426": "99c466932c052d4699015afdf42316b0",
".git/objects/70/ba42a11eff9c9d3f2cdfb26c489c4c9b90f509": "b50297e002d7167b00097811140eb909",
".git/objects/72/240336fb109c53c30b3b99ea1078a829f8d2d0": "5b199af795864509c4ac889d05f93786",
".git/objects/79/6ebced4637c6082acbaa7e85e8f81d7c4832cd": "e1ec3b9d031b1cd52ee2abe88d4220d0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/b022a12633e6d0d4480195c0226ed8bbeb44f6": "29f9527d3ae33e4ac18cd5ebe10ff2b5",
".git/objects/85/2c4ece70133d7695dd52f75e6ce9d6e277869b": "79920d159f2ea5373dc729c2ecd539bb",
".git/objects/88/36014cb622952643513beb5af4298d3279f4a4": "c2d8868ed872354ec2807786267768ae",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/0cb024c11b24f82ad1b99a4e5e641b195d5fda": "9ce4f4854ab94b5c0a73b248529a2dbf",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/92/7434e3a43abb39572ff6970e740522310f91f1": "3d9502e86ea65062812fe00d5a7642e4",
".git/objects/9a/f2c8fb2375cfde030bf6a9138e0d7e00f40a94": "8b9e3c3619a7a8cf1b47105e0513ccdb",
".git/objects/9c/15d515f07965c380450dd7cca900cb53cf863f": "b882937d0010e9fab2bc92870ea4cf2b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/6ee7ce03ac7d1e46bc9e8ba0396caef012a378": "008babbd29524150b986862126d5b45d",
".git/objects/a5/632a58d7e4f7c2bd2a6f2ed27071d0bbddab5f": "7d0ee7ec936cdc354cb5e366953b9eea",
".git/objects/a5/bbd01a901acd0719b86b43d517236a0a4627ea": "ed9bccef706d271012e5c0185af8587e",
".git/objects/a6/f52bcc35c6dc77ff49ec36ac2427237e284162": "799357ef022eb735ca9d028af90c02f6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/b6473131fa42d37ccc28b10a955071e4c6f0ea": "7e1fdd416916cc23f3d189b322df4d55",
".git/objects/af/f08b8076bc84a9dc2095aad68ed57b898eedda": "7afd57ade2a8dd287437ca17d6954df7",
".git/objects/b6/9cbdd74b4fed1df9892617838e3073b03190aa": "b921ed74053d84d37e1ed3e63c8fec82",
".git/objects/b6/d10126b5c3f8e18618d0759fc0f6421f92c0f4": "7ebacf172cad96f9fecadd9d7a0178d7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/1e003b37d5267a97e11c7c56e03d77b80ccca2": "2bb3bd2afd2c0396ee348d6a9927e119",
".git/objects/c4/401f3ece6654952cfec3f606c6a5adff2b11e8": "3b61caaa95f0cc9fc93956e1d9b4e3d8",
".git/objects/c6/659e0960a0a3c8243746127cd06327f8f17283": "16424ffcf965511aa70cd78987053ca6",
".git/objects/c9/b827e3a0d505c6059e286877bddbe899ccefca": "e00bac27f0cc25479d13cf9527ac6ea7",
".git/objects/cd/201130d6d22e29ec7bb22cd8e4669478459df7": "07ed9deaf723abb818816f95a10b3d51",
".git/objects/d0/646ded6d55ec0ca3bdb7cb441e50c45e4e6cd5": "ceb1d32d2e863be7c6702c38b16372ef",
".git/objects/d2/cc7517b4e442a417ce082619c4f6fb870c0490": "e59a605e9000c6068ae10209dbb87c26",
".git/objects/d3/f0121aed3c57abd5ae3d42bd734ebc58374987": "b82e6ae9a339f5caec4021f6d096273e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/b306a561786c37dc1f5323cdaffb4ad7acdf2f": "9bf31c254a51edb07de76e7fe2ac6d2c",
".git/objects/da/a9ff64420c1bbbc2e3e7f70de8074b6c6c7406": "fb39114d2bbb07477d622a6fda3c94e4",
".git/objects/dd/f4640e72dd7521eb1162747c240619f16f7d01": "80e6949e4af6e63889945f653be657cf",
".git/objects/e4/64155b99753e137bccae266f4c0ae7c07a7224": "39f9b67c93b5ddc2dcc1b3991b8d7ac3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ea/f07cc1097d4cb23bab4988b50b0102e02dbff2": "43247215174e82497da85dfe287fbaba",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/2762607ca4b201448c089cdd48834a609ee8c5": "4e608efab049065effbfb0b4afa57545",
".git/objects/f5/0b78b9997f8272e3d4393cc4dc6a32220e0f68": "35520aec0182323eab5166a3112787eb",
".git/objects/f5/36c21116e8210fa9dc1a6dc705224cd02c35da": "fac17d6ba0a4fe4468dc59ddeab0769c",
".git/objects/f6/3b2007094be9830c01279160386858f7405cc7": "2426beee11e0bf54347b6397a7ad069b",
".git/objects/f7/5974718ac295767394e9063c8a6b50eb7cd4d5": "f10a7f98d1c9833fda32516ba7e17faa",
".git/objects/f8/bd2a5c7e8f6b35387937cc04c245c3f7ef34b2": "b660989df965e9feccaee52c78f1fc52",
".git/objects/fb/85dc1e9ef93ceb4ca4399ffadb7ebc697128ce": "70cc012da4899bad31f3b7e92b170587",
".git/objects/fb/c7f31e119cd8da9afe00690a3e5d9f38563358": "e2bef5921b2b77ce513f385e81503124",
".git/ORIG_HEAD": "e1fb6a637682dffdb4e516bfd1c4bbf5",
".git/refs/heads/main": "54c8e9bd3221f6032ab0f05a2cd1fb48",
".git/refs/heads/tmp": "2b24863741e875f1ceac488e124621b9",
".git/refs/remotes/origin/main": "54c8e9bd3221f6032ab0f05a2cd1fb48",
"assets/AssetManifest.json": "5707be6dd3d8533fb707343ff00cbcd8",
"assets/assets/coming-soon.json": "698ffb59f5a48207a861ae4cc6258ee0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "9b9df3833f511332f1bc0fda9268d1bd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "a04e492a05f9fd1a8cc6f12163b184dd",
"canvaskit/canvaskit.js": "687636ce014616f8b829c44074231939",
"canvaskit/canvaskit.wasm": "d4972dbefe733345d4eabb87d17fcb5f",
"canvaskit/profiling/canvaskit.js": "ba8aac0ba37d0bfa3c9a5f77c761b88b",
"canvaskit/profiling/canvaskit.wasm": "05ad694fda6cfca3f9bbac4b18358f93",
"CNAME": "7ccc5478e2e835a01e67d34cd73754c7",
"favicon.ico": "c3d4491efefdb9222669ebb65227d8b0",
"flutter.js": "195f32f4217e034162a6697208586f44",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "54a3ff08a8cec4eb6ca7f213f0036026",
"/": "54a3ff08a8cec4eb6ca7f213f0036026",
"main.dart.js": "a76b52990089a158e3ee08e5fbcdee84",
"manifest.json": "f24f3a0bc822c1e61b6293eb0d6de0a6",
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
