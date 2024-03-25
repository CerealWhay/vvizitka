import {useAppStore} from '../stores/appStore'
import {CellsController} from "../controllers/cellsController";
import {ReactionController} from "../controllers/reactionController";
import {throttle} from "../utils/throttle";

export class Engine {

    animationFrame;
    canvas;
    cellsController;
    reactionController;

    throttledGameFrame;

    constructor() {

        this.throttledGameFrame = throttle(this.gameFrame.bind(this), 0)

        this.canvas = useAppStore().canvas
        this.cellsController = new CellsController()
        this.reactionController = new ReactionController(this.cellsController)
        this.animationFrame = requestAnimationFrame(this.throttledGameFrame)
    }

    gameFrame(): void {
        this.canvas?.clearCanvas();

        if (this.reactionController.isActive) this.reactionController.frame()
        this.cellsController.frame()

        this.animationFrame = requestAnimationFrame(this.throttledGameFrame)
    }

    stopAnimation(): void {
        cancelAnimationFrame(this.animationFrame)
    }

    toggleReaction() {
        this.reactionController.toggleActive()
    }
}
