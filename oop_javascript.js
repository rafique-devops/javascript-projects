class Player {
    constructor(name, health) 
    {
        this.name = name;
        this.health = health;
    }

    attack(enemy) 
    {
        enemy.health -= 5; // Player attacks and reduces enemy health
        console.log(`${this.name} attacks ${enemy.name} for 5 damage!`);
    }
}
const player1 = new Player("Alice", 100);
const enemy1 = new Player("Bob", 80);
  player1.attack(enemy1); // Alice attacks Bob!
