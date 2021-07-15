

class Vetor {
	constructor(x, y){
		this.x = x
		this.y = y
	}


	add(dx, dy){
		this.x += dx
		this.y += dy
	}


}


class Object {
	/*
	Base class for objects.
	*/

	constructor(x, y){

		this.x = x;
		this.y = y;

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

	deslocar(dx, dy){
		this.x += dx;
		this.y += dy;
	}


	apagar(context){
		context.fillStyle = "white"

		var max_y = this.y + this.h;
		var max_x = this.x + this.l;

		for (var yi = this.y; yi <= max_y ; yi++){
			for (var xi = this.x; xi <= max_x; xi++){
				context.fillRect(xi, yi, 1, 1)	
			}
		}
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














