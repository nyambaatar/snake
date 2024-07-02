const head  = document.getElementById("head"); 
let positionLeft = 200; 

function goRight () {
    positionLeft += 20; 
    if (positionLeft > 780) {
        positionLeft = 0;
    }
    render ();

}

function render () {
    head.style.left = `${positionLeft}px`;
    head.style.display = "block";
}

function gameloop () {
    goRight();
}
setInterval(gameloop, 1000);
