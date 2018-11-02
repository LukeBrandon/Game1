

class Model{
    player: Player;

    constructor(){
        console.log("model constructor");
        this.player = new Player();

    }

    update(){
        console.log("model update");
        this.player.update();
        //this.player.draw();
    }



}