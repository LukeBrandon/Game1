

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
        // for(let i = 0; i < 100; i++){
        //     if(this.collides(i)){
        //         direction = this.pushOut(i);
        //     }
        // }

       this.lastTouchCounter++;

    }

    draw(){
        //Game.paint.fillStyle = "red";
        //Game.paint.fillRect(this.x, this.y, 100, 100);
    }
    
}