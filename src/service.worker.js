self.addEventListener("install", (event) => {
  console.log("Установлен");

  event.waitUntil(
    caches.open("CACHE").then(
      (cache) => {
        cache.addAll(["./", "./index.html", "./index.css", "./fallback.html"]);
      },
      (error) => {
        console.log(error);
      }
    )
  );
});

self.addEventListener("activate", () => {
  console.log("Активирован");
});

async function fetchPriorityThenFallback(event) {
  let response;
  try {
    response = await fetch(event.request);
  } catch (error) {
    response = await caches.match("./fallback.html");
  }

  return response;
}

self.addEventListener("fetch", (event) => {
  console.log("Происходит запрос на сервер");

  event.respondWith(fetchPriorityThenFallback(event));
});
