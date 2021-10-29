export interface Turn {
    id?: number;
    sucursal_id: number,
    empleado_id: number,
    fecha_inicio: string;
    fecha_fin: string;
    nombre?: string;
}