


let precioBtc = document.getElementById('btcPrice');
let precioEth =document.getElementById('ethPrice')
let precioBnb = document.getElementById('bnbPrice');
let precioXrp =document.getElementById('xrpPrice');
let precioSol =document.getElementById('solPrice');

let precioAnteriorBtc=null;
let precioActualBtc;
let precioAnteriorEth;
let precioActualEth;
let precioAnteriorBnb;
let precioActualBnb;
let precioAnteriorXrp;
let precioActualXrp;
let precioAnteriorSol;
let precioActualSol;
let btcStream = 'btcusdt@ticker';
let ehtStream = 'ethusdt@ticker' ;
let bnbStream = 'bnbusdt@ticker';
let xrpStream = 'xrpusdt@ticker' ;
let solStream = 'solusdt@ticker';

const streams = [btcStream,ehtStream,bnbStream,xrpStream,solStream];


 let ws = new WebSocket('wss://stream.binance.com:443/stream?streams='+streams.join('/'));


    ws.onmessage = (event) => {
    
    let objeto = JSON.parse(event.data);

	

	let stream = objeto.stream;

	if(stream === btcStream){
			precioActualBtc=(parseFloat(objeto.data.c).toFixed(2));
			//console.log(precioActualBtc);
			precioBtc.innerText=precioActualBtc;
			precioAnteriorBtc > precioActualBtc ? precioBtc.style.color='red': precioBtc.style.color='#5DB142';
			precioAnteriorBtc = (parseFloat(objeto.data.c).toFixed(2));
			//console.log(precioAnteriorBtc);
	
		    btcId.innerHTML = `${objeto.data.s}`;
			//precioBtc.innerHTML = `${objeto.data.c} USD`;
			precioBtc.innerHTML = precioActualBtc + ` $USD`;
	}else if(stream === ehtStream){
			precioActualEth=(parseFloat(objeto.data.c).toFixed(2));
			precioAnteriorEth > precioActualEth ? precioEth.style.color='red': precioEth.style.color='#5DB142';
			precioAnteriorEth = (parseFloat(objeto.data.c).toFixed(2));
		    ethId.innerHTML = `${objeto.data.s}`;
			//precioEth.innerHTML = `${objeto.data.c} USD`;
			precioEth.innerHTML = precioActualEth + ` $USD`;
	}else if(stream === bnbStream){
		    precioActualBnb=(parseFloat(objeto.data.c).toFixed(2));
		    precioAnteriorBnb > precioActualBnb ? precioBnb.style.color='red': precioBnb.style.color='#5DB142';
	        precioAnteriorBnb = (parseFloat(objeto.data.c).toFixed(2));
		    bnbId.innerHTML = `${objeto.data.s}`;
		    //precioBnb.innerHTML = `${objeto.data.c} USD`;
			precioBnb.innerHTML = precioActualBnb + ` $USD`;
	}else if(stream === xrpStream){
		    precioActualXrp=(parseFloat(objeto.data.c).toFixed(2));
	        precioAnteriorXrp > precioActualXrp ? precioXrp.style.color='red': precioXrp.style.color='#5DB142';
	        precioAnteriorXrp = (parseFloat(objeto.data.c).toFixed(2));
		    xrpId.innerHTML = `${objeto.data.s}`;
		    //precioXrp.innerHTML = `${objeto.data.c} USD`;
			precioXrp.innerHTML = precioActualXrp + ` $USD`;
	}else if(stream === solStream){
		    precioActualSol=(parseFloat(objeto.data.c).toFixed(2));
	        precioAnteriorSol > precioActualSol ? precioSol.style.color='red': precioSol.style.color='#5DB142';
	        precioAnteriorSol = (parseFloat(objeto.data.c).toFixed(2));
   			solId.innerHTML = `${objeto.data.s}`;
			//precioSol.innerHTML = `${objeto.data.c} USD`;
			precioSol.innerHTML = precioActualSol + ` $USD`;
	
}
    
    

    
    }

     