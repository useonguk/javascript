document.addEventListener('DOMContentLoaded', () =>{
    const gessNum = document.querySelector('.guessField');
    const sub = document.querySelector('.guessSubmit');
    let num = [10,20]
    sub.addEventListener('click', startGame);
    const startGame = () =>{
        const randomNumber = Math.floor(Math.random());
        console.log(num)
        console.log(randomNumber);
    }
})

