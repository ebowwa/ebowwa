import { useEffect, useState } from "react";

const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    // Retrieve from localStorage
    const item = window.localStorage.getItem(key);
    if (item) {
      setStoredValue(JSON.parse(item));
    }
  }, [key]);

  const setValue = (value: T) => {
    // Save state
    setStoredValue(value);
    // Save to localStorage
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};

export default useLocalStorage;
// The `useLocalStorage` custom hook is designed to manage stateful data in a React component, synchronizing it with the browser's localStorage.

// This hook takes two arguments:
// 1. `key`: A string representing the key under which the data will be stored in localStorage.
// 2. `initialValue`: The initial value of the state, which will be used if there is no existing value in localStorage for the specified key.

// Inside the hook, it utilizes the `useState` and `useEffect` hooks from React to manage state and perform side effects respectively.

// The `useState` hook is used to create a state variable `storedValue` that holds the current value of the data.

// The `useEffect` hook is employed to retrieve the stored value from localStorage when the component mounts or when the `key` prop changes. If a value exists for the specified `key`, it is parsed from JSON format and used to update the `storedValue` state.

// Additionally, the hook provides a function `setValue` that allows updating the state and synchronously saving the new value to localStorage. When called, this function sets the new value in the `storedValue` state and also saves it to localStorage under the specified `key`.

// Finally, the hook returns a tuple containing the current state value (`storedValue`) and the `setValue` function, allowing components to access and update the stateful data stored in localStorage.
