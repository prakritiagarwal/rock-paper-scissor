const hands = ['rock' , 'paper', 'scissors'];
function getHand(){
    let randomNumberBetween0And3 = parseInt(Math.random()*10)%3;
    return hands[randomNumberBetween0And3];  
}

let player1=
{ 
    name: 'player1', getHand: function() { return getHand(); }
} 

let player2=    
{    
    name: 'player2', getHand: function() { return getHand(); }
}

function playRound(player1, player2)
{
    let player1Hand = player1.getHand();
    let player2Hand = player2.getHand();
    console.log("Hands played  player1 "  + player1Hand + ' player2 ' + player2Hand);
    
    if(player1Hand == player2Hand)
    {
        console.log('Its a tie');
    }
    else if(player1Hand == 'rock' && player2Hand == 'scissors')
    {
        console.log(player1.name + ' wins')    
        return player1;   
    }
    else if(player1Hand == 'scissors' && player2Hand == 'rock')
    {
        console.log(player2.name + ' wins')    
        return player2;  
    }
    else if(player1Hand == 'rock' && player2Hand == 'paper')
    {
        console.log(player2.name + ' wins')    
        return player2;  
    }
    else if(player1Hand == 'paper' && player2Hand == 'rock')
    {
        console.log(player1.name + ' wins')    
        return player1;   
    }
    else if(player1Hand == 'paper' && player2Hand == 'scissors')
    {
        console.log(player2.name + ' wins')    
        return player2;   
    }
    else if(player1Hand == 'scissors' && player2Hand == 'paper')
    {
        console.log(player1.name + ' wins')    
        return player1;   
    }
}

function playGame(player1, player2, playUntil)
{
    let player1WinCount = 0;
    let player2WinCount = 0;
    let round = 1;
    do
    {
        console.log('Begin Round ' + round +  ' Player1 wins ' + player1WinCount + ' Player2 wins ' + player2WinCount);
        let winner = playRound(player1, player2);
        if(winner)
        {            
            if(winner.name == player1.name)
                player1WinCount++;
            else
                player2WinCount++;
        }
        round++;
    } while(player1WinCount < playUntil && player2WinCount < playUntil);

    if(player1WinCount == playUntil)
        console.log('Final winner is ' + player1.name )
    else
        console.log('Final winner is ' + player2.name )

}

playGame(player1, player2, 5);