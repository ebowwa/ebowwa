import { useEffect, useState } from "react";

export default function useOrigin(): string {
  const [mounted, setMounted] = useState<boolean>(false);
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  useEffect(() => setMounted(true), []);

  if (!mounted) return "";

  return origin;
}
// This code snippet defines a custom React hook named `useOrigin`, which is used to retrieve the origin (protocol, hostname, and port) of the current browser window.

// It imports the `useEffect` and `useState` hooks from React.

// Inside the hook, it initializes state using the `useState` hook to manage the mounted state of the component.

// The `origin` variable is assigned the value of `window.location.origin`, which represents the origin (protocol, hostname, and port) of the current browser window. If `window.location.origin` is not available (for example, when running on the server-side or in certain environments), an empty string is assigned to `origin`.

// The `useEffect` hook is used to set the `mounted` state to `true` when the component mounts. This ensures that the hook only returns the origin after the component has mounted.

// If the component is not yet mounted, the hook returns an empty string. Otherwise, it returns the origin value.

// In web development, "window.location" refers to the current URL of the browser window. It provides information such as the protocol (http or https), hostname (domain name), port number, pathname (URL path), and other properties related to the current URL. "window.location.origin" specifically returns the origin part of the URL, which includes the protocol, hostname, and port.
