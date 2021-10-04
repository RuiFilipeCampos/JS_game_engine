

import {Vector} from "vector.js"

class Object {
	/*
	Base class for objects.
	*/

	constructor(x, y, vx, vy, ax, ay){

		//kinematic type stuff
		this.pos = new Vector(x, y)
		this.vel = new Vector(vx, vy)
		this.accel = new Vector(ax, ay)
	}

	move(dt){
		// lots of allocations, I dont like this

		this.vel.add_inplace(
			this.accel.multiply(dt)
		)

		this.pos.add_inplace(
			this.vel.multiply(dt)
		)
	}


}

var LOCKED = false; 

export class Player extends Object{
	// this shoud be unique 

	constructor(){


	  	if (LOCKED){
			  throw Error("There can only be one playaaa")
		}

		LOCKED = true; 
		
		

		document.addEventListener("keydown", (event) => {
			var key = event.key


				if (key == 'ArrowRight') {
					this.apagar(context)
					this.deslocar(delta, 0)
					this.desenhar(context)
				}

				if (key == 'ArrowLeft') {
					this.apagar(context)
					this.deslocar(-delta, 0)
					this.desenhar(context)
				}

				if (key == 'ArrowUp') {
					this.apagar(context)
					this.deslocar(0, -delta)
					this.desenhar(context)
				}

				if (key == "ArrowDown") {
					this.apagar(context)
					this.deslocar(0, delta)
					this.desenhar(context)

				}
		})

	}

}



export class FixedObject extends Object{
	move(dt){
		// overriding toplevel move, this guy is fixed 
	}
}





class Retangulo extends Object{

	constructor(x, y, comprimento, altura){
		super(x, y);
		this.h = altura;
		this.l = comprimento;
	}

	desenhar(context){

		context.fillStyle = "black"

		var max_y = this.y + this.h;
		var max_x = this.x + this.l;

		for (var yi = this.y; yi <= max_y ; ++yi){
			for (var xi = this.x; xi <= max_x; ++xi){
				context.fillRect(xi, yi, 1, 1);
			}
		}
	}

}



class Circulo extends Object{
	constructor(x, y, raio){
		super(x, y);
		this.raio = raio;
	}


	desenhar(context){

		for (var yi = this.y; yi <= max_y ; ++yi){
			for (var xi = this.x; xi <= max_x; ++xi){
				if ((this.pos.x - xi)**2 + (this.pos.y - yi)**2 < this.raio**2) {
					context.fillRect(xi, yi, 1, 1);
				}
			}
		}



/*
		var max = 500

		for (var yi = this.pos.y; yi <= this.pos.y + max ; yi++ ){
			for (var xi = this.pos.x; xi <= this.pos.x + max; xi++){

				
			}
		}
*/
	}
}


const delta = 10

const canvas = document.getElementById("CANVAS");
const context = canvas.getContext('2d')

var ret = new Retangulo(0, 500, 50, 100)


ret.desenhar(context)














