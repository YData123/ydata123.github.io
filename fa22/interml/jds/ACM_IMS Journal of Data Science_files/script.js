let colors = ["#EAEBE4", "#008D4E"]

function randomColor() {
	return colors[Math.floor(Math.random()*colors.length)]
}

function renderGraph(element) {

	let container = element.getBoundingClientRect()
	let xmax = Math.floor(container.width)
	let ymax = Math.floor(container.height)

	let num = Math.ceil(Math.sqrt(xmax))
	let dim = xmax/num

	document.getElementById("image-main").innerHTML = "";
	document.getElementById("image-main").style.height = (dim*12) + "px";
	
	for (let i=0; i<num; i++) {
		for (let j=0; j<num/2; j++) {
			let size = dim
			if (Math.random() < 0) {
				let coords = [[i*size,j*size],[i*size,j*size+size], [i*size+size,j*size]]
				drawPolygon(coords,randomColor(), "image-main")			
			} else {
				drawCircle([size/2+i*size,size/2+j*size], size/2*Math.random(), randomColor(), "image-main")			
			}
		}
	}  	
}

document.addEventListener('DOMContentLoaded', function () {	

	if (document.getElementById("image-main")) {
		renderGraph(document.getElementById("image-main"));
		// window.addEventListener('resize', function(event) {
		// 	renderGraph(document.getElementById("image-main"));
		// }, true);
	}

}, false);

