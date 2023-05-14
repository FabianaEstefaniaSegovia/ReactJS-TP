import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartPovider } from "./context/cartContext";
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartPovider>
          <NavBar/>
          <Routes>
            <Route path="/" element={ <ItemListContainer greeting={"Novedades"}/> }/>
            <Route path="/categoria/:categoryId" element={ <ItemListContainer />   }/>
            <Route path="/item/:idItem" element={ <ItemDetailContainer/>   }/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </CartPovider>
      </BrowserRouter>
    </div>

  );
}

export default App;
