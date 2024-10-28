// src/services/api.js
import axios from 'axios';

const API_URL = "https://localhost:7172/api/Producto";

// Obtener todos los productos
export const obtenerProductos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        return [];
    }
};

// Crear un nuevo producto
export const crearProducto = async (producto) => {
    try {
        const response = await axios.post(API_URL, producto, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error al crear el producto:", error);
    }
};

// Actualizar un producto por ID
export const actualizarProducto = async (id, producto) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, producto, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
    }
};

// Eliminar un producto por ID
export const eliminarProducto = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
    }
};
