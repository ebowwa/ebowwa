import { RefObject, useEffect, useState } from "react";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = false,
  }: Args,
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, root, rootMargin, frozen]);

  return entry;
}

export default useIntersectionObserver;
// The `useIntersectionObserver` hook is a custom React Hook used to track the visibility of a specific DOM element relative to its containing element or the viewport.

// It is commonly employed in React applications to implement various UI features such as lazy loading images, infinite scrolling, or triggering animations when elements enter or leave the viewport.

// This hook efficiently monitors when an element becomes visible to the user, enabling developers to perform actions or trigger effects based on its visibility state.

// For instance, it can be used to dynamically load content, like images, only when they become visible in the viewport, thus improving performance by loading content on demand.

// Additionally, developers can implement features like infinite scrolling by observing the visibility of a trigger element located at the bottom of the page. Upon entering the viewport, this trigger can fetch additional data to append to the existing content, providing a seamless user experience.

// The intersection information provided by this hook can also be leveraged to trigger animations or other visual effects when elements come into view or move out of view.

// Overall, the `useIntersectionObserver` hook offers a flexible and efficient solution for handling visibility-related interactions in React applications, enhancing the user experience by optimizing performance and enabling dynamic behavior based on element visibility.
