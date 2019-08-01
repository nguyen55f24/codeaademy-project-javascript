let raceNumber = Math.floor(Math.random()*1000);
console.log(raceNumber);
let earlyRegistration = Math.floor(Math.random()*2);
earlyRegistration=earlyRegistration?true:false;
console.log(earlyRegistration);
let runnerAge  = Math.floor(Math.random()*126);
console.log(runnerAge);

//checking if runner didn't register early
if (earlyRegistration==false){
raceNumber += 1000;}
console.log(raceNumber);

//checking if: person is over 18 AND registered early
//else if: registered early OR is over 18
// else if: person is under 18 AND didn't register early
if (runnerAge>18 && earlyRegistration== true && raceNumber <1000){

  console.log(`Your race starts at 9:30 am and your race number is: ${raceNumber} and your age is: ${runnerAge} and your early Registration decison is ${earlyRegistration}.`);
} else if (earlyRegistration== true || runnerAge > 18){

  console.log(`Your race starts at 11:00 am and your race number is: ${raceNumber} and your age is: ${runnerAge} and your early Registration decison is ${earlyRegistration}.`);
} else if (runnerAge < 18 && earlyRegistration==false){

   console.log(`Your race starts at 12:30 pm and your race number is: ${raceNumber} and your age is: ${runnerAge} and your early Registration decison is ${earlyRegistration}.`);
 } else{
   console.log('Please see the registration desk to get your number');
 }
