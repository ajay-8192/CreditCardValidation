// creadit card number validation
function creditCardValidation(creditCard) {
	let code = creditCard + "0";
	let len = code.length
	let parity = len % 2
	let sum = 0
	for (let i = len-1; i >= 0; i--) {
		let d = parseInt(code.charAt(i));
		if (i % 2 == parity) { d *= 2 };
		if (d > 9) { d -= 9 };
		sum += d;
	}
	isTrue = ( sum % 10 === 0 ? 0 : 10 - (sum % 10));
	if (isTrue)
		return isTrue
	// console.log("Invalid Credit Card Number!!");
	return false;
}

// Name validation.
function nameValidation(name) {
	
	// pattern for matching names
	let matches = /^[a-zA-Z ]{2,30}$/
	if (name.match(matches)) {
		return true;
	}
	// console.log("Invalid Name!!");
	return false;
}

// date validation date format (mm/yy or mm-dd)
function dateValidation(date) {
	
	// todays date.
	let today = new Date();
	// let date = String(today.getDate()).padStart(2, '0');
	let month = (today.getMonth() + 1).toString().padStart(2, '0'); 
	let yyyy = today.getFullYear().toString();
	
		
	//Test which seperator is used '/' or '-'
	let opera1 = date.split('/');
	let opera2 = date.split('-');
	lopera1 = opera1.length;
	lopera2 = opera2.length;
	let pdate = ''
	
	// Extract the string into month, date and year
	if (lopera1>1) {
		pdate = date.split('/');
	} else if (lopera2>1) {
		pdate = date.split('-');
	}
	
	mm = pdate[0]
	yy = pdate[1]
	
	if ( yyyy.slice(2,4) > yy) {
		// console.log("Invalid Date!!");
		return false
	}
	if (month > mm && yyyy.slice(2,4) === yy) {
		// console.log("Invalid Date!!");
		return false
	}
	
	return true;
}

// CVV validation
function cvvValidation(cvv) {
	let matches = /^\d{3}$/;
	if(cvv.match(matches)) {
		return true;
       }
	console.log("Invalid CVV");
	return false;
}
	

// Credit Card details validation
function validationCreditCard(creditCard, name, date, cvv) {
	
	
	// Returns true if every details are validated else return false.
	if (creditCardValidation(creditCard) && nameValidation(name) && dateValidation(date) && cvvValidation(cvv)) {
		return true;
	}
	// console.log("Correct Your Invalid Inputs");
	return false;
}

module.exports = {validationCreditCard: validationCreditCard, creditCardValidation: creditCardValidation, nameValidation: nameValidation, dateValidation: dateValidation, cvvValidation: cvvValidation}