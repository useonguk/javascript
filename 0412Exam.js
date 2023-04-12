var numSquares = 6;  // 사각형 6개
var colors ; // rgb( r, g, b ) 스타일의 문자열 배열
var squares = document.getElementsByClassName('square');// class명이 squares인 6개 모두 선택하기 ( querySelectorAll)
var pickedColor; // 문제용 rgb 문자열
var colorProblem = document.getElementById('colorProblem');// id- colorProblem 선택하기 - 문제제시용
var messageDisplay = document.getElementById('message');// id- message 선택하기, 오답 및 정답 제시용
var h1 = document.querySelector("h1");// h1 선택하기
var resetButton = document.getElementById('reset');// id가 reset인 버튼 선택하기

document.addEventListener('DOMContentLoaded', () => {
    colors = generateRandomColors(numSquares); // 6개의 rgb 문자열
    var RanColect = Math.floor(Math.random() * (5));/*0~5 중 하나의 숫자 랜덤하게*/
    pickedColor = colors[ RanColect ]; // 6개 중 하나의 문자열 선택
   
    // colorProblem에 pickedColor 문자열 보여주기
    colorProblem.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        
        squares[i].addEventListener("click", function(){
            
            var clickedColor = this.style.background;
            console.log(clickedColor, pickedColor);
            if(clickedColor === pickedColor){
                // correct 란 메시지를 messageDisplay에 보여주기
                messageDisplay.textContent = "correct";
                // resetButton을 Play Again? 이란 메시지로 바꾸기
                resetButton.textContent = "Play Again?";
                console.log(clickedColor);
                changeColors(clickedColor); // 6개 상자 전부 같은 색으로 만들기
                h1.style.backgroundColor = clickedColor // h1의 배경색을 clickedColor로 바꾸기
            }	else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
         });
    }
}
)
resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares); // 6개의 rgb 문자열
    var ButtonColect = Math.floor(Math.random() * (5));/*0~5 중 하나의 숫자 랜덤하게*/
    //pickedColor = colors[ ButtonColect ]; // 6개 중 하나의 문자열 선택
    pickedColor = colors[ ButtonColect ];
	// colorProblem에 pickedColor 문자열 보여주기
    colorProblem.textContent = pickedColor;

	resetButton.textContent = "New Colors";
	// messageDisplay 내용 지우기
    // messageDisplay.parentNode.removeChild(messageDisplay);
    messageDisplay.textContent = '';

	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	
    h1.style.backgroundColor = "steelblue"; 
})


function changeColors(colorz){
    for(var i=0; i<squares.length;i++){
	// 6개 상자 모두 colorz 색으로 바꾸기
        squares[i].style.background = colorz;
    }
}


function generateRandomColors(genColor){
	// 빈배열 만들기
	var arr = [];
   // Math.floor 와 Math.random 함수 이용해 0~255 숫자 이용해서
   // r, g, b 값을 생성한후
   // rgb( 숫자, 숫자, 숫자 ) 형태의 문자열을 arr에 push - 6개의 문자열
    for(var i=0;i<6;i++){
        var r = Math.floor(Math.random() * (255));
        var g = Math.floor(Math.random() * (255));
        var b = Math.floor(Math.random() * (255));

        arr.push(`rgb(${r}, ${g}, ${b})`)
    }
	return arr;
}