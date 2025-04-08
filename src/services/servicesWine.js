// import axios from "axios";

// const API_WINES = "/vinos.json";

// export const getWines = async(id = null)=>{
//  try {
//   const res = await axios.get(API_WINES);
//   const wines = res.data;
//   if (id) {
//     return wines.find((wine) => wine.id === parseInt(id));
//   }
//   return wines;
//   }catch(error) {
//   throw new Error("Error al obtener los vinos: " + error.message); 
//  }
// };

import axios from "axios";

const API_WINES = "/vinos.json"; // Reemplaza con la URL real

export const getWines = async (id = null) => {
  try {
    const res = await axios.get(API_WINES);
    const wines = res.data; // Verifica que `wines` sea un array

    if (!Array.isArray(wines)) {
      throw new Error("La API no devolvió una lista de vinos válida.");
    }

    if (id) {
      return wines.find((wine) => wine.id === parseInt(id)) || null;
    }
    return wines;
  } catch (error) {
    console.error("Error al obtener los vinos:", error.message);
    return null; // En vez de lanzar un error, devolvemos `null` para evitar que la app se rompa
  }
};
