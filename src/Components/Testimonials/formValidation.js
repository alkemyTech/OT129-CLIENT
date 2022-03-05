import * as yup from "yup";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

export const testimonialSchema = yup.object({
  name: yup
    .string()
    .min(4, "El nombre tiene que tener al menos 4 caracteres")
    .required("Por favor ingrese un nombre"),
  description: yup
    .string()
    .max(200, "La descripción no puede superar los 200 carácteres")
    .required("Por favor ingrese una descripción"),
  image: yup
    .string()
    .required("Por favor ingrese una imagen")
    .test(
      "format",
      "El formato no es valido",
      (value) => value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
});
