import {useAppStore} from '../stores/appStore'
import type {ICellState} from "../interfaces/ICellState";
import type {IPosition} from "../interfaces/IPosition";
import type {ICellType} from "../interfaces/ICellType";

export class Cell {

    _cellState: ICellState;
    ctx;

    constructor(position: IPosition, type: ICellType) {
        const cellSize = useAppStore().cellSize
        this.ctx = useAppStore().canvasCtx as CanvasRenderingContext2D;
        this._cellState = {
            type: type,
            position: position,
            height: cellSize,
            width: cellSize,
            top: position.x,
            right: position.x + cellSize,
            bottom: position.x + cellSize,
            left: position.y,
        }
    }

    draw() {
        this.ctx.fillStyle = this._cellState.type.color;
        this.ctx.fillRect(
            this._cellState.top,
            this._cellState.left,
            this._cellState.width,
            this._cellState.height,
        );
    }

    public get cellState(): ICellState {
        return this._cellState;
    }
}
