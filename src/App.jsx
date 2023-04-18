import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={ <ItemListContainer greeting={"Novedades"}/> }/>
            <Route path="/categoria/:categoryId" element={ <ItemListContainer />   }/>
            <Route path="/item/:idItem" element={ <ItemDetailContainer/>   }/>
          </Routes>
        </BrowserRouter>
    </div>

  );
}

export default App;
