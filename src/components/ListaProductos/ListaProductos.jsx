import { useEffect, useState } from 'react';
import { obtenerProductos, actualizarProducto, eliminarProducto } from '../../../service/api';
import styles from './ListaProducto.module.css';


const ListaProductos = () => {
    const [productos, setProductos] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [modoEdicion, setModoEdicion] = useState(null);
    const [nombreEditado, setNombreEditado] = useState('');
    const [precioEditado, setPrecioEditado] = useState('');

    useEffect(() => {
        const cargarProductos = async () => {
            const datosProductos = await obtenerProductos();
            setProductos(datosProductos);
        };
        cargarProductos();
    }, []);

    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(filtro.toLowerCase())
    );

    const iniciarEdicion = (producto) => {
        setModoEdicion(producto.productoId);
        setNombreEditado(producto.nombre);
        setPrecioEditado(producto.precio);
    };

    const cancelarEdicion = () => {
        setModoEdicion(null);
        setNombreEditado('');
        setPrecioEditado('');
    };

    const guardarEdicion = async (productoId) => {
        const productoActualizado = {
            nombre: nombreEditado,
            precio: parseFloat(precioEditado),
        };
        await actualizarProducto(productoId, productoActualizado);
        setProductos(productos.map(p => p.productoId === productoId ? { ...p, ...productoActualizado } : p));
        cancelarEdicion();
    };

    const manejarEliminacion = async (productoId) => {
        await eliminarProducto(productoId);
        setProductos(productos.filter(p => p.productoId !== productoId));
    };

    return (
        <div className={styles['lista-productos']}>
            <input
                type="text"
                placeholder="Buscar por nombre"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className={styles['input-filtro']}
            />
            <div className={styles['items-producto']}>
                {productosFiltrados.map((producto) => (
                    <div key={producto.productoId} className={styles['item-producto']}>
                        {modoEdicion === producto.productoId ? (
                            <>
                                <input
                                    type="text"
                                    value={nombreEditado}
                                    onChange={(e) => setNombreEditado(e.target.value)}
                                    className={styles['input-edicion']}
                                />
                                <input
                                    type="number"
                                    value={precioEditado}
                                    onChange={(e) => setPrecioEditado(e.target.value)}
                                    className={styles['input-edicion']}
                                />
                                <button onClick={() => guardarEdicion(producto.productoId)} className={styles['boton-guardar']}>Guardar</button>
                                <button onClick={cancelarEdicion} className={styles['boton-cancelar']}>Cancelar</button>
                            </>
                        ) : (
                            <>
                                <h3>{producto.nombre}</h3>
                                <p>Precio: ${producto.precio}</p>
                                <p>Fecha de Creación: {new Date(producto.fechaCreacion).toLocaleDateString()}</p>
                                <button onClick={() => iniciarEdicion(producto)} className={styles['boton-editar']}>Editar</button>
                                <button onClick={() => manejarEliminacion(producto.productoId)} className={styles['boton-eliminar']}>Eliminar</button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaProductos;
