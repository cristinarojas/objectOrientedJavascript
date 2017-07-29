(function() {

	/* CREATING OBJECT */
	var customer = { // object
		// Properties
		name: "Cristina",
		// Methods
		speak: function() {
			return 'My name is ' + this.name;
		},

		// Another object inside object
		address: {
			street: '123 main St',
			city: 'Burbank',
			state: 'CA'
		}
	};

	// Executing the method
	console.log(customer.speak());
	// Executing the properties
	console.log(customer.name + " Lives at " + customer.address.street);
	// Add more properties 
	customer.address.country = 'US';

	console.log('Country: ' + customer.address.country);

	
	// COSTRUCTOR FUNCTION
	/* CREATING MULTIPLES OBJECTS OF THE SAME TYPE */
	function Person(name, street) {
		this.name = name;
		this.street = street;

		this.info = function() {
			return  'My name is ' + this.name + 'I live at ' + this. street;
		}
	}

	// Instantiating a object
	var cristinaRojas = new Person('Cristina Rojas', 'Lankershim');
	console.log(cristinaRojas.info());
	console.log('Cristina Rojas is instance of Person ' + (cristinaRojas instanceof Person));

	// Changen the cristinaRojas function values
	function changeName(person) {
		person.name = 'Nayeli Rojas';
	}

	changeName(cristinaRojas);
	console.log('Cristina Rojas became ' + cristinaRojas.name);

















})();