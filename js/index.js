window.addEventListener('load', init)
let stage;
let myCircleExample;
let circles = [];

function init() {
    let canvas = document.querySelector('.myCanvas');
    stage = new createjs.Stage(canvas);

    createCircle(50, 100, 30, "red")
    createCircle(150, 100, 40, "blue")
    createCircle(250, 100, 50, "green")
    createCircle(250, 100, 50, "purple")

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", () => {
        animate();
        stage.update()
    })
}

function animate() {
    for (let index = 0; index < circles.length; index += 1) {
        let currentCircle = circles[index];
        console.log(currentCircle.monNom);
        currentCircle.y += 1
        if (currentCircle.y > 450 + currentCircle.myRadius) {
            currentCircle.y = 0;
        }
    }
}

function createCircle(myX, myY, myRadius, myColor) {
    let circle = new createjs.Shape();
    circle.graphics.beginFill(myColor).drawCircle(0, 0, myRadius);
    circle.myRadius = myRadius;
    circle.x = myX;
    circle.y = myY;
    circle.monNom = 'cercle de couleur ' + myColor;
    stage.addChild(circle);

    circle.addEventListener('click', (event) => {
        console.log(event.currentTarget.monNom);
    })

    circles.push(circle)

    return circle;
}