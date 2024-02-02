// Using RxJS library for FRP
import { BehaviorSubject } from "rxjs";

const playerHealth$ = new BehaviorSubject(100); // Stream of player health
const enemyAttacks$ = new BehaviorSubject(false); // Stream of enemy attacks

enemyAttacks$.subscribe(() => {
  playerHealth$.next(playerHealth$.value - 10); // React to attacks by reducing health
});

// Example usage:
enemyAttacks$.next(true); // Simulate an enemy attack!
playerHealth$.subscribe(health => console.log(`Player health: ${health}`)); // Observe health updates
