//alert('hello');
'use strict';
let cl= console.log;


let countDown = document.getElementById('countDown');
cl(countDown);

let futureDate = new Date(2030, 0, 25);  //launch future date
cl(futureDate);

let currentDate = new Date(); // current date
cl(currentDate);

 let diff = futureDate.getTime() - currentDate.getTime()
 cl(diff); // milli sec
 
 let days = Math.floor(diff /( 1000 * 60 * 60 * 24))
 cl(days);
// in 1 day 24hrs
//in 1 hr 60 min
// in 1min 60 sec
//in 1 sec 1000 milli sec
 let hrs = Math.floor( diff %  ( 1000 * 60 * 60 * 24) / (1000 * 60 * 60));
 cl(hrs);

 let min =  Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
 cl(min);
 
 let sec = Math.floor(diff % (1000 * 60) / (1000))
 cl(sec);
 
 // days = setZero(days);
 //hrs = setZero(hrs);
 //min = setZero(min);
 //sec = setZero(sec);
 
 
 let result = `
		<div class="counter">
			<p>Days</p>
			<p>${setZero(days)}</p>

		</div>
		<div class="counter">
			<p>Hrs</p>
			<p>${setZero(hrs)}</p>
		</div>
		<div class="counter">
			<p>Min</p>
			<p>${setZero(min)}</p>
		</div>
		<div class="counter">
			<p>Sec</p>
			<p>${setZero(sec)}</p>
		</div>
	</div>
`

cl(result);

countDown.innerHTML = result;

function setZero(num){
	return(num<10)? ('0' + num) : (num);
}



//code in function

function createCountDown(){
	let countDown = document.getElementById('countDown');
cl(countDown);

let futureDate = new Date(2030, 0, 25);  //launch future date
cl(futureDate);

let currentDate = new Date(); // current date
cl(currentDate);

 let diff = futureDate.getTime() - currentDate.getTime()
 cl(diff); // milli sec
 // let diff1 = new Date(224317203406);
 // cl(diff1);
 let days = Math.floor(diff /( 1000 * 60 * 60 * 24))
 cl(days);
 // let getdays = diff.getDay();
 // let weekArray = ["Sunday" ,"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ]
 // cl(`${[futureDate.getDay()]}`)
 //cl(getdays);
 let hrs = Math.floor( diff %  ( 1000 * 60 * 60 * 24) / (1000 * 60 * 60));
 cl(hrs);
// let gethr = diff.getHours();
// cl(gethr);
 let min =  Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
 cl(min);  
 
 let sec = Math.floor(diff % (1000 * 60) / (1000))
 cl(sec);
 
  let result = `
		<div class="counter">
			<p>Days</p>
			<p>${setZero(days)}</p>

		</div>
		<div class="counter">
			<p>Hrs</p>
			<p>${setZero(hrs)}</p>
		</div>
		<div class="counter">
			<p>Min</p>
			<p>${setZero(min)}</p>
		</div>
		<div class="counter">
			<p>Sec</p>
			<p>${setZero(sec)}</p>
		</div>
	</div>
`

cl(result);

countDown.innerHTML = result;

setTimeout(createCountDown, 1000);
}

createCountDown();

function setZero(num){
	return(num<10)? ('0' + num) : (num);
}
