import { Entity } from "./entity.model";

export interface Customer extends Entity {
    id?: number;
    puntos: number;
}