//Datos mockups
import React from "react";

import EditForm from "../../Components/EditForm/EditForm";

//datos mockups
const data = {
  name: "Somos más",
  logo: "https://github.com/alkemyTech/OT129-CLIENT/blob/development/src/Containers/Organization/LOGO-SOMOS-MAS.png",
  shortDescription:
    "Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y debinserción social.",
  longDescription:
    "Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y debinserción social. Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y debinserción social. Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y debinserción social.",
};
const EditOrganizationContainer = () => {
  return (
    <div className="container">
      <div className="alert alert-warning text-center mt-3">Editar organización</div>
      <EditForm data={data} />
    </div>
  );
};

export default EditOrganizationContainer;
