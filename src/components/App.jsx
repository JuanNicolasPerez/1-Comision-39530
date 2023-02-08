import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Estilos
import './App.css';
// componentes
import Navbar from "./Navbar/Navbar";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:nombre' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;