import { useEffect } from "react";
import { useState } from "react"
import { getAllWines } from "../services/servicesWine";
import { Link } from "react-router-dom";
import axios from "axios";


export const Wine = () => {
  const[wines, setWine] = useState([]);

  useEffect(()=>{
    const fetchWine = async () =>{
      try {
        const dataWine = await getAllWines();
        setWine(dataWine);
      } catch (error) {
        console.log('No se pueden cargar los vinos')
      }
    }
    fetchWine();
  }, [])

  return(
    <>
     {wines && wines.map((w, index)=>
      <div className="card width: 18rem;" key={index}>
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="card-text">{w.nombre}</h3>
        <h3 className="card-text">{w.maridaje}</h3>
        <h3 className="card-text">{w.aroma}</h3>
        <h3 className="card-text">{w.cuerpo}</h3>
      </div>
      <Link to={`/vinos/${w.id}`} className="text-red">Detalles </Link>
      </div>
    )}
      
    </>
  )
}