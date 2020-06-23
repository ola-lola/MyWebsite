///////// KLASY I OBIEKTY ////////////

/* https://www.freecodecamp.org/news/how-javascript-implements-oop/ */
/* https://www.w3schools.com/Js/tryit.asp?filename=tryjs_classes_init */
/* https://developer.mozilla.org/pl/docs/Web/JavaScript/Wprowadzenie_do_programowania_obiektowego_w_jezyku_JavaScript */


///////// ENKAPSULACJA ////////////

class Person
{
	#_name;
	
	constructor(name)
	{
		this.#_name = name;
	}
	
	greet()
	{
		return `Hello ` +  this.#_name;
	}
}

const hello = new Person('Basia');
hello._name;
hello.greet();
hello._name='Janek';
hello.greet();

/* https://www.youtube.com/watch?v=DiwY3K3pvp8 */
/* http://blog.kamil-galek.pl/?p=382 */



///////// DZIEDZICZENIE ////////////

//Tworzenie funkcji Parent
function Parent (firstName) {
    this.firstName = firstName;
}

//dodanie funkcji do prototypu
Parent.prototype.getFirstName = function () {
    return this.firstName;
}

//funkcja Child która pożycza konstruktor od Parent
function Child (firstName, lastName) {
  Parent.call(this, firstName); // <----- // call parent constructor (jest to kopia, nie referencja)
  this.lastName = lastName;
}

//przypisanie prototypowi Child obiektu prototypu Parent
Child.prototype = Object.create(Parent.prototype);

//tworzenie nowego obiektu Child
var child = new Child('Henryk', 'Malinowski');

document.getElementById('result1').innerHTML = child.firstName;
document.getElementById('result2').innerHTML = child.lastName;
document.getElementById('result3').innerHTML = typeof child.getFirstName;

