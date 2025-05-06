function Presentacion({ nombre, edad, profesion, barrio }) {
    return (
      <p>
        Soy un tal {nombre} y tengo {edad} años, estoy {profesion} y soy de {barrio}.
      </p>
    );
  }
  
  export default Presentacion;