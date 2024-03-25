import {CellsController} from "./cellsController";
import {Cell} from "../models/Cell";
import type {ICellRow} from "../interfaces/ICellRow";
import {useAppStore} from "../stores/appStore";

export class ReactionController {

    _isActive: Boolean;
    cellsController;

    constructor(cellsController: CellsController) {
        this._isActive = false
        this.cellsController = cellsController
    }

    public get isActive(): Boolean {
        return this._isActive;
    }

    public toggleActive() {
        this._isActive = !this._isActive
    }

    frame() {

        const cellSize = useAppStore().cellSize
        const types = useAppStore().types

        const newMatrix: ICellRow[] = []

        this.cellsController.cellMatrix.forEach((cellRow, yPos) => {
            const row: Cell[] = []
            cellRow.forEach((cell, xPos) => {
                const isTop = yPos !== 0
                const isBottom = yPos !== this.cellsController.cellMatrix.length - 1
                const isLeft = xPos !== 0
                const isRight = xPos !== cellRow.length - 1

                // neighbourCellsTypeNames
                const nctn = []

                if (isTop && isLeft) {
                    nctn.push(this.cellsController.cellMatrix[yPos - 1][xPos - 1].cellState.type.typeName)
                }
                if (isTop) {
                    nctn.push(this.cellsController.cellMatrix[yPos - 1][xPos].cellState.type.typeName)
                }
                if (isTop && isRight) {
                    nctn.push(this.cellsController.cellMatrix[yPos - 1][xPos + 1].cellState.type.typeName)
                }
                if (isRight) {
                    nctn.push(this.cellsController.cellMatrix[yPos][xPos + 1].cellState.type.typeName)
                }
                if (isBottom && isRight) {
                    nctn.push(this.cellsController.cellMatrix[yPos + 1][xPos + 1].cellState.type.typeName)
                }
                if (isBottom) {
                    nctn.push(this.cellsController.cellMatrix[yPos + 1][xPos].cellState.type.typeName)
                }
                if (isBottom && isLeft) {
                    nctn.push(this.cellsController.cellMatrix[yPos + 1][xPos - 1].cellState.type.typeName)
                }
                if (isLeft) {
                    nctn.push(this.cellsController.cellMatrix[yPos][xPos - 1].cellState.type.typeName)
                }

                if (
                    cell.cellState.type.typeName === 'blue'
                    && nctn.filter(e => e === 'pink').length >= 3
                ) {
                    row.push(new Cell(
                        {x: xPos * cellSize, y: yPos * cellSize},
                        types[1]
                    ))
                    return;
                }
                if (
                    cell.cellState.type.typeName === 'pink'
                    && nctn.filter(e => e === 'white').length >= 3
                ) {
                    row.push(new Cell(
                        {x: xPos * cellSize, y: yPos * cellSize},
                        types[2]
                    ))
                    return;
                }
                if (
                    cell.cellState.type.typeName === 'white'
                    && nctn.filter(e => e === 'blue').length >= 3
                ) {
                    row.push(new Cell(
                        {x: xPos * cellSize, y: yPos * cellSize},
                        types[0]
                    ))
                    return;
                }
                row.push(new Cell(
                    {x: xPos * cellSize, y: yPos * cellSize},
                    cell.cellState.type
                ))

            })
            newMatrix.push(row)
        })
        this.cellsController.cellMatrix = newMatrix
    }
}
