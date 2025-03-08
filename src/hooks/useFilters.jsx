import { useContext, useMemo } from "react"
import { FiltersContext } from "../context/filtersContext";

export const useFilters = () =>{
  const{ filters, setFilters } = useContext(FiltersContext);

  const filterWines = useMemo(()=>{
    return (wines) =>{
      return wines.filter(wine=>{
        return(
          wine.precio >= filters.precio &&
          (
            filters.tipo === "todos" || 
            wine.tipo === filters.tipo
          )
        )
      })
    }
  }, [filters]);
  
  return {filters, filterWines, setFilters};

}