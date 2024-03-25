import {Cell} from "../models/Cell";
import {useAppStore} from '../stores/appStore'
import type {ICellRow} from "../interfaces/ICellRow";

export class CellsController {

    _cellMatrix: ICellRow[]

    constructor() {
        this._cellMatrix = []
        this.fillCells()
    }

    frame() {
        this._cellMatrix.forEach(cellRow => {
            cellRow.forEach(cell => cell.draw())
        })
    }

    fillCells() {
        const currentPos = {x: 0, y: 0}
        const canvasRect = useAppStore().canvasRect as DOMRect
        const cellSize = useAppStore().cellSize
        const types = useAppStore().types

        while (canvasRect?.height > currentPos.y) {
            const row = []
            while (canvasRect?.width > currentPos.x) {
                row.push(new Cell(currentPos, types[Math.floor(Math.random() * types.length)]))
                currentPos.x += cellSize
            }
            this._cellMatrix.push(row)
            currentPos.y += cellSize
            currentPos.x = 0
        }
    }

    public get cellMatrix(): ICellRow[] {
        return this._cellMatrix;
    }

    public set cellMatrix(matrix) {
        this._cellMatrix = matrix;
    }
}
