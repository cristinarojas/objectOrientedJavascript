(function(){
	function person(name, age, nationality, starWork) { // Class
		// properties 
		this.name = name;
		this.age = age;
		this.nationality = nationality;
		this.starWork = starWork;

		console.log('starWork', this.startWork);

		// Method
		this.vacations = function() {
			return 12 - this.starWork;
		};
 	}

 	var newPerson = new person('Cristina', 29, 'Mexican', 3);
 	console.log(newPerson.vacations());

})();
