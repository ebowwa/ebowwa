2.4. Custom proxy logic
It's common for applications to execute custom logic before or after the proxy handler. For example, you may want to add a custom header to the request, or log the request and response, or apply some rate limit. The good news is that the proxy implementation is simply a standard Next.js API/route handler function, which means you can compose it with other handlers.

For example, let's assume you want to add some analytics and apply some rate limit to the proxy handler:

import { route } from "@fal-ai/serverless-proxy/nextjs";
 
// Let's add some custom logic to POST requests - i.e. when the request is
// submitted for processing
export const POST = (req) => {
  // Add some analytics
  analytics.track("fal.ai request", {
    targetUrl: req.headers["x-fal-target-url"],
    userId: req.user.id,
  });
 
  // Apply some rate limit
  if (rateLimiter.shouldLimit(req)) {
    res.status(429).json({ error: "Too many requests" });
  }
 
  // If everything passed your custom logic, now execute the proxy handler
  return route.POST(req);
};
 
// For GET requests we will just use the built-in proxy handler
// But you could also add some custom logic here if you need
export const GET = route.GET;

Note that the URL that will be forwarded to server is available as a header named x-fal-target-url. Also, keep in mind the example above is just an example, rateLimiter and analytics are just placeholders.

The example above used the app router, but the same logic can be applied to the page router and its handler function.

3. Configure the client
On your main file (i.e. src/pages/_app.jsx or src/app/page.jsx), configure the client to use the proxy:

import * as fal from "@fal-ai/serverless-client";
 
fal.config({
  proxyUrl: "/api/fal/proxy",
});

Protect your API Key
Although the client can be configured with credentials, use that only for rapid prototyping. We recommend you always use the proxy to avoid exposing your API Key in the client before you deploy your web application. See the server-side guide for more details.

4. Generate an image
Now that the client is configured, you can generate an image using fal.subscribe and pass the model id and the input parameters:

const result = await fal.subscribe("110602490-lora", {
  input: {
    prompt,
    model_name: "stabilityai/stable-diffusion-xl-base-1.0",
    image_size: "square_hd",
  },
  pollInterval: 5000,
  logs: true,
  onQueueUpdate(update) {
    console.log("queue update", update);
  },
});
 
const imageUrl = result.images[0].url;

See more about SD with LoRA used in this example on fal.ai/models/sd-loras

What's next?
Image generation is just one of the many cool things you can do with fal. Make sure you:

Check our demo application at github.com/fal-ai/serverless-js/apps/demo-nextjs-app-router
Check all the available Model APIs
Learn how to write your own model APIs on Introduction to serverless functions
Read more about function endpoints on Serving functions
Check the next page to learn how to deploy your app to Vercel
