import * as yup from "yup";

export const testimonialSchema = yup.object({
  name: yup
    .string()
    .min(4, "El nombre tiene que tener al menos 4 caracteres")
    .required("Por favor ingrese un nombre"),
  description: yup.string().required("Por favor ingrese una descripción"),
  image: yup.string().required("Por favor ingrese una imagen"),
});
