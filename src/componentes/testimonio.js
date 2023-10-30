import react from 'react';
//En react hoy día no es necesario hacer esta importación si trabajas con componentes sencillos, es necesario si vas a utilizar otros elementos en react.
import '../hojas-de-estilo/Testimonio.css';
//Este es un componente funcional,es una función de javascript, este componente retorna un elemento jsx.
function Testimonio(props) {
return (
  <><div className='contenedor-testimonio'>
    <img className='imagen-testimonio'
      src={require(`../imagenes/testimonio-${props.imagen}.png`)}
      alt='Foto de fans' />
      <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
      <p className='texto-testimonio'> {props.testimonio}</p>
      </div>
  </div>
  </>
);

}
// En javascript existen dos tipos de exportación exportación por defecto y exportación nombrada.
// Esta es exportación por defecto, que indica que sera el único elemento que estaremos exportando.
export default Testimonio;
