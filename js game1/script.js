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


// methode spawn
function spawn(){
    console.log("entity spawned");

    let dino = new Image();
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
}


function move(){
    console.log("moving");

    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        if (event.code === 'Space') {
          console.log("saut");
          dino.style.top = 500 + 'px';
        }})
}