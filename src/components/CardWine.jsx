import React from "react";
import { Link } from "react-router-dom";

export const CardWine = ({id, nombre, ano})=>{
  return(
    <>
      <div className="row row-cols-1 row-cols-md-2 gap-2">
        <div className="col d-flex justify-content-center align-items-center">
        <div className="card m-3" >
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{ano}</p>
            <Link to={`/vino/${id}`} className="btn btn-primary">Ver detalle</Link>
          </div>
        </div>
        </div>
      </div>
    </>
  )
};