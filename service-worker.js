const CACHE_NAME = 'todo-app-v1';
const urlsToCache = [
	'./',
	'./index.html',
	'./styles.css',
	'./script.js',
	'./manifest.json',
	'./assets/rocket.svg',
	'./assets/favicon.ico',
	'./assets/icons/android-chrome-192x192.png',
	'./assets/icons/android-chrome-512x512.png',
	'./assets/icons/apple-touch-icon.png',
	'./assets/icons/favicon-16x16.png',
	'./assets/icons/favicon-32x32.png',
	'./assets/og/og-to-do-app.png',
	'./components/addTask.js',
	'./components/checkComplete.js',
	'./components/dateElement.js',
	'./components/deleteIcon.js',
	'./components/readTasks.js',
	'./services/date.js',
	'https://cdnjs.cloudflare.com/ajax/libs/uuid/8.3.2/uuid.min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
	'https://fonts.googleapis.com/css2?family=Dosis:wght@400;600&family=Open+Sans:wght@400;600&family=Parisienne&display=swap',
];

// Instalar el Service Worker y cachear los recursos
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log('Cache abierto');
			return cache.addAll(urlsToCache);
		})
	);
});

// Interceptar las peticiones y servir desde caché si es posible
self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches
			.match(event.request)
			.then((response) => {
				if (response) {
					return response;
				}

				return fetch(event.request).then((response) => {
					// Si no tenemos una respuesta válida, no hacemos nada
					if (!response || response.status !== 200 || response.type !== 'basic') {
						return response;
					}

					const responseToCache = response.clone();

					caches.open(CACHE_NAME).then((cache) => {
						cache.put(event.request, responseToCache);
					});

					return response;
				});
			})
			.catch(() => {
				if (event.request.mode === 'navigate') {
					return caches.match('./index.html');
				}
			})
	);
});

self.addEventListener('activate', (event) => {
	const cacheWhitelist = [CACHE_NAME];

	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cacheName) => {
					if (cacheWhitelist.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});
