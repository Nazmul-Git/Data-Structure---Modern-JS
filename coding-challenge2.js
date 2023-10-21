// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game={
    team1: 'Brazil',
    team2: 'Argentina',
    players:[
        ['Alison', 'Marquinho', 'Danilo', 'Coutinho', 'Neymar Jr', 'Jesus'],

        ['Martinez', 'Dimaria', 'Leo Messi', 'Martinez', 'De Poul']
    ],
    score: '4:2',
    scored: ['Neymar Jr','Leo Messi','Dimaria','Coutinho' ],
    date: 'nov 9th, 2018',
    odds:{
        team1:9.33,
        x:3.25,
        team2:6.5
    }
};

const {scored,odds}=game;
for(const [idx,scorer] of scored.entries()){
    console.log(`${idx+1} : ${scorer}`);
};

let avg=0;
for(let odd of Object.values(odds)){
    console.log(odd);
    avg+=odd;
    console.log(avg);
};

// 3
for(const [team, odds] of Object.entries(game.odds)){
    const str= team==='x' ? 'draw' :`'victory' ${game[team]}`;
    console.log(`odd of ${str} ${odds}`);
}


