class Paint {
  ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d");
    this.ctx.textAlign = "center";
  }

  drawRect(x: number, y: number, w: number, h:number) {

  }
}