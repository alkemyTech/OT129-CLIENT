//Funcion para validar la url
export const isValidUrl = (url) => {
  try {
    new URL(url);
  } catch (e) {
    return false;
  }

  return true;
};
