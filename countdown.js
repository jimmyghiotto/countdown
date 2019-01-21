function loopFunction() {
	//Ottengo i dati sull'ora attuale
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	//Se l'ora ha una sola cifra aggiungo uno zero prima

	//Converto l'orario attuale in minuti
	minTotali = (h * 60) + m;

	//Scelgo il prossimo countdown in base all'ora attuale
	if((minTotali<780)||(minTotali>=960)) {
		var oraUscita = 13;
		var minUscita = 00;
		var secUscita = 00;	
		
		document.getElementById("demo").style.color = "rgb(0, 0, 0)";
		document.getElementById("pausaPranzo").style.display = "none";
	}
	else if(minTotali<840) {
		var oraUscita = 14;
		var minUscita = 00;
		var secUscita = 00;	
		
		document.getElementById("demo").style.color = "rgb(165, 0, 0)";
		document.getElementById("pausaPranzo").style.display = "inline-block";
	}
	else if(minTotali<960) {
		var oraUscita = 16;
		var minUscita = 00;
		var secUscita = 00;	
		
		document.getElementById("demo").style.color = "rgb(0, 0, 0)";
		document.getElementById("pausaPranzo").style.display = "none";
	}

	//Se l'ora è minore di quella attuale compenso (+60sec, +60min, +24ore)
	if(s>secUscita){
		secUscita = secUscita + 60;
		minUscita = minUscita - 1;
	}
	if(m>minUscita){
		minUscita = minUscita + 60;
		oraUscita = oraUscita - 1;
	}
	if(h>oraUscita){
		oraUscita = oraUscita + 24;
	}

	//Trovo le ore mancanti allo scadere del countdown
	var oreMancanti = oraUscita - h;
	var minMancanti = minUscita - m;
	var secMancanti = secUscita - s;

	//Imposto i 5 minuti di stop una volta raggiunti gli obiettivi dei countdown
	if((minTotali>=780)&&(minTotali<=781)) {
		var oreMancanti = 0;
		var minMancanti = 0;
		var secMancanti = 0;
		
		document.getElementById("pausaPranzo").style.display = "inline-block";
	}
	else if((minTotali>=840)&&(minTotali<=841)) {
		var oreMancanti = 0;
		var minMancanti = 0;
		var secMancanti = 0;
	}
	else if((minTotali>=960)&&(minTotali<=961)) {
		var oreMancanti = 0;
		var minMancanti = 0;
		var secMancanti = 0;
	}
	else {
		
	}

	//Se le ore mancanti hanno una sola cifra aggiungo uno zero prima
	if(oreMancanti<10) {
		oreMancanti = "0"+oreMancanti;
	}
	if(minMancanti<10) {
		minMancanti = "0"+minMancanti;
	}
	if(secMancanti<10) {
		secMancanti = "0"+secMancanti;
	}

	//Quando il countdown scende sotto ai 15 secondi cambia il colore della scritta
	if((oreMancanti == 00)&&(minMancanti == 00)&&(secMancanti <= 30)) {
		setTimeout(cambiaColore, 0);
	}

	//Countdown scaduto!
	if((oreMancanti == 00)&&(minMancanti == 00)&&(secMancanti == 00)) {
		
	}

	//Scrive il tempo mancante negli appositi spazi nella pagina
	document.getElementById("demo").innerHTML = oreMancanti + ":" + minMancanti + ":" + secMancanti;
	
	setTimeout(loopFunction, 500); //Ricomincia
}
		
function cambiaColore() {
	//Dichiaro la variabile counter
	var countColor = document.getElementById("counter").value;
		//Cambia colore in rosso
		if(countColor == "0") {
			document.getElementById("demo").style.color = "rgb(165, 0, 0)";
			document.getElementById("counter").value = "1";
		}
		//Cambia colore in nero
		else if(countColor == "1") {
			document.getElementById("demo").style.color = "rgb(0, 0, 0)";
			document.getElementById("counter").value = "0";
		}
}