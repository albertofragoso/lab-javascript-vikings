// Soldier
const Soldier = function(health, strength) {
  this.health = health
  this.strength = strength
  this.attack = () => this.strength
  this.receiveDamage = (damage) => { this.health -= damage }
}

// Viking
const Viking = function(name, health, strength) {
Soldier.call(this, health, strength) //attack
this.name = name
this.receiveDamage = damage => {
    this.health -= damage 
    if(this.health > 0) return `${this.name} has received ${damage} points of damage`
    else return `${this.name} has died in act of combat`
    
  }
this.battleCry = () => `Odin Owns You All!`
}
//Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype = Soldier.prototype

// Saxon
const Saxon = function(health, strength){
  Soldier.call(this, health, strength)
  this.receiveDamage = (damage) => {
    this.health -= damage 
    if(this.health > 0) return `A Saxon has received ${damage} points of damage`
    else return `A Saxon has died in combat`
    
  }
}
//Saxon.prototype = Object.create(Soldier.prototype)
Saxon.prototype = Soldier.prototype

// War
const War = function() {
  this.vikingArmy = []
  this.saxonArmy = []

  this.addViking = viking => { this.vikingArmy.push(viking) }
  this.addSaxon = saxon => { this.saxonArmy.push(saxon) }
  this.randomCharacter = army => Math.floor(Math.random() * army.length)
  this.vikingAttack = () => {
    const randomSaxon = this.randomCharacter(this.saxonArmy)
    const randomViking = this.randomCharacter(this.vikingArmy)

    const saxon = this.saxonArmy[randomSaxon]
    const result = saxon.receiveDamage(this.vikingArmy[randomViking].strength)
    this.saxonArmy = this.saxonArmy.filter(el => el.health > 0)
    return result
  }
  this.saxonAttack = () => {
    const randomViking = this.randomCharacter(this.vikingArmy)
    const randomSaxon = this.randomCharacter(this.saxonArmy)

    const viking = this.vikingArmy[randomViking]
    const result = viking.receiveDamage(this.saxonArmy[randomSaxon].strength)
    this.vikingArmy = this.vikingArmy.filter(el => el.health > 0)
    return result
  }
  this.showStatus = () => {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) return "Vikings and Saxons are still in the thick of battle."
    else if (this.vikingArmy.length > 0) return "Vikings have won the war of the century!" 
    else return "Saxons have fought for their lives and survive another day..."
  }
}
// const saul = Viking('Saul')
// const alberto = Saxon('Alberto')

// const battleOne = new War()
// battleOne.addViking(saul)
// battleOne.addSaxon(alberto)


 