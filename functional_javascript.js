const calculateDamage = (attackPower, defense) => attackPower - defense;
const dealDamage = (attacker, defender) => 
{
    const damage = calculateDamage(attacker.attackPower, defender.defense);
    defender.health -= damage;
    console.log(`${attacker.name} deals ${damage} damage to ${defender.name}!`);
};

// Example usage:
const player2 = { name: "Charlie", attackPower: 15 };
const enemy2 = { name: "Dave", defense: 5, health: 70 };
dealDamage(player2, enemy2); // Charlie attacks Dave functionally!
