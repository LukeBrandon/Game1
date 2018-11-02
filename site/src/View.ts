

class View{
    model: Model;

    constructor(c: Controller, m: Model){
        this.model = m;
        c.setView(this);
    }


    paintComponent(): void{
        Game.paint.fillStyle = "red";
        Game.paint.fillRect(this.model.player.x, this.model.player.y, 100, 100);
    }

    
}
