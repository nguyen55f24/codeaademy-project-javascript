var yourChoice = prompt('decide which you choose:');
var computerChoice=Math.random();
if(Math.random()<0.34){
computerChoice='rock';
}
else if(Math.random()<=0.67&&Math.random()>=0.34){
computerChoice='paper';
}
else {
computerChoice='scissors';
}
console.log(yourChoice);
console.log(computerChoice);

if (yourChoice===computerChoice){
console.log('Equal. let try one more!!');
}
 else if(yourChoice==="rock"){
        if(computerChoice==="scissors"){
            console.log( "You wins!!!");
        }
        else{
         console.log( "Computer wins.");
        }
    }

 else if(yourChoice==="paper"){
        if(computerChoice==="rock"){
            console.log( "You wins!!!");
        }
        else{
         console.log( "Computer wins.");
        }
    }

 else if(yourChoice==="scissors"){
        if(computerChoice==="paper"){
            console.log( "You wins!!!");
        }
        else{
         console.log( "Computer wins.");
        }
    }
