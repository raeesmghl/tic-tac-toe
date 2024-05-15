





// lets play pop-up box


let beforeGameBox = document.querySelector('.before-game');
let letsPlayBtn = document.querySelector('#lets-play');

letsPlayBtn.addEventListener('click',()=>{
    beforeGameBox.style.scale = '0';
    // setTimeout(() => {
    //     beforeGameBox.style.display = 'none';
    //     console.log('display is none')
    //     console.log(player1Name.value || 'player 1');
    //     console.log(player2Name.value || 'player 2');
    // }, 1000);  
});

 



// players names

let player1Name = document.querySelector('#player-1-name');
let player2Name = document.querySelector('#player-2-name');







// main game



let boxes = document.querySelectorAll('.box');


let turnX = true;

let countForDraw = 0;



boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        console.log(box.innerHTML)
        if(turnX){
            box.innerHTML = 'X';
            turnX = false;
        }else{
            box.innerHTML = 'O';
            turnX = true;
        }
        countForDraw++;
        
        if(countForDraw ==9){
            gameDraw()
        }

        box.disabled= true;
        checkWinner();

    })
})


// function that checks the winner every time user clicks on a button


function checkWinner() {



    let winPattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];


    for(let pattern of winPattern){
        let box1 = boxes[pattern[0]].innerHTML;
        let box2 = boxes[pattern[1]].innerHTML;
        let box3 = boxes[pattern[2]].innerHTML;




        if(box1!='' && box2!= '' && box3!=''){
            if(box1==box2 && box2 == box3){
                boxes.forEach((box)=>{
                    box.disabled = true;
                })

                setTimeout(winnerAnounced, 500,box1);
            }
        }
    }
}







let player1score = document.querySelector('.player-one-insites');

let player2score = document.querySelector('.player-two-insites');










function incrementScore(sign) {
    if(sign=='X'){
        let numbered = Number(player1score.innerHTML);
        numbered++;
        player1score.innerHTML = numbered;  
    }else{
        let numbered = Number(player2score.innerHTML);
        numbered++;
        player2score.innerHTML = numbered;
    }
    
}








let winnerBox = document.querySelector('.winner-box');
let winnerSign = document.querySelector('.winner-sign');
let winnerName = document.querySelector('.winner-name');

function winnerAnounced(winner) {
    winnerBox.style.scale = '1';

    if(winner == 'X'){
        winnerSign.innerHTML = 'X';
        winnerName.innerHTML = player1Name.value || 'player 1';
        incrementScore('X');
        turnX = true;
        
    }else{
        winnerSign.innerHTML = 'O';
        winnerName.innerHTML = player2Name.value || 'player 2'
        incrementScore('O');
        turnX = false
    }
}










let playAgain = document.querySelector('#play-again');



playAgain.addEventListener('click',()=>{

    winnerBox.style.scale = '0';


    countForDraw = 0;

    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerHTML = '';
    })
})











function gameDraw() {
    winnerBox.style.scale = 1;
    winnerSign.innerHTML = 'X/O';
    winnerName.innerHTML = 'nobody';
    countForDraw = 0;
}
