
abstract class Sprite{
    //member variables
    x: number;
    y: number;
    h: number;
    w: number;
    prevX: number;
    prevY: number;
    type: string;

    constructor(){
        this.x = 0;
        this.y = 0;
        this.h = 0;
        this.w = 0;
        this.prevX = 0;
        this.prevY = 0;
    }


    abstract update(): void;
    abstract draw(): void;

    getY(): number{
        return this.y;
    }
    getX(): number{
        return this.x;
    }
    getW(): number{
        return this.w;
    }
    getH(): number{
        return this.h;
    }


    collides(that: Sprite): boolean{
        if(this.y + this.h <= that.getY()){     //above
            return false;
        }
        if(this.x + this.w <= that.getX()){     //right side of mario 
            return false;
        }
        if(this.x >= that.getX()+that.getW()){      //left side of mario
           return false;
        }
        if(this.y >= that.getY()+that.getH()){      //below
            return false;
        }
        return true; 

    }
    pushOut(that: Sprite): string{
        //entering from top
        if(this.y + this.h >= that.getY() && !(this.prevY + this.h > that.getY())){  
            this.y = that.getY() - this.h;
            return "top";

        //entering from bottom
        }else if(this.y <= that.getY() + that.getH() && !(this.prevY < that.getY() + that.getH())){  
            this.y = that.getY() + that.getH()+3;
            return "bottom";

        //entering from left
        }else if(this.x + this.w >= that.getX() && !(this.prevX + this.w > that.getX()) ){
            this.x = that.getX()  - this.w;   
            return "left";

        //entering from right
        }else if(this.x <= (that.getX() + that.getW()) && !(this.prevX < (that.getX() + that.getW()) )){ 
            this.x = that.getX() +that.getW();
            return "right";

        }else
            return "not";
    }








}//end of sprite class