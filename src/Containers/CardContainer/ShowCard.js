import React from "react";

const ShowCard = () => {
  return (
    <div className="card" style="width: 18rem;">
      <img
        alt="Card image cap"
        className="card-img-top"
        src="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the content.
        </p>
      </div>
    </div>
  );
};

export default ShowCard;
