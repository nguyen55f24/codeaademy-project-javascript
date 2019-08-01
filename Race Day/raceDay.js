let raceNumber = Math.floor(Math.random()*1000);
let earlyRegistration = Math.floor(Math.random()*2);
let runnerAge  = Math.floor(Math.random()*126);

//checking if runner didn't register early
if (earlyRegistration==false){
raceNumber += 1000;}//raceNumber is global

//checking if: person is over 18 AND registered early
//else if: registered early OR is over 18
// else if: person is under 18 AND didn't register early
if (runnerAge>18 && earlyRegistration== true && raceNumber <1000){
  let earlyRegistration = 'yes';
  console.log(`Your race starts at 9:30 am and your race number is: ${raceNumber} and your age is: ${runnerAge} and your early Registration decison is ${earlyRegistration}.`);
} else if (earlyRegistration== true || runnerAge > 18)// have a conflict here,only need runnerAge > 18 , despite earlyRegistration is true

{
  let earlyRegistration = 'yes';// have a conflict, if earlyRegistration is false and only runnerAge > 18 , condition is satisfied
  //so i should delete above line
  console.log(`Your race starts at 11:00 am and your race number is: ${raceNumber} and your age is: ${runnerAge} and your early Registration decison is ${earlyRegistration}.`);
} else if (runnerAge < 18 && earlyRegistration==false){
   let earlyRegistration = 'no';
   console.log(`Your race starts at 12:30 pm and your race number is: ${raceNumber} and your age is: ${runnerAge} and your early Registration decison is ${earlyRegistration}.`);
 } else{
   console.log('Please see the registration desk to get your number');
 }
