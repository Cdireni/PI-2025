// src/Productos.jsx

function Productos() {
    const productos = [
      { nombre: "Notebook", precio: 1200 },
      { nombre: "Mouse", precio: 20 },
      { nombre: "Teclado", precio: 50 },
      { nombre: "Monitor", precio: 300 },
      { nombre: "Auriculares", precio: 80 },
    ];
  
    const productosCaros = productos.filter(p => p.precio > 100);
    const productosFormateados = productos.map(p => `${p.nombre}: $${p.precio}`);
    const precioTotal = productos.reduce((total, p) => total + p.precio, 0);
    const nombresProductosCaros = productosCaros.map(p => p.nombre);
  
    return (
      <div className="p-6 bg-gray-100 rounded-xl shadow-md space-y-6">
        <h1 className="text-2xl font-bold text-blue-700">Resumen de Productos</h1>
  
        <section>
          <h2 className="text-xl font-semibold text-gray-800">🧾 Productos mayores a $100</h2>
          <ul className="list-disc list-inside text-gray-700">
            {productosCaros.map((p, i) => (
              <li key={i}>{p.nombre}: ${p.precio}</li>
            ))}
          </ul>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold text-gray-800">🗂️ Lista completa</h2>
          <ul className="list-disc list-inside text-gray-700">
            {productosFormateados.map((texto, i) => (
              <li key={i}>{texto}</li>
            ))}
          </ul>
        </section>
  
        <section>
          <p className="text-lg font-bold text-green-700">💰 Total: ${precioTotal}</p>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold text-gray-800">🔍 Nombres de productos caros</h2>
          <ul className="list-disc list-inside text-gray-700">
            {nombresProductosCaros.map((nombre, i) => (
              <li key={i}>{nombre}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
  
  export default Productos;
  