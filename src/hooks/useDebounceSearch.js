import { useState, useEffect } from "react";

export const useDebounceSearch = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    if (value.length >= 3) {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    } else {
      setDebouncedValue("");
    }
  }, [value, delay]);

  return debouncedValue;
};
