import { useEffect, useId, useState } from "react"
import { useFilters } from "../hooks/useFilters"

export const Filters = () =>{
  const {filters, setFilters} = useFilters()

  //Estado local para manejar los filtros antes de actualizar el global
  const[localFilters, setLocalFilters] = useState(filters);

  const precioFilterd = useId()
  const tipoFiltered = useId()

  const handleChangePrecio = (e) =>{
    setFilters(prevState => ({
      ...prevState,
      precio: e.target.value
    }))
  } 

  const handleChangeTipo = (nuevoTipo) =>{
    setFilters(prevState =>({
      ...prevState,
      tipo:nuevoTipo
    }));
  };
  
  useEffect(()=>{
    setFilters(localFilters);
  }, [localFilters, setFilters]);

  return(
    <section className="filters">
      <div>
        <label htmlFor={precioFilterd}>Precio a partir de:</label>
        <input
          type="range"
          id={precioFilterd}
          min="0"
          max="1000"
          onChange={handleChangePrecio}
          value={localFilters.precio}
        />
        <span>${localFilters.precio}</span>
      </div>

      <div>
        <label htmlFor={tipoFiltered}>Categoría</label>
        <select id={tipoFiltered} onChange={handleChangeTipo} value={localFilters.tipo}>
          <option value="todos">Todos</option>
          <option value="tinto">Tinto</option>
          <option value="blanco">Blanco</option>
          <option value="espumante">Espumante</option>
        </select>
      </div>
    </section>
  );
}