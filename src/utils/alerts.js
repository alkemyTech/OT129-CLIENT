import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const alerts = (title, icon) => {
  MySwal.fire({
    icon: icon,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    title: title,
  });
};

export const confirmAlerts = (title, text) => {
  Swal.fire({
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Sí",
    icon: "warning",
    showCancelButton: true,
    showCloseButton: true,
    text: text,
    title: title,
  }).then((result) => {
    console.log(result);
    if (result.isConfirmed) {
      Swal.fire("Confirmado", "La operación se realizó con éxcito", "success");
    } else {
      Swal.fire("Cancelado", "La operación ha sido cancelada", "error");
    }
  });
};
