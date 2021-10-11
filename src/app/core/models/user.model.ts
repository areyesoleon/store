import { Entity } from "./entity.model";

export interface User extends Entity {
    empleado_id?: number;
    fecha_ingreso: Date;
    flg_activo: boolean;
}