

class Player extends Sprite{
    //member variables
    lastTouchCounter: number;
    direction: string;

    constructor(){
        super();
        this.lastTouchCounter = 0;
        
    }


    update(){
        console.log("palyer update");

        this.lastTouchCounter++;
    }//end player update

    draw(){
        //Game.paint.fillStyle = "red";
        //Game.paint.fillRect(this.x, this.y, 100, 100);
    }
    
}