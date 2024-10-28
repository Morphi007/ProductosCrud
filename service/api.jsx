import axios from "axios";


const API_URL = 'http://localhost:5000/api/Producto';

export const obtenerProductos = async () => {
    const respuesta = await axios.get(API_URL);
    return respuesta.data;
};

export const crearProducto = async (producto) => {
    await axios.post(API_URL, producto);
};

export const actualizarProducto = async (id, producto) => {
    await axios.put(`${API_URL}/${id}`, producto);
};

export const eliminarProducto = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
