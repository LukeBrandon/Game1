

class Controller{
    model: Model;
    view : View;

    keyRight: boolean;
    keyLeft: boolean;
    keyUp: boolean;
    keyDown: boolean;
    keySpace: boolean;


    constructor(_model: Model){
        let model = _model;


        this.keyRight = false;
        this.keyLeft = false;
    }

    setView(v: View){
        this.view = v;
    }


    keyboardInput(event: KeyboardEvent){
        if(event.keyCode == 37){    //left key pressed
           this.keyLeft = true;
        }
        if(event.keyCode == 38){    //up key pressed
            this.keyUp = true;
        }
        if(event.keyCode == 39){    //right key pressed
            this.keyRight = true;
        }
        if(event.keyCode == 40){    //down key pressed
            this.keyDown = true;
        }
        if(event.keyCode == 41){    //spacebar pressed
            this.keySpace = true;
        }
    }

    update(){
        console.log("controller update");

        if(this.keyLeft == true){
            this.model.player.x -= 10;
            console.log("left key pressed");
            this.keyLeft = false;
        }
        if(this.keyRight == true){
            this.model.player.x +=10;

            this.keyRight = false;
        }
        if(this.keyUp == true){
            this.model.player.y -= 10;

            this.keyUp = false;
        }
        if(this.keyDown == true){
            this.model.player.y += 10;

            this.keyDown = false;
        }
        if(this.keySpace == true){
            console.log("pressed key space");
            this.keySpace = false;
        }
        
    }


}