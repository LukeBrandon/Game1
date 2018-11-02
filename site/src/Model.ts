

class Model{
    player: Player;

    constructor(){
        this.player = new Player();

    }

    update(){
        console.log("model update");
        this.player.update();
        //this.player.draw();
    }



}