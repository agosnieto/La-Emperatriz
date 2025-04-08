import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getWines } from "../services/servicesWine";
import { CardWine } from "./CardWine";


export const Wine =()=>{
  const[wine, setWine]= useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      const data = await getWines();
      setWine(data);
      console.log(data);
    }
    fetchData();
  },[]);

  return(
    <>
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {wine.map((w)=>(
        <div className="col">
          <div key={w.id} className="card-style d-flex align-items-center">
            <div>
            <img src={w.img} className="card-img-left img-fluid" alt="..." style={{ width: "150px", height: "auto" }}/>
            </div>
            <div className="card-body">
              <h5 className="card-title">{w.nombre}</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <Link to={`/vino/${w.id}`}  className = "btn-detail">Leer más</Link>
            </div>
          </div>
        </div>  
      ))}
    </div>
      
    
    </>
  );
};