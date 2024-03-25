import {defineStore} from 'pinia'
import {Canvas} from "../models/Canvas";

export const useAppStore = defineStore('appStore', {
    state: () => ({
        canvas: null as Canvas | null,
        cellSize: 7,

        types: [
            {typeName: 'blue', color: '#f7f7fe'},
            {typeName: 'pink', color: '#ffffff'},
            {typeName: 'white', color: '#f8fafc'},
        ]
    }),
    getters: {
        canvasCtx: (state) => state.canvas?.getCtx(),
        canvasRect: (state) => state.canvas?.getCanvasRect(),
    },
    actions: {
        async setCanvas(canvas: Canvas) {
            this.canvas = canvas
        },
    },
})
