

function button(value){
	let result= document.getElementById('result');
	result.value+=value;
}

function clearResult(){
	let result= document.getElementById('result');
	result.value = '';
}

function deleteResult(){
	let result= document.getElementById('result');
	result.value= result.value.slice(0,-1);
}

function calculate(){
	let calculation= document.getElementById('result').value;
	 var evall=eval(calculation);
	 document.getElementById('result').value=evall;
}