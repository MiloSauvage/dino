console.log("starting");

const canvas = document.getElementById('canvas');

let loopGame = false;

let dino;

function start(){
    loopGame = true

    spawn()
    console.log("before");
    
    if (loopGame === true){
        game();
    }

    function game(){
        let randomTime = 3000;
        setTimeout(() =>{
            update();
            game();
        }, randomTime);


    }

}


function update(){
    console.log("start OK");
    console.log("moving");

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            translateFunction(); 
        }})


}
function translateFunction() {
    dino.style.transform="translateX(100px)";
    dino.style.transition=" all 2s" 
    }
    


// methode spawn
function spawn(){

    dino = new Image();
    dino.src = "./pictures/dino.png";
    // ajoute la class .dino du css
    dino.classList.add('dino');

    // conne les coordpnner du spawn de l'immage
    dino.style.top = 780 + 'px';
    dino.style.left = 200 + 'px';

    // calcul de la taille de l'image
    let x, y;
    x = 200
    y = 200;

    // insersion des tailles dans la css
    
    dino.style.setProperty('--x', `${ x }px`);
    dino.style.setProperty('--y', `${ y }px`);

    // insertion de l'image dans le canvas
    canvas.appendChild(dino);
    console.log("entity spawned");
}



   
