export interface Sale {
    venta_id?: number;
    documento: string;
    fecha: Date;
    direccion_entrega: string;
}

export interface MethodPaymenth {
    metodo_pago_id?: number;
    descripcion: string;
}

export interface SaleStatus {
    estado_venta_id?: number;
    descripcion: string;
}

export interface SaleDetails {
    det_venta_id?: number;
    cantidad: number;
    descuento: number;
    precio: number;
}