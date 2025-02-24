import {StateNode} from 'tldraw';
import 'tldraw/tldraw.css';



export class RollabeTableShapeTool extends StateNode {
    static override id = 'rollabletable';

    override onEnter()
    {
        this.editor.setCursor({type: 'cross', rotation: 0});
    }

    override onPointerDown() 
    {
        const {currentPagePoint} = this.editor.inputs;
        this.editor.createShape({type: 'rollabletable-shape', 
            x: currentPagePoint.x, 
            y: currentPagePoint.y,
        })
    }
}


