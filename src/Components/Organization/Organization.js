import React from 'react';
import { Container} from 'react-bootstrap'
import "./Organization.css"
import mockLogo from "./LOGO-SOMOS-MAS.png"
import { Link } from 'react-router-dom';
const Organization = () => {
  //datos mockups hasta armar la estructura definitiva
    const dataMock = {
      name: "Somos Más",
      image: mockLogo,
      shortDescription: "Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y debinserción social."
    }

  return (
    <div className='container-bg'>
      <Container className='card-bg'>
        <h1 className='pb-2'>Organización</h1>
        <div className='d-flex flex-column align-items-start'> 
          <h5 className='text-center'><b>Nombre: </b>{dataMock.name}</h5>
          <div className='d-flex align-items-center'>
            <h5 className='text-center'><b>Imágen: </b></h5>
            <img src={dataMock.image} alt={dataMock.name} />  
          </div> 
          <h5 ><b>Descripción corta: </b></h5>
          <h5>{dataMock.shortDescription}</h5>
        </div>
        <div className='d-flex justify-content-between my-3'>
          <Link to={"falta agregar la ruta o algún método para volver"} className='btn btn-secondary '>Volver</Link>
          <Link to="/backoffice/organization/edit" className='btn btn-primary '>Editar</Link>
        </div>
      </Container>   
    </div>
  );
};
export default Organization