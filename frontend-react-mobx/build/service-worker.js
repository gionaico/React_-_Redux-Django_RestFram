"use strict";var precacheConfig=[["/index.html","86bad334cb58e24164c5d74b79c1c0b4"],["/static/css/main.7b65e260.css","d64d8aa11bb2b4d6d17e6fbc06768e77"],["/static/js/main.4449b5a5.js","8a48ae966da8f3916452bcdd878271c2"],["/static/media/contacto_bg.ccbead02.png","ccbead0297e114851092c01811097775"],["/static/media/ico1.c29afe03.svg","c29afe03f96b71f70408e81b52250f5b"],["/static/media/logo.0eefa776.svg","0eefa7768082ae749ded7ab040dadce0"],["/static/media/newsletter.2f3256cd.png","2f3256cd7136d36139d8fbe07a46ac47"],["/static/media/slide_emprendedores.564a7a8d.png","564a7a8da28f5f54b92579e32c9d801d"],["/static/media/slider1.0d817c1a.png","0d817c1aaf088f469505d0bae2a0feb3"],["/static/media/slider2.6598429b.png","6598429b53039e06e55229b4da3b6c00"],["/static/media/slider3.a6524ee3.png","a6524ee3f81be5fdb7676db2420e2f5e"],["/static/media/social_facebook.6204f772.svg","6204f772ec8bd939a03506616bae84bd"],["/static/media/social_instagram.0e4a0894.svg","0e4a08949c5fd732d93f9820958893e9"],["/static/media/social_twitter.67ea68ac.svg","67ea68ac24a6ade7b3584f4a174a866b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});