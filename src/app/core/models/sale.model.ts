export interface Sale {
    id?: number;
    cliente_id: number;
    emp_cajero_id: number;
    sucursal_id: number;
    metodo_pago_id: number;
    estado_venta_id: number;
    documento: string;
    fecha: Date;
    direccion_entrega: string;
}

export interface MethodPaymenth {
    id?: number;
    descripcion: string;
}

export interface SaleStatus {
    id?: number;
    descripcion: string;
}

export interface SaleDetails {
    id?: number;
    venta_id: number;
    producto_id: number;
    cantidad: number;
    descuento: number;
    precio: number;
}