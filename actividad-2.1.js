// --------------------------------------------
// Punto 2.1:
// Escribir una función flecha que reciba un número y devuelva si es par o impar.

// Código en JavaScript:
const esParOImpar = num => {
    return num % 2 === 0 ? "Es par" : "Es impar";
  };
  
  console.log(esParOImpar(4));  // Es par
  console.log(esParOImpar(7));  // Es impar
  
  // --------------------------------------------
  // Comparación con Python:
  // def es_par_o_impar(num):
  //     return "Es par" if num % 2 == 0 else "Es impar"
  //
  // print(es_par_o_impar(4))  # Es par
  // print(es_par_o_impar(7))  # Es impar
  // --------------------------------------------
  