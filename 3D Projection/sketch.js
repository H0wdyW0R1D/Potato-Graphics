p = new Potato();
let cam = {
    pos: p.vector(0,0,-100),
    rot: p.vector(0,0,0)
};

let boxesToRender;
function setup() {
    p.resizeCanvas(window.innerWidth, window.innerHeight);

    // for (let i = 0; i < 8; i++) {
    //     for (let j = 0; j < 8; j++) {
    //         boxesToRender.push([i * 10, Math.random() * 10, j * 10, 10, 10, 10]);
    //     }
    // }
}

function draw() {
    
    p.resizeCanvas(window.innerWidth, window.innerHeight);
    // background
    p.fill("white");
    p.rect(0,0,p.canvas.width,p.canvas.height);

    doInput();

    boxesToRender = [[-5,-5,-5,10,10,10],[-25,-5,-5,10,10,10], [10,20,-20,30,20,10]];
    
    renderBoxes(boxesToRender);
}

function doInput() {
    // input
    let amount = p.deltaTime / 1000 * 30;
    if (p.keyIsDown(87)) {
        cam.pos.z += Math.cos(cam.rot.y) * amount;
        cam.pos.x += Math.sin(cam.rot.y) * amount;
    }
    if (p.keyIsDown(83)) {
        cam.pos.z -= Math.cos(cam.rot.y) * amount;
        cam.pos.x -= Math.sin(cam.rot.y) * amount;
    }
    if (p.keyIsDown(68)) {
        cam.pos.z += Math.cos(cam.rot.y + 0.5 * Math.PI) * amount;
        cam.pos.x += Math.sin(cam.rot.y + 0.5 * Math.PI) * amount;
    }
    if (p.keyIsDown(65)) {
        cam.pos.z -= Math.cos(cam.rot.y + 0.5 * Math.PI) * amount;
        cam.pos.x -= Math.sin(cam.rot.y + 0.5 * Math.PI) * amount;
    }
    if (p.keyIsDown(69)) {
        cam.pos.y -= amount;
    }
    if (p.keyIsDown(67)) {
        cam.pos.y += amount;
    }
    
    amount = p.deltaTime / 1000 * 2; // radians per second
    if (p.keyIsDown(39)) {
        cam.rot.y += amount;
    }
    if (p.keyIsDown(37)) {
        cam.rot.y -= amount;
    }
    if (p.keyIsDown(38)) {
        cam.rot.x += amount;
    }
    if (p.keyIsDown(40)) {
        cam.rot.x -= amount;
    }
}