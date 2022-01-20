import React from 'react';
import "./Organization.css"
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const Organization = ({organizationData}) => {
  return (
    <div className='container-bg'>
      <h1 className='pb-2'>Organización</h1>
      <div className='container card-bg'>
        {
          organizationData
          ?
          <>
            <div className='d-flex flex-column'> 
              
                {
                  organizationData.name
                  ?
                  <h2 className='text-center'>{organizationData.name}</h2>
                  :
                  <h3 className='text-center'>- Nombre no disponible -</h3>
                }
              
              <div className='d-flex justify-content-center'>
                {
                  organizationData.image 
                  ?
                  <img src={organizationData.image} alt={organizationData.name} />  
                  :
                  <h5 className='text-center'>- No hay ninguna imágen para mostrar -</h5>
                }
              </div> 
              <h5 className='text-center'>
                  {
                    organizationData.shortDescription 
                    ?
                    organizationData.shortDescription 
                    :
                    "No hay una descripción disponible"
                  }
              </h5>
            </div>
            
          </>
          :
          <div className="text-center text-info">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
          <div className='d-flex justify-content-between my-3'>
              <Link to={"falta agregar la ruta o algún método para volver"} className='btn btn-secondary '>Volver</Link>
              <Link to="/backoffice/organization/edit" className='btn btn-primary '>Editar</Link>
          </div>
      </div>   
    </div>
  );
};
Organization.propTypes = {
  organizationData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default Organization