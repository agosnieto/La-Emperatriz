import { useEffect, useState } from "react"
import { getWines } from "../services/servicesWine";
import {useParams } from "react-router-dom";

export const WineDetail = ()=>{
  const {id} = useParams();
  const[details, setDetails]= useState(null);

  useEffect(()=>{
    const fetchDetail = async()=>{
      try {
        const detail = await getWines(id);
        if (!detail) {
          throw new Error("Vino no encontrado");
        }
        setDetails(detail);
        console.log(detail)
      } catch (error) {
        console.log("Error al obtener los detalles del vino:", error.message);
      }
    }
    fetchDetail();
  }, [id]);

  return(
    <>
      <h2></h2>
      {details ? (
        <>
        <div key={details.id} className="parent">
          <div className="div1"><img src={details.img} alt="" /></div>
          <div className="div2"><p className="title-wine"><strong>{details.nombre}</strong> </p> <p>{details.region} - {details.ano}</p> <hr/></div>
    
          <div className="div3">{details.notas_cata} Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatibus ipsum assumenda exercitationem hic architecto consequuntur. 
            Quos, consequatur suscipit! Dicta atque possimus veniam quae reiciendis totam a molestias 
            explicabo debitis nostrum.<hr></hr></div>
          <div className="div4">${details.precio}</div>
        </div>
        <div className="parent2">
          <div>
            <h4 className="title-wine">Notas</h4>
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">Color</th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Aroma</th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Maridaje</th>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4 className="title-wine">Análisis</h4>
            <div>s</div>
            <div>l</div>
          </div>
          
          
        </div>
        </>
        
        
      ) : (
        <p>No se encontró información del vino.</p>
      )}
    </>
  )
}