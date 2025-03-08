import { useEffect, useState } from "react"
import { getAllWines } from "../services/servicesWine";
import { useParams } from "react-router-dom";

export const WineDetail = () =>{
  const[wines,setWine] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    const fetchWineId = async()=>{
      try {
        const dataWine = await getAllWines(id);
        setWine(dataWine)
      } catch (error) {
        console.log('No se puede cargar la información del vino en este momento.');
      }
    }
    fetchWineId();
  }, [id])

  return(
    <>
    <h1>{wines.nombre}</h1>
    <h4>{wines.maridaje}</h4>
    </>
  )
}