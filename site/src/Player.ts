

class Player extends Sprite{
    //member variables
    lastTouchCounter: number;
    direction: string;


    constructor(){
        super();
        this.lastTouchCounter = 0;

    }


    update(){
        // for(let i = 0; i < 100; i++){
        //     if(this.collides(i)){
        //         direction = this.pushOut(i);
        //     }
        // }

       this.lastTouchCounter++;
       
    }

    draw(){

    }
    
}