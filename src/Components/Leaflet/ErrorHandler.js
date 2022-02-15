import { useMapEvents } from "react-leaflet";

const ErrorHandler = () => {
  useMapEvents({
    locationerror(error) {
      console.error("error:", error);
    },
    tileerror(error) {
      console.error("error:", error);
    },
  });

  return null;
};

export default ErrorHandler;
