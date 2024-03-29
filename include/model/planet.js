class Planet {
    constructor(name, description, modifiers) {
        this.__name = name;
        this.__description = description;
		
		this.__heroAttackModifiers = modifiers[0];
		this.__heroHealthModifiers = modifiers[1];
		
		this.__villainAttackModifiers = modifiers[2];
		this.__villainHealthModifiers = modifiers[3];
    }

	getName() {
		return this.__name;
	}
	
	getDescription() {
		return this.__description;
	}
	
	getHeroAttack() {
		return this.__heroAttackModifiers;
	}
	
	getHeroHealth() {
		return this.__heroHealthModifiers;
	}
	
	getVillainAttack() {
		return this.__villainAttackModifiers;
	}
	
	getVillainHealth() {
		return this.__villainHealthModifiers;
	}
		
	
}