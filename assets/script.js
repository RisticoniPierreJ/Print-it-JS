const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides);

// V1 Ajout des DOTS avec une classe suplémentaire number pour les différencier
let divAllDots = document.querySelector(".dots")

for (let i = 0; i < slides.length; i++) {
	divAllDots.innerHTML += `<div class="dot"></div>` 
}
console.log(divAllDots);


//EventListener sur les flèches
//Initialisation de la premiere image de la bannière
i = 0

let imgBanner = document.querySelector(".banner-img")
imgBanner.setAttribute("src", "./assets/images/slideshow/" + slides[i].image)

let txtBanner = document.querySelector("#banner p")
txtBanner.innerHTML += `${slides[i].tagLine}`	

let divDot = document.querySelectorAll(".dot")
divDot[0].classList.add("dot_selected")


let arrow_right = document.querySelector(".arrow_right")
arrow_right.addEventListener("click", () => {

	divDot[i].classList.remove("dot_selected")

	i++
	imgBanner.setAttribute("src", "./assets/images/slideshow/" + slides[i].image)
	txtBanner.innerHTML = ``
	txtBanner.innerHTML += `${slides[i].tagLine}`	

	divDot[i].classList.add("dot_selected")

})

let arrow_left = document.querySelector(".arrow_left")
arrow_left.addEventListener("click", () => {

	divDot[i].classList.remove("dot_selected")

	i--
	imgBanner.setAttribute("src", "./assets/images/slideshow/" + slides[i].image)
	txtBanner.innerHTML = ``
	txtBanner.innerHTML += `${slides[i].tagLine}`	

	divDot[i].classList.add("dot_selected")

	

})





