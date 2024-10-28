import { useState } from 'react';
import { crearProducto } from '../../../service/api';
import styles from './AgregarProductos.module.css';


const AgregarProducto = () => {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');

    const manejarEnvio = async (e) => {
        e.preventDefault();
        const nuevoProducto = { nombre, precio: parseFloat(precio) };
        await crearProducto(nuevoProducto);
        setNombre('');
        setPrecio('');
        alert('Producto creado con éxito');
    };

    return (
        <form onSubmit={manejarEnvio} className={styles["formulario-producto"]}>
    <input
        type="text"
        placeholder="Nombre del producto"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
    />
    <input
        type="number"
        placeholder="Precio del producto"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
    />
    <button type="submit">Agregar Producto</button>
</form>

    );
};

export default AgregarProducto;
