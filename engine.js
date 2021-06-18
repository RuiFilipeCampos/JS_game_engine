

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





class Retangulo {

	constructor(x, y, comprimento, altura){
		this.pos   = new Vetor(x, y)
		this.param = new Vetor(comprimento, altura)
	}

	deslocar(dx, dy){ 
		this.pos.add(dx, dy)
	}

	desenhar(context){
		context.fillStyle = "black"
		for (var yi = this.pos.y; yi <= this.pos.y + this.param.y ; yi++){
			for (var xi = this.pos.x; xi <= this.pos.x + this.param.x; xi++){
				context.fillRect(xi, yi, 1, 1)	
			}
		}
	}

	apagar(context){

		context.fillStyle = "white"

		for (var yi = this.pos.y; yi <= this.pos.y + this.param.y ; yi++){
			for (var xi = this.pos.x; xi <= this.pos.x + this.param.x; xi++){
				context.fillRect(xi, yi, 1, 1)	
			}
		}



	}
}



class Circulo {
	constructor(x, y, raio){
		this.pos   = new Vetor(x, y)


		this.raio = raio
	}

	deslocar(dx, dy){
		this.pos.add(dx, dy)
	}

	desenhar(context){

		var max = 500

		for (var yi = this.pos.y; yi <= this.pos.y + max ; yi++ ){
			for (var xi = this.pos.x; xi <= this.pos.x + max; xi++){
				if ((this.pos.x - xi)**2 + (this.pos.y - yi)**2 < this.raio**2) {
					context.fillRect(xi, yi, 1, 1)
				}
				
			}
		}

	}
}


const delta = 10

const canvas = document.getElementById("CANVAS");
const context = canvas.getContext('2d')

var ret = new Retangulo(0, 500, 50, 100)


ret.desenhar(context)












document.addEventListener("keydown", (event) => {
	var key = event.key

		if (key == 'ArrowRight') {
			ret.apagar(context)
			ret.deslocar(delta, 0)
			ret.desenhar(context)
		}

		if (key == 'ArrowLeft') {
			ret.apagar(context)
			ret.deslocar(-delta, 0)
			ret.desenhar(context)
		}

		if (key == 'ArrowUp') {
			ret.apagar(context)
			ret.deslocar(0, -delta)
			ret.desenhar(context)
		}

		if (key == "ArrowDown") {
			ret.apagar(context)
			ret.deslocar(0, delta)
			ret.desenhar(context)


		}
})

