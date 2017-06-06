function Cat (name, species, age, sex){
    this.name = name || 'Garfield';
    this.species = species || 'Panther Leo';
    this.age = age || 0;
    this.sex = sex || "female";
    this.numOfLegs = 4;
    this.tailType = species === "Spanky" || species === "Bobtail"? "short" : "long";
    this.visbreast = 0;
}

Cat.prototype.roars = function(){
    var sound = this.age < 6? "growl-growl-growl" : "Roar! Roar!";
    return sound;
}

Cat.prototype.pregnant = function(weeks){
    if (this.sex === "female" && this.age >= 12){
        this.visbreast = weeks;
        return weeks;
    }
    return "too young to be pregnant";
}
