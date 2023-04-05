console.log("starting");

let container = document.querySelector(".container");
let dino = document.querySelector(".dino");
let obstacle = document.querySelector(".obstacle");
let cloud = document.querySelector(".cloud");
let score = document.querySelector(".score");
let gameOver = document.querySelector(".gameOver");

let scorePlayer = 0;
let interval = null;

// monter le score function
function scoreCounter(){
    scorePlayer++;
    score.innerHTML = `Score <b>${scorePlayer}</b>`;

}


// start 
window.addEventListener("keydown", (start) => {
    // console.log(start);
    if (start.code == "Space"){
        gameOver.style.display = "none";
        obstacle.classList.add("obstacleActive");
        cloud.classList.add("cloudActive");

        let scorePlayer = 0;
         interval = setInterval(scoreCounter, 300);
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
    let dinoBottom = getComputedStyle(dino).getPropertyValue("bottom");
    // console.log("dino : ",dinoBottom);

    let obstacleLeft = getComputedStyle(obstacle).getPropertyValue("left");
    // console.log("obstacle : ",obstacleLeft);

    if (dinoBottom <= 90 && obstacleLeft >= 20 && obstacleLeft >= 145){
        console.log("died")

    } 

}, 10);

