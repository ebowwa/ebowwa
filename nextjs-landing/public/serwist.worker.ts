// serwist.worker.ts

// Import the necessary modules and types from the 'serwist' library
import { defaultCache } from 'serwist';
import { Serwist, SerwistOptions } from 'serwist';

// Define the Serwist options
const serwistOptions: SerwistOptions = {
    // Precache the entries defined in the __RSC_MANIFEST (React Server Components manifest)
    precacheEntries: self.__RSC_MANIFEST,

    // Skip the waiting phase and immediately activate the new service worker
    skipWaiting: true,

    // Claim all clients (open tabs) and start controlling them
    clientsClaim: true,

    // Enable navigation preload, which can improve the performance of the first navigation request after the service worker is installed
    navigationPreload: true,

    // Use the default runtime caching strategy defined in the 'serwist' library
    runtimeCaching: defaultCache,
};

// Create a new Serwist instance with the defined options
const serwist = new Serwist(serwistOptions);

// Add the necessary event listeners to the service worker
serwist.addEventListeners();

// Additional things you can do with this script:

// 1. Customize the runtime caching strategy:
// You can define your own custom runtime caching strategy by creating a new object with the desired configuration.
// For example, you can cache specific routes or file types with different caching policies.

// 2. Add custom event listeners:
// You can add custom event listeners to the service worker to handle specific events, such as push notifications or background sync.
// This allows you to extend the functionality of the service worker to meet your application's specific requirements.

// 3. Implement offline support:
// You can use the service worker to provide offline support for your application, caching critical resources and serving them when the user is offline.
// This can significantly improve the user experience, especially for users with intermittent or slow internet connections.

// 4. Integrate with other libraries or frameworks:
// Depending on your application's needs, you can integrate the Serwist service worker with other libraries or frameworks, such as workbox or Workbox Webpack Plugin.
// This can help you leverage additional features and optimizations provided by these tools.

// 5. Monitor and debug the service worker:
// You can add logging and debugging capabilities to the service worker to help you monitor its behavior and troubleshoot any issues that may arise.
// This can be especially useful during development and deployment phases.