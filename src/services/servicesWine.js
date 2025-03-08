import vinos from '../vinos.json';

export const getAllWines = (id = null) =>{
  if (id) {
    return vinos.find((vino)=> vino.id === parseInt(id))
  }
  return vinos
}