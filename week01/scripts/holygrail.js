// Select the HTML element to manipulate
const today1 = document.querySelector('#today1');
const today2 = document.querySelector('#today2');
const message = document.querySelector('aside');

// Varibles for activity use
document.querySelector('aside').innerHTML = 'Welcome to <em>our</em> neighborhood!';
document.querySelector('#temp').value = getCelsius(33);
let citynames = ["New York","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];
let volume = 409;
let quantity = document.querySelector('#q').value;
let filterC = citynames.filter(city => city.charAt(0) === 'C');
const divs = document.querySelectorAll('div');
function getCelsius(fahrenheit) {
	return (fahrenheit - 32) * (5/9);
}

// Set up the Date format object parameter for toLocaleDateString method.
const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};

// Question #4
today1.innerHTML = new Date().toLocaleDateString("en-UK", options);
// Question #5
today2.innerHTML = '<strong>Volume</strong>: ${volume} + " liters'
// Question #6

// Question #7

// Question #8

// Question #9

// Question #10
