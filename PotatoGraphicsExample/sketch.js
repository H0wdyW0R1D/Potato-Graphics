potato = new Potato();
potato.fill("white");
potato.rect(0,0,400,400);
potato.fill("green");
potato.triangle(200,50,100,350,300,350);
potato.fill("brown");
potato.rect(180,350,40,50);
for (let i = 0; i < 60; i++) {
    let x = Math.random() * 100;
    let y = Math.random() * 300;
    if (y > -3 * x + 300) {
        // potato.fill("red");
    } else {
        // potato.fill("blue");
        y = -y + 300;
        x += 100;
    }
    x += 100;
    y += 50;
    switch (Math.floor(Math.random() * 6)) {
        case 0:
            potato.fill("red");
            break;
        case 1:
            potato.fill("orange");
            break;
        case 2:
            potato.fill("amber");
            break;
        case 3:
            potato.fill("lime");
            break;
        case 4:
            potato.fill("blue");
            break;
        case 5:
            potato.fill("purple");
            break;
        default:
            potato.fill("pink");
            break;
    }
    potato.circle(x,y,10);
}
potato.fill("yellow");
let star = [potato.vector(0,50),potato.vector(16.832,23.167),potato.vector(47.553,15.451),potato.vector(27.234,-8.849),potato.vector(29.389,-40.451),potato.vector(0,-28.636),potato.vector(-29.389,-40.451),potato.vector(-27.234,-8,849),potato.vector(-47.553,15.451),potato.vector(-16.832,23.167)];
for (let i in star) {
    star[i].y *= -1;
    star[i].x += 200;
    star[i].y += 50;
}
potato.shape(star);