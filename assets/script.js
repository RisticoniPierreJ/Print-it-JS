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

//********* Ajout des bullet points *********//
let divAllDots = document.querySelector(".dots")

for (let i = 0; i < slides.length; i++) {
	divAllDots.innerHTML += `<div class="dot"></div>` 
}


//********* Initialisation de la bannière *********//
let i = 0

// Image et texte
let imgBanner = document.querySelector(".banner-img")
imgBanner.setAttribute("src", "./assets/images/slideshow/" + slides[i].image)

let txtBanner = document.querySelector("#banner p")
txtBanner.innerHTML += `${slides[i].tagLine}`	

// bullet point
let divDot = document.querySelectorAll(".dot")
divDot[0].classList.add("dot_selected")

//********* EventListener sur les flèches *********//

// Fonction pour passé à l'image suivante
function NextSlide(){
	imgBanner.setAttribute("src", "./assets/images/slideshow/" + slides[i].image)
	txtBanner.innerHTML = ``
	txtBanner.innerHTML += `${slides[i].tagLine}`
	divDot[i].classList.add("dot_selected")
}

// Gestion du clic sur la flèche droite
let arrow_right = document.querySelector(".arrow_right")
arrow_right.addEventListener("click", () => {
	
	divDot[i].classList.remove("dot_selected")
	
	if(i === (slides.length-1)){
		i=0
		NextSlide()
	}else{
		i++
		NextSlide()
	}
})

// Gestion du clic sur la flèche gauche
let arrow_left = document.querySelector(".arrow_left")
arrow_left.addEventListener("click", () => {

	divDot[i].classList.remove("dot_selected")

	if(i === 0){
		i=slides.length-1
		NextSlide()
	}else{
		i--
		NextSlide()
	}
})








