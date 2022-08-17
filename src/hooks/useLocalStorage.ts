import { useState } from "react";

const useLocalStorage = (key: string, initialValue?: string) => {
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      return window.localStorage.getItem(key) ?? initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function
  const setValue = (
    newValue: string | ((newValue: string | undefined) => string)
  ) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        newValue instanceof Function ? newValue(storedValue) : newValue;

      // Save state
      setStoredValue(valueToStore);

      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, valueToStore);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearValue = () => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue, clearValue] as const;
};

export default useLocalStorage;
