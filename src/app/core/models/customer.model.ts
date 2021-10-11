import { Entity } from "./entity.model";

export interface Customer extends Entity {
    cliente_id?: number;
    puntos: number;
}