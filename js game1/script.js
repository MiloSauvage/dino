console.log("starting");

const canvas = document.getElementById('canvas');

let loopGame = false;

function start(){
    loopGame = true

    spawn()

    if (loopGame == true){
        update()
    }

}






function update(){
    console.log("start OK");
    move();
}







// methode
function spawn(){
    console.log("entity spawned");

    let dino = new Image();
    dino.scr = "./pictures/dino.png";
    dino.classList.add('dino');


    canvas.appendChild(dino);
}


function move(){
    console.log("moving");
}