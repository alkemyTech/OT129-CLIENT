import React from 'react';
import "./Organization.css"
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const Organization = ({data}) => {
  return (
    <div className='container-bg'>
      <h1 className='pb-2'>Organización</h1>
      <div className='container card-bg'>
            <div className='d-flex flex-column'> 
                  <h2 className='text-center'>{data.name}</h2>
              <div className='d-flex justify-content-center'>
                  <img src={data.image} alt={data.name} />  
              </div> 
              <h5 className='text-center'>{data.shortDescription}</h5>
            </div>
          <div className='d-flex justify-content-between my-3'>
              <Link to={"falta agregar la ruta o algún método para volver"} className='btn btn-secondary '>Volver</Link>
              <Link to="/backoffice/organization/edit" className='btn btn-primary '>Editar</Link>
          </div>
      </div>   
    </div>
  );
};
Organization.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default Organization