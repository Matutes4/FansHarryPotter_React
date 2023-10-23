import Testimonio from './componentes/testimonio';
import './App.css';
//Archivo principal de JavaScript que crea un componente, la cual va a contener toda la estructura de nuestra aplicación
//archivo principal que reder
//componente funcional
//En react lo que hacemos es que, ciertos componentes renderizan otros componentes, 
//en este caso nuestro componente principal App esta generando a componente testimonio, mostrando así la estructura de nuestra aplicación.
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen algunos fans de harry potter:</h1>
      <Testimonio
      nombre="Anónimo"
      pais="España"
      imagen="fans1"
      testimonio="Desde que abrí el primer libro de Harry Potter, supe que mi vida cambiaría para siempre. La magia de J.K. Rowling me envolvió y me llevó a un mundo de aventuras inolvidables. Cada página de la saga es como un hechizo que me transporta a Hogwarts. Los personajes se sienten tan reales que los considero amigos. Gracias a esta historia, mi infancia fue aún más mágica."/>
      </div>
    </div>
  );
}

export default App;
