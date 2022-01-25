import { useState, useEffect } from "react";

const getSavedValue = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key));

  if (savedValue) {
    return savedValue;
  } else {
    return initialValue;
  }
};

export const useLocalStorage = (key, initialValue) => {
  let [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  //el useeffect se usa para que quede la data guardada cuando se refresca y que quede guardada cada vez que se refresca, por eso dependecia de value
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
