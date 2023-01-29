//Task #1 - Define a Pokemon Class
class Pokemon {
constructor(name, attack, defense, health, type) {
	this.name = name; 
	this.attack = attack;
	this.defense = defense;
	this.health = health;
	window.startHealth = this.health;
	this.type = type;
}

//Task #2 - takeDamage(): takes a number as an argument and reduces the health of the Pokemon by that number
	takeDamage(damages) {
		this.health = this.health - damages;
		if (this.health > 0) {return this.health;}
		else {return this.health = 0;}
	}

//Task #3 - attackOpponent(): takes a Pokemon as an argument and reduces the given pokemon's health by the proper amount
	attackOpponent(opponent) {
		let damage = this.attack - opponent.defense;
		if (damage >= 0) {opponent.takeDamage(damage);} 
		else {opponent.takeDamage(1);}
	}

//Task #4 - display(): displays Pokemon's name, type, and health
	display() {
		return(String(this.name.toUpperCase() + " (" + this.type.toUpperCase() + ") " + this.health + "/" + startHealth));
	}
}

// Don't edit this line!
module.exports = Pokemon;