import {Routes, Route, BrowserRouter} from "react-router-dom"
import './App.css'
import Header from './components/Header'
import { Wine } from "./components/Wine"
import { WineDetail } from "./components/WineDetails"
import { FiltersProvider } from "./context/filtersContext"
import { useFilters } from "./hooks/useFilters"

function App() {

  const {filterWines} = useFilters();
  const filteredWines = filteredWines(initialProduct)

  return (
    <> 
    <FiltersProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/vinos' element={<Wine/>}/>
            <Route path='/vinos/:id' element={<WineDetail/>}/>
          </Routes>
        </BrowserRouter>  
    </FiltersProvider>
    </>
  )
}

export default App
