import { useState, useEffect } from "react";

export const useDebounceSearch = (value, minValueLength = 3) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    if (value.length >= minValueLength) {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, 300);

      return () => {
        clearTimeout(handler);
      };
    } else {
      setDebouncedValue("");
    }
  }, [value, minValueLength]);

  return debouncedValue;
};
