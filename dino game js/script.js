console.log("starting");

let container = document.querySelector(".container");
let dino = document.querySelector(".dino");
let obstacle = document.querySelector(".obstacle");
let cloud = document.querySelector(".cloud");
let cloud1 = document.querySelector(".cloud1");
let score = document.querySelector(".score");
let gameOver = document.querySelector(".gameOver");

let scorePlayer = 0;
let interval = null;
let isPlaying = false;

// monter le score function
function scoreCounter(){
    scorePlayer++;
    score.innerHTML = `Score <b>${scorePlayer}</b>`;

}


// start 
window.addEventListener("keydown", (start) => {
    // console.log(start);
    if (start.code == "Space" && isPlaying == false){
        gameOver.style.display = "none";
        obstacle.classList.add("obstacleActive");
        cloud.classList.add("cloudActive");
        cloud1.classList.add("cloudActive1");

        scorePlayer = 0;
        isPlaying = true;

        interval = setInterval(scoreCounter, 700);
    }
})


//jump
window.addEventListener("keydown", (e)=>{
    if (e.code == "ArrowUp"){
        console.log("jump")
        if (dino.classList != "dinoActive"){
            dino.classList.add("dinoActive");
            setTimeout(()=>{
                dino.classList.remove("dinoActive");
            }, 600);
        }
    }
});

// game over

let result = setInterval(()=>{
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    // console.log("dino : ",dinoBottom);

    let obstacleLeft = parseInt(getComputedStyle(obstacle).getPropertyValue("left"));
    // console.log("obstacle : ",obstacleLeft);

    if (dinoBottom <= 80 && obstacleLeft >= 20 && obstacleLeft <= 100){
        console.log("game over")

        gameOver.style.display ="block";
        obstacle.classList.remove("obstacleActive");
        cloud.classList.remove("cloudActive");
        cloud1.classList.remove("cloudActive1");
        scorePlayer = 0;

        isPlaying = false;
        clearInterval(interval);

    } 

}, 10);

