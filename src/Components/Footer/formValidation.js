import * as yup from "yup";

export const newsletterSchema = yup.object().shape({
  name: yup.string().required("Por favor ingrese un nombre"),
  surname: yup.string().required("Por favor ingrese un apellido"),
  email: yup
    .string()
    .email("El formato del email ingresado no es valido")
    .required("Por favor ingrese un correo electronico"),
});
