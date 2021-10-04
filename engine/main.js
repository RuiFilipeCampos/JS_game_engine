



export class Universe{ 
    // Global stuff
    
    constructor(){
        this.container = {};
        this.canvas = false; 
    }; 

    add_gravity(strenght){
        this.g = -strenght
    }

    add_object(){
        // gotta specify lots of stuff here

    }

    add_player(){}

    advance_step(canvas, dt){
        // render the universe

    }


}