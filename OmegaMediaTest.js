//Funksjon for nedtelling hvor x er sekunder.	
let countdown = function(x){	
	let sec = x * 1000;				//ganger med 1000 for å gjøre om til ms.
	let delay = 0;					//starter som 0 da den vil bruke "sec" sin verdi senere.

//Funksjon for å holde styr på sekundene.
function delayTrack(){
		sec = sec / 2;				//deler med to hver gang for å øke eksponensielt
		delay = delay + sec;		//Legger på delay slik at tall nr 2 kommer på 75% og ikke 25% osv. Eks: Om 10 sek uten denne så vil 100 komme etter 5 sek, mens 99 vil komme etter 2,5, med så vil 100 komme etter 5 og 99 komme etter 5+2,5 osv. 
}

//For loop for nedtelling av 100.
for(let i = 100; i>=0; i--){
	if(i < 10){						//sjekker om det er siste 10 tallene
		delayTrack();
		setTimeout(function(){console.log('\x1b[31m%s\x1b[0m',i);}, delay); 	//legger til rød font i konsolen og resetter fargen til orginal etter. 
	} else {
		delayTrack();	
		setTimeout(function(){console.log(i);}, delay);
		}
	}
}

countdown(10); 						//velg antall sekunder her