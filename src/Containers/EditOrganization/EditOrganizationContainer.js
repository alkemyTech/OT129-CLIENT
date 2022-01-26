//Datos mockups
import React from "react";

import EditForm from "../../Components/EditForm/EditForm";

//datos mockups
const data = {
  name: "Somos más",
  logo: "https://i.ibb.co/vLh7pYM/LOGO-SOMOS-MAS.png",
  shortDescription:
    "Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social.",
  longDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tincidunt ligula. Nam imperdiet odio id purus pellentesque ullamcorper. In turpis diam, pharetra sed mattis eu, dapibus nec odio. Sed vel nibh ut ex vulputate dictum et id ligula. Ut eu quam lobortis, efficitur metus id, porta mauris. Nullam mollis odio finibus, laoreet ligula eu, porttitor urna. Duis tincidunt neque in elit ornare, eu dignissim odio tempor. Praesent elementum eros nec fringilla varius. Curabitur suscipit, libero non aliquet tempus, nibh ex tempor risus, ut sodales massa dui non tortor. Nunc fermentum, urna id sollicitudin iaculis, erat massa maximus ipsum, at convallis dui turpis vel ligula. Morbi tincidunt leo eu mattis semper.",
  emailLink: "somosfundacionmas@gmail.com",
  instagramLink: "https://www.instagram.com/SomosMás",
  twitterLink: "https://www.twitter.com/Somos_Más",
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
