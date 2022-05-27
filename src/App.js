
import './App.css';
import { Navbar } from './components/Navbar/Navbar';  
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';


function App() {

  // const ojetoPrueba = {
    //   nombre: "pelota",
    //   peso: 0.2,
    //   marca: 'adidas'
    //   precio: 2500,
    // }  
  
  return  (
    <div>

      <Navbar/>
      <ItemListContainer/>
    </div>
  )
}

export default App;
