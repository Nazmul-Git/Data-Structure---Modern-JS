/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "GOAL"],
  [36, "SUBSTITUTION"],
  [47, "GOAL"],
  [61, "SUBSTITUTION"],
  [64, "YELLOW CARD"],
  [69, "RED CARD"],
  [70, "SUBSTITUTION"],
  [72, "SUBSTITUTION"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "YELLOW CARD"],
]);
const events=[...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);


const time=[...gameEvents.keys()];
const lastTime=time.pop();
console.log(time);
console.log(lastTime); //92

console.log(`An event happened, on average, every ${lastTime/gameEvents.size} minutes`);

for(const  [minuit, event] of gameEvents){
    const half= minuit<45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${minuit}: ${event}`);
}