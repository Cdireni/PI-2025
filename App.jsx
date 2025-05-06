import Saludo from './Saludo';
import Presentacion from './Presentacion';
import Productos from './Productos';
import Hero from './componentes/Hero';


function App() {
  return (
     <div className="p-4">
      <Saludo nombre="Carlos" />
      <Presentacion nombre= "Carlos" edad={44} profesion="aprendiendo a desarrollar" barrio="Colinas Velez Sarsfield" />	
      <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700 mt-4">
        Hacé clic aquí
        </button>
      <Productos />      
      <Hero />
    </div>
  );
}

export default App;

