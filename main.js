const playBoard = document.querySelector(".play-board");
let foodX, foodY;
let snakeX=10
let snakeY=20
let velocityX = 0, velocityY = 0;
let snakeBody =[]
const changefoodposition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
	
}
const playgame =(e) => {
    if(e.key === "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    } else if(e.key === "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    } else if(e.key === "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
    } else if(e.key === "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    }
	 else if(e.key === "Enter") {
        velocityX = 0;
        velocityY = 0;
    }
	
}
const initgame=()=>{
	 let htmlmarkup=`<div class="food" style="grid-area:${foodX}/${foodY}"></div>`
	  if(snakeX===foodX&&snakeY===foodY){	  
		  changefoodposition()
		 snakeBody.push([foodX,foodY])
		  console.log(snakeBody)
	 }	  
	 for(let i=snakeBody.length-1;i>0;i--){
		 snakeBody[i]=snakeBody[i-1]
	 }
	 snakeBody[0]=[snakeX,snakeY]
	  snakeX+=velocityX
	 snakeY+=velocityY
	    for(let i=0; i<snakeBody.length;i++){
		 htmlmarkup=htmlmarkup+`<div class="head" style="grid-area:${snakeBody[i][1]}/${snakeBody[i][0]}"></div>`
		} 		 
	    playBoard.innerHTML=htmlmarkup
	   }
	  changefoodposition()
	setInterval(initgame,125)
	 document.addEventListener("keydown",playgame)
	console.log(foodY,snakeY)