class View {
    constructor(c, m) {
        this.model = m;
        c.setView(this);
    }
    paintComponent() {
        Game.paint.fillStyle = "red";
        Game.paint.fillRect(this.model.player.x, this.model.player.y, 100, 100);
    }
}
//# sourceMappingURL=View.js.map