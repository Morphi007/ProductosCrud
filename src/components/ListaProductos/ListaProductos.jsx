import { useState } from 'react';
import styles from './ListaProducto.module.css';

const ListaProducto = () => {
    const [productos] = useState([
        { name: 'Manzana', pricio: '500$', date: '28/10/2024' },
        { name: 'Lechoza', price: '35$', date: '28/10/2024' },
        { name: 'Aguacate', price: '25$', date: '28/10/2024' }
    ]);

    const [filtro, setFiltro] = useState('');

    const productosFiltrados = productos.filter(producto =>
        producto.name.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div className={styles['lista-productos']}>
            <input
                type="text"
                placeholder="Buscar por nombre"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className={styles['entrada-filtro']}
            />
            <div className={styles['elementos-producto']}>
                {productosFiltrados.map((producto, index) => (
                    <div key={index} className={styles['elemento-producto']}>
                        <h3>{producto.name}</h3>
                        <p className={styles.precio}>{producto.price}</p>
                        <p>{producto.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaProducto;