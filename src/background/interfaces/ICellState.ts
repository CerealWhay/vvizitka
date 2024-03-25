import type {ICellType} from "../interfaces/ICellType";
import type {IPosition} from "../interfaces/IPosition";

export interface ICellState {
    type: ICellType,
    position: IPosition,
    height: number,
    width: number,

    top: number,
    right: number,
    bottom: number,
    left: number,
}
