


let precioBtc = document.getElementById('btcPrice');
let precioEth =document.getElementById('ethPrice')
let precioBnb = document.getElementById('bnbPrice');
let precioXrp =document.getElementById('xrpPrice');
let precioSol =document.getElementById('solPrice');
let cambioBtc=document.getElementById('cambioBtc');
let cambioEth=document.getElementById('cabmioEth');
let cambioBnb=document.getElementById('cambioBnb');
let cambioXrp=document.getElementById('cambioXrp');
let cambioSol=document.getElementById('cambioSol');





let changeBtc ;
let changeEth;
let changeBnb;
let changeXrp;
let changeSol;
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
const datos = [precioBtc,precioEth,precioBnb,precioXrp,precioSol];




 let ws = new WebSocket('wss://stream.binance.com:443/stream?streams='+streams.join('/'));


    ws.onmessage = (event) => {
    
	let objetos = JSON.parse(event.data);
	//console.log(typeof(objetos));
	// for(let objeto of objetos){
	// 	let pb= (parseFloat(objeto.data.c).toFixed(2));
	// 	console.log(pb);
	// }
	

	let stream = objetos.stream;
	let cero = 0;

	if(stream === btcStream){
			precioActualBtc=(parseFloat(objetos.data.c).toFixed(2));
			
			precioBtc.innerText=precioActualBtc;
		    precioAnteriorBtc > precioActualBtc ? precioBtc.style.color='red': precioBtc.style.color='#5DB142'
			precioAnteriorBtc = (parseFloat(objetos.data.c).toFixed(2));
			changeBtc = (parseFloat(objetos.data.P).toFixed(2));//parseo el valor de el % de cambio de string a float para poder comparar con 0
			//console.log(typeof(changeBtc));
			cambioBtc.innerHTML=changeBtc +  ` %`;// este es el elemento html para mostrar el valor en la pagina
			changeBtc >= 0 ? cambioBtc.style.color='#5DB142': cambioBtc.style.color='red';
		    btcId.innerHTML = `${objetos.data.s}`;
			precioBtc.innerHTML = precioActualBtc + ` $USD`;
	}else if(stream === ehtStream){
			precioActualEth=(parseFloat(objetos.data.c).toFixed(2));
			precioAnteriorEth > precioActualEth ? precioEth.style.color='red': precioEth.style.color='#5DB142';
			precioAnteriorEth = (parseFloat(objetos.data.c).toFixed(2));
			changeEth = (parseFloat(objetos.data.P).toFixed(2));
			ethId.innerHTML = `${objetos.data.s}`;
			
			precioEth.innerHTML = precioActualEth + ` $USD`;
			cambioEth.innerHTML= changeEth+ ` %`;
			changeEth >= cero ? cambioEth.style.color='#5DB142': cambioEth.style.color='red';
	}else if(stream === bnbStream){
			precioActualBnb=(parseFloat(objetos.data.c).toFixed(2));
			changeBnb = (parseFloat(objetos.data.P).toFixed(2));
			precioAnteriorBnb > precioActualBnb ? precioBnb.style.color='red': precioBnb.style.color='#5DB142';
			changeBnb >= cero ? cambioBnb.style.color='#5DB142': cambioBnb.style.color='red';
	        precioAnteriorBnb = (parseFloat(objetos.data.c).toFixed(2));
		    bnbId.innerHTML = `${objetos.data.s}`;
			precioBnb.innerHTML = precioActualBnb + ` $USD`;
			cambioBnb.innerHTML= changeBnb + ` %`;
	}else if(stream === xrpStream){
		    precioActualXrp=(parseFloat(objetos.data.c).toFixed(2));
			precioAnteriorXrp > precioActualXrp ? precioXrp.style.color='red': precioXrp.style.color='#5DB142';
			precioAnteriorXrp = (parseFloat(objetos.data.c).toFixed(2));
			changeXrp= (parseFloat(objetos.data.P).toFixed(2));
			changeXrp >= cero ? cambioXrp.style.color='#5DB142': cambioXrp.style.color='red';
		    xrpId.innerHTML = `${objetos.data.s}`;
			precioXrp.innerHTML = precioActualXrp + ` $USD`;
			cambioXrp.innerHTML=changeXrp + ` %`;
	}else if(stream === solStream){
		    precioActualSol=(parseFloat(objetos.data.c).toFixed(2));
			precioAnteriorSol > precioActualSol ? precioSol.style.color='red': precioSol.style.color='#5DB142';
			precioAnteriorSol = (parseFloat(objetos.data.c).toFixed(2));
			changeSol= (parseFloat(objetos.data.P).toFixed(2));
   			solId.innerHTML = `${objetos.data.s}`;
			precioSol.innerHTML = precioActualSol + ` $USD`;
			cambioSol.innerHTML= changeSol + ` %`;
			changeSol >= cero ? cambioSol.style.color='#5DB142': cambioSol.style.color='red';

}
    
    

    
    }

     