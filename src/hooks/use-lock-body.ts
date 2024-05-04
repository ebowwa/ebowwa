import * as React from "react"

// @see https://usehooks.com/useLockBodyScroll.
export function useLockBody() {
  React.useLayoutEffect((): (() => void) => {
    const originalStyle: string = window.getComputedStyle(
      document.body
    ).overflow
    document.body.style.overflow = "hidden"
    return () => (document.body.style.overflow = originalStyle)
  }, [])
}
// The `useLockBody` function is a custom React hook used to prevent scrolling of the body content by locking the overflow property of the body element.

// It utilizes the `useLayoutEffect` hook from React to perform the locking and unlocking of the body scroll as a synchronous side effect of mounting and unmounting the component respectively.

// When the component mounts, the hook captures the current overflow style of the body element using `window.getComputedStyle(document.body).overflow` and stores it in the `originalStyle` variable.

// Subsequently, it sets the overflow style of the body element to "hidden", effectively preventing scrolling of the body content.

// The hook returns a cleanup function that restores the original overflow style of the body element when the component unmounts. This ensures that the scroll behavior is reverted to its original state, allowing scrolling to resume as normal.

// Overall, the `useLockBody` hook provides a convenient way to temporarily disable scrolling of the body content, which can be useful in scenarios such as modal dialogs or sidebars where scrolling should be restricted while the component is active.
