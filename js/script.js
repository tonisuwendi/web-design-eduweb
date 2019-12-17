var navbar = document.querySelector("section.menu");
var gmbttg = document.querySelector("section.tentang div.gambar");
var texttg = document.querySelector("section.tentang div.text");
var parrh1 = document.querySelector('section.parallax h1');
var parp = document.querySelector('section.parallax p');
var kotak = document.querySelector("section.kelas div.isi div.kotak");


window.onscroll = function(){
	var scroll = document.documentElement.scrollTop;

	if(scroll > 500){
		navbar.style.display = "block";
	}else{
		navbar.style.display = "none";
	}

	if(scroll > 300){
		gmbttg.style.transform = "translate(0,0)";
		gmbttg.style.opacity = "1";
		texttg.style.transform = "translate(0,0)";
		texttg.style.opacity = "1";
	}

	if(scroll > 500){
		parrh1.style.transform = "translate(0,0)";
		parrh1.style.opacity = "1";
	}

	if(scroll > 510){
		parp.style.transform = "translate(0,0)";
		parp.style.opacity = "1";
	}

	// if(scroll > 550){
	// 	kotak.style.transform = "translate(0,0)";
	// 	kotak.style.opacity = "1";
	// }
}