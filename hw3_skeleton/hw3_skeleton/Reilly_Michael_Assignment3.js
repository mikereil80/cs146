/** Michael Reilly */
 /** I pledge my honor that I have abided by the Stevens Honor System */
 
 var result=0;
 var buffer=0;
 var currentOp='';
 setDisplay('0');
 
/**
 * Resets the state of the calculator and the display
 */
function resetCalc() {
   result=0;
   buffer=0;
   currentOp='';
   setDisplay(result.toString());
   }

/**
 * Sets the inner text of the div with id="output"
 * @param {String} str the string to set the inner text to
 */
function setDisplay(str) {
   document.getElementById("output").innerText=str;
}

/**
 * Returns the current result of the calculator
 * Hint: you can use a global variable for the result
 */
function getResult() {
   buffer=result;
   return result;
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
   buffer==result;
   resultant=''+result+num;
   resulter=Math.min(Math.max(parseInt(resultant, 10),-999999999),999999999);
   resultanter=resulter.toString();
   setDisplay(resultanter);
   result=parseInt(resultanter, 10);
}

/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {
	if (result !== 0){
	currentOp=op;
   buffer=result;
   result=0;
   setDisplay(result.toString());
	}else if (result===0 && buffer!==0){
		currentOp=op;
		result=0;
		setDisplay(result.toString());
	}
	else{
		currentOp=op;
   buffer=result;
   result=0;
   setDisplay(result.toString());
	}
}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
   if (currentOp !== ''){
	   if (currentOp === '/' && result === 0){
		   setDisplay("ERROR");
	   }
	   else if (currentOp==='+'){
		   resultant=result+buffer;
		   resulter=Math.min(Math.max(parseInt(resultant, 10),-999999999),999999999);
		   resultanter=resulter.toString();
		   setDisplay(resultanter);
		   buffer=result;
		   result=parseInt(resultanter, 10);
	   }
	   else if (currentOp==='-'){
		   resultant=buffer-result;
		   resulter=Math.min(Math.max(parseInt(resultant, 10),-999999999),999999999);
		   resultanter=resulter.toString();
		   setDisplay(resultanter);
		   buffer=result;
		   result=parseInt(resultanter, 10);
	   }
	   else if (currentOp==='*'){
		   resultant=result*buffer;
		   resulter=Math.min(Math.max(parseInt(resultant, 10),-999999999),999999999);
		   resultanter=resulter.toString();
		   setDisplay(resultanter);
		   buffer=result;
		   result=parseInt(resultanter, 10);
	   }
	   else if (currentOp==='/'){
		   if (buffer===0){
			   resultant=0;
			   resulter=resultant.toString();
			   setDisplay(resulter);
			   buffer=result;
			   result=parseInt(resulter, 10);
		   }
		   else{
		   resultant=buffer/result;
		   resulter=Math.min(Math.max(parseInt(resultant, 10),-999999999),999999999);
		   resultanter=resulter.toString();
		   setDisplay(resultanter);
		   buffer=result;
		   result=parseInt(resultanter, 10);
		   }
	   }
   }
   currentOp='';
}