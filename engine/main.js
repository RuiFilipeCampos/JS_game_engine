



export class Universe { 
    // Global stuff
    
    constructor(){
        this.container = {};
        this.canvas = document.getElementById("CANVAS");
        this.context = canvas.getContext('2d');
    }; 

    add_gravity(strenght){
        this.g = -strenght;
    }

    add_object(object){

        switch (object.type) {
            case value:
                
                break;
        
            default:
                break;
        }
        // gotta specify lots of stuff here

    }

    add_player(){}

    advance_step(canvas, dt){
        // render the universe

    }


}