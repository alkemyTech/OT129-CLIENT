import React from 'react';
import Organization from '../../Components/Organization/Organization';
import mockLogo from "./LOGO-SOMOS-MAS.png"

//datos mockups hasta armar la estructura definitiva
const organizationData = {
    name: "Somos Más",
    image: mockLogo,
    shortDescription: "Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y debinserción social."
}

const OrganizationContainer = () => {
    return (
        <>
            <Organization organizationData={organizationData}/>
        </>    
    );
};

export default OrganizationContainer;
