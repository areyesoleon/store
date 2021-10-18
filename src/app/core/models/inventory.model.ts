export interface Inventory {
    id?: number;
    sucursal_id: number;
    producto_id: number;
    cantidad: number;
}


export interface Product {
    id?: number;
    nombre: string;
    descripcion: string;
    costo: number;
    precio: number;
}