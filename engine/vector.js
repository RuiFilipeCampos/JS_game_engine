



class Vector{
    // 2d vectors

    constructor(x, y){
        this.x = x
        this.y = y«
    };

    add(other){
        return new Vector(this.x + other.x, this.y + other.y)
    }

    subtract(other){
        return new Vector(this.x - other.x, this.y - other.y)
    }

    dot(other){
        return this.x*other.x + this.y*other.y
    }



}