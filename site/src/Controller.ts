import { Model } from './Model';

export class Controller{
    model: Model;

    keyRight: boolean;
    keyLeft: boolean;
    keyUp: boolean;
    keyDown: boolean;
    keySpace: boolean;

    constructor(_model: Model){
        console.log("controller constructor");
        this.model = _model;
        document.addEventListener("keydown", this.keyboardInput);
    }

    keyboardInput(event: KeyboardEvent){
      console.log(event);
        if(event.keyCode == 37){    //left key pressed
           this.model.player.
        }
        if(event.keyCode == 38){    //up key pressed
            this.model.player.y -= 5;
        }
        if(event.keyCode == 39){    //right key pressed
            this.model.player.x += 5;
        }
        if(event.keyCode == 40){    //down key pressed
            this.model.player.y += 5;
        }
        if(event.keyCode == 41){    //spacebar pressed
            this.keySpace = true;
        }
    }

    update(){
        if(this.keySpace == true){
            console.log("pressed key space");
            this.keySpace = false;
        }

    }

}
