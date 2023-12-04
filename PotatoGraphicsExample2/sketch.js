potato = new Potato();

// init variables
let paddle = {
    width: 5,
    height: 50,
    speed: 200
}
let ball,p1,p2,isPlay;

let computerPlay = false;

// set scores to 0 
p1score = 0;
p2score = 0;

let c = "white"; // color of paddles, score, and ball;
resetGame();

function setup() {
    // general setup
    potato.resizeCanvas(400,200);
    potato.fontSize(30);
    potato.framesPerSecond(60);
    // console.log(ball.x);
}

function draw() {
    potato.fill("black");
    potato.rect(0,0,potato.canvas.width,potato.canvas.height);
    potato.fill(c);

    if (isPlay) {
        doGame();
    } else if (potato.keyIsDown(32)) {
        isPlay = true;
    }
    
    // render paddles
    potato.rect(paddle.width * 2,p1 - paddle.height / 2,paddle.width,paddle.height);
    potato.rect(400 - paddle.width * 3,p2 - paddle.height / 2,paddle.width,paddle.height);

    // render ball
    potato.circle(ball.x, ball.y, paddle.width);

    // scores
    potato.text(p1score,100,30);
    potato.text(p2score,300,30);
}

function resetGame() {
    ball = {
        x: 200,
        y: 100,
        xv: 1,
        yv: 1,
        speed: 200
    };
    p1 = 100;
    p2 = 100;
    isPlay = false;
}

function doGame() {
    // input
    let amount = paddle.speed * potato.deltaTime / 1000;
    
    // p1
    if (potato.keyIsDown(87)) {
        p1 -= amount;
    }
    if (potato.keyIsDown(83)) {
        p1 += amount;
    }

    // p2
    if (computerPlay) {
        if (p2 < ball.y && ball.xv > 0) {
            p2 += amount;
        }
        if (p2 > ball.y && ball.xv > 0) {
            p2 -= amount;
        }
    } else {
        if (potato.keyIsDown(73)) {
            p2 -= amount;
        }
        if (potato.keyIsDown(75)) {
            p2 += amount;
        }
    }

    // keep paddles in bounds
    if (p1 > 200 - paddle.height / 2) {
        p1 = 200 - paddle.height / 2;
    }
    if (p1 < paddle.height / 2) {
        p1 = paddle.height / 2;
    }
    if (p2 > 200 - paddle.height / 2) {
        p2 = 200 - paddle.height / 2;
    }
    if (p2 < paddle.height / 2) {
        p2 = paddle.height / 2;
    }

    ball.x += ball.xv * ball.speed * potato.deltaTime / 1000;
    ball.y += ball.yv * ball.speed * potato.deltaTime / 1000;

    // collisions with walls
    if (ball.y > 200 - paddle.width / 2) {
        ball.y -= (ball.y - (200 - paddle.width / 2)) * 2;
        ball.yv = -ball.yv;
    }
    if (ball.y < 0) {
        ball.y -= ball.y * 2;
        ball.yv = -ball.yv;
    }

    // collisions with paddles
    if (ball.x > 400 - paddle.width * 3.5) {
        if (ball.y > p2 - paddle.height / 2 && ball.y < p2 + paddle.height / 2) {
            ball.x -= (ball.x - (400 - paddle.width * 3.5)) * 2;
            ball.xv = -ball.xv;
        } else {
            isPlay = false;
            p1score++;
            resetGame();
        }
    }
    if (ball.x < paddle.width * 3.5) {
        if (ball.y > p1 - paddle.height / 2 && ball.y < p1 + paddle.height / 2) {
            ball.x -= (ball.x - paddle.width * 3.5) * 2;
            ball.xv = -ball.xv;
        } else {
            isPlay = false;
            resetGame();
            p2score++;
        }
    }
}