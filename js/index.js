window.addEventListener('load', init)
let stage;
let myCircleExample;

function init() {
    let canvas = document.querySelector('.myCanvas');
    stage = new createjs.Stage(canvas);

    createCircle(50, 100, 30, "red")
    createCircle(150, 100, 40, "blue")
    createCircle(250, 100, 50, "green")

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", () => {
        stage.update()
    })
}

function createCircle(myX, myY, myRadius, myColor) {
    let circle = new createjs.Shape();
    circle.graphics.beginFill(myColor).drawCircle(0, 0, myRadius);
    circle.x = myX;
    circle.y = myY;
    circle.monNom = 'cercle de couleur ' + myColor;
    stage.addChild(circle);

    circle.addEventListener('click', (event) => {
        console.log(event.currentTarget.monNom);
    })

    return circle;
}