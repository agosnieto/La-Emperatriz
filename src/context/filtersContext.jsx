import { createContext, useMemo, useState } from "react";

export const FiltersContext = createContext()

export const FiltersProvider =({children}) =>{
  const[filters, setFilters] = useState({
    tipo: "todos",
    precio: 0
  })

  const value = useMemo(()=>({
    filters,
    setFilters
  }), {filters});

  return(
    <FiltersContext.Provider value={value}>
      {children}
    </FiltersContext.Provider>
  );
};
