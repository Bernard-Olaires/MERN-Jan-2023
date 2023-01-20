

const nums = [23,56,19,20,9,20,78,55,32,42,8,12,80]

// nums.forEach((num) => console.log(num))


const nbaAthletes = [
    {name:'Kevin Durant', league:'NBA', position: 'Small Forward', active:true},
    {name:'Charles Barkley', league:'NBA',position: 'Power Forward', active:false},
    {name:'Stephen Curry', league:'NBA',  position: 'Point Guard', active:true },
    {name:'Shaq', league:'NBA',  position: 'Point Guard', active:false },
    {name:'Damian Lillard', league:'NBA',  position: 'Point Guard', active:true },
    {name:'Mike James', league:'Euro',  position: 'Shooting Guard', active:true },
]
// nbaAthletes.forEach(function (athlete) {  
//     console.log(athlete);
// })
// nbaAthletes.map((athlete) => console.log(athlete.name))

// let activePlayers = nbaAthletes.filter(function(athlete){
//     if(athlete.active){
//         return true
//     }
// })
// console.log(activePlayers);

// let activePlayersArrow = nbaAthletes.filter(athlete => athlete.position==='Point Guard' && athlete.active)
// console.log(activePlayersArrow);


let athleteNames = nbaAthletes.map(athlete => athlete.name)
console.log(athleteNames);



