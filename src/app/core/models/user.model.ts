import { Entity } from "./entity.model";

export interface User extends Entity {
    id?: number;
    fecha_ingreso: Date;
    flg_activo: boolean;
}