import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const alerts = (title, icon) => {
  MySwal.fire({
    icon: icon,
    confirmButtonText: "ACEPTAR",
    timerProgressBar: true,
    title: title,
  });
};

export const confirmAlerts = (title, text, callback) => {
  Swal.fire({
    buttonsStyling: true,
    cancelButtonColor: "#d33",
    cancelButtonText: "CANCELAR",
    confirmButtonText: "OK",
    icon: "warning",
    showCancelButton: true,
    showCloseButton: true,
    text: text,
    title: title,
  }).then((result) => {
    if (result.isConfirmed) {
      callback(result.isConfirmed);
    }
  });
};
