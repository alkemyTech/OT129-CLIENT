export const toBase64 = async (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
  });
