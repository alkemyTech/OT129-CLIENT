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
