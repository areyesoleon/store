export interface Inventory {
    inventario_id?: number;
    cantidad: number;
}


export interface Product {
    producto_id?: number;
    nombre: string;
    descripcion: string;
    costo: number;
    precio: number;
}