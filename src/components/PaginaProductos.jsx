import AgregarProducto from "./AgregarProducto/AgregarProducto";
import ListaProductos from "./ListaProductos/ListaProductos";

const PaginaProductos = () => {
  return (
    <div>
      <h2>Productos</h2>
      <AgregarProducto/>
      <ListaProductos/>
    </div>
  );
};

export default PaginaProductos;
