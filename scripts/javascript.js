"use strict";

function userInput(mymessage){
    var number;
    number = prompt(mymessage);
    return number;
}

function checksNumber(input,mymessage,roman){
        while (isNaN(roman)) {
    	console.log("Enter numbers only please!")
    	roman = userInput(mymessage);
    }
    return roman;
}

function romanize(input) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
      roman = '',
      i;
  for ( i in lookup ) {
    while ( input >= lookup[i] ) {
      roman += i;
      input -= lookup[i];
    }
  }
  return roman;
}
        
function deromanize(input) {
	var	equal, valid, filter, key, num, m;

	equal = input.toUpperCase();
	valid = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;
	filter = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g;
	key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
	num = 0; 
	m = "";
	if (!(equal && valid.test(equal)))       
        return;
	
	while (m = filter.exec(equal))
		num += key[m[0]];
	
	return num;
}
    
function main(){
    var input, mymessage, numCheck, convert, romanNumber, roman;
    
    mymessage = "What number or roman numeral would you like to convert?";
    input = userInput(mymessage);
    if (isNaN(input)) {
    numCheck = deromanize(input);
    if (isNaN(numCheck)){console.log("That's not a proper number or roman numeral"); return;}
    console.log("Your number is " ,numCheck);
   } else {numCheck = deromanize(input)
    romanNumber = romanize(input);
    console.log("Your roman numeral is ",romanNumber);}
}
main();
