# Unleash the Power of AI in Your Next.js 14 App with fal.ai

In the ever-evolving world of web development, the integration of cutting-edge technologies is crucial to staying ahead of the curve. One such technology that has been making waves in the industry is fal.ai, a powerful AI platform that enables developers to seamlessly incorporate AI capabilities into their applications. In this blog post, we'll explore how you can leverage the power of fal.ai in your Next.js 14 app, using the new App Router and TypeScript.

## Prerequisites

Before we dive in, make sure you have the following prerequisites in place:

1. **Existing Next.js App or New Project**: You'll need either an existing Next.js app or a new one created using `npx create-next-app`.
2. **fal.ai Account**: You'll need to have a fal.ai account, which you can create by visiting the [fal.ai website](https://fal.ai).
3. **API Key**: You'll need to create an API key, which you can do by following the instructions on the fal.ai website.

## Step 1: Install the fal.ai Libraries

Start by installing the necessary fal.ai libraries using your preferred package manager. In this example, we'll use npm:

```bash
npm install @fal-ai/serverless-client @fal-ai/serverless-proxy
```

## Step 2: Set up the Proxy

The proxy will protect your API key and prevent it from being exposed to the client. In this example, we'll be using the App Router, so we'll create a route handler in `src/app/api/fal/proxy/route.ts`.

```typescript
import { route } from "@fal-ai/serverless-proxy/nextjs";

export const { GET, POST } = route;
```

In this file, we're re-exporting the `route` object from the `@fal-ai/serverless-proxy/nextjs` package, which provides the `GET` and `POST` route handlers.

Next, let's add some custom logic to the proxy handler. For example, we can add analytics and rate limiting:

```typescript
import { route } from "@fal-ai/serverless-proxy/nextjs";
import analytics from "../../../utils/analytics";
import rateLimiter from "../../../utils/rateLimiter";

export const POST = async (req: Request) => {
  // Add some analytics
  analytics.track("fal.ai request", {
    targetUrl: req.headers.get("x-fal-target-url"),
    userId: req.user.id,
  });

  // Apply some rate limit
  if (rateLimiter.shouldLimit(req)) {
    return new Response(JSON.stringify({ error: "Too many requests" }), {
      status: 429,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // If everything passed your custom logic, now execute the proxy handler
  return route.POST(req);
};

export const GET = route.GET;
```

In this example, we're adding some custom logic to the `POST` route handler, such as tracking analytics and applying rate limiting. The `GET` route handler is simply re-exporting the built-in `route.GET` handler.

Make sure to replace the `analytics` and `rateLimiter` imports with your own implementation, or create placeholder functions for the time being.

## Step 3: Configure the Client

In your main file (e.g., `src/app/page.tsx`), configure the fal.ai client to use the proxy:

```typescript
import * as fal from "@fal-ai/serverless-client";

fal.config({
  proxyUrl: "/api/fal/proxy",
});
```

This tells the fal.ai client to use the proxy we set up in the previous step.

## Step 4: Generate an Image

Now that the client is configured, you can generate an image using the `fal.subscribe` function. Here's an example:

```typescript
const result = await fal.subscribe("110602490-lora", {
  input: {
    prompt: "A beautiful landscape with mountains and a lake",
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
```

In this example, we're using the `fal.subscribe` function to generate an image based on the provided prompt. We're using a LoRA model with the ID `"110602490-lora"`, and specifying the model name, image size, and other parameters.

The `fal.subscribe` function returns a `result` object, which contains the generated image URL. You can then use this URL to display the image in your Next.js 14 app.

## What's Next?

Image generation is just one of the many capabilities that fal.ai offers. Here are some additional steps you can take:

1. **Check the Demo Application**: Explore the demo application at [github.com/fal-ai/serverless-js/apps/demo-nextjs-app-router](https://github.com/fal-ai/serverless-js/apps/demo-nextjs-app-router) to see more examples of how to use fal.ai in a Next.js 14 app with the App Router.
2. **Explore the Available Model APIs**: Familiarize yourself with the various model APIs available on fal.ai by visiting the [fal.ai/models](https://fal.ai/models) page.
3. **Learn How to Write Your Own Model APIs**: Dive deeper into the world of serverless functions by reading the [Introduction to Serverless Functions](https://fal.ai/docs/introduction-to-serverless-functions) guide.
4. **Understand Function Endpoints**: Learn more about serving functions and how to deploy your app to platforms like Vercel by reading the [Serving Functions](https://fal.ai/docs/serving-functions) guide.

By following these steps, you'll be well on your way to unleashing the power of AI in your Next.js 14 app using fal.ai.