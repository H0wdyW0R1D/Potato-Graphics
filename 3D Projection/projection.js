function projectPoint(point,cam) {
    // https://en.wikipedia.org/wiki/3D_projection
    let ds = p.vector(0,0,300);

    let x = point.x - cam.pos.x;
    let y = point.y - cam.pos.y;
    let z = point.z - cam.pos.z;
    let sx = Math.sin(cam.rot.x);
    let sy = Math.sin(cam.rot.y);
    let sz = Math.sin(cam.rot.z);
    let cx = Math.cos(cam.rot.x);
    let cy = Math.cos(cam.rot.y);
    let cz = Math.cos(cam.rot.z);
    
    let dx = cy*(sz*y + cz*x) - (sy * z);
    let dy = sx*(cy*z + sy*(sz*y + cz*x)) + cx*(cz*y - sz*x);
    let dz = cx*(cy*z + sy*(sz*y + cz*x)) - sx*(cz*y - sz*x);
    let d = p.vector(dx,dy,dz);
    
    if (dz < 0) {
        // this point is behind the camera
        return false;
    }

    let projection = p.vector((ds.z/d.z) * d.x + ds.x + p.canvas.width / 2, (ds.z/d.z) * d.y + ds.y + p.canvas.height / 2);

    if (projection.x < -p.canvas.width / 2 || projection.x > p.canvas.width / 2 || projection.y < -p.canvas.height / 2 || projection.y > p.canvas.height / 2) {
        // off screen
        // return false;
    }

    return projection; // a 2d vector if on screen, otherwise, is just false
}

function renderBoxes(boxesToRender) {
    let distances = [];
    // get the distances to the boxes
    for (let i in boxesToRender) {
        let x = boxesToRender[i][0] + boxesToRender[i][3] / 2;
        let y = boxesToRender[i][1] + boxesToRender[i][4] / 2;
        let z = boxesToRender[i][2] + boxesToRender[i][5] / 2;
        distances.push(Math.sqrt((cam.pos.x - x) * (cam.pos.x - x) + (cam.pos.y - y) * (cam.pos.y - y) + (cam.pos.z - z) * (cam.pos.z - z)));
    }
    // sort boxes by distance
    boxesToRender = sortArrays(distances, boxesToRender);
    for (let i = boxesToRender.length - 1; i >= 0; i--) {
        let x = boxesToRender[i][0];
        let y = boxesToRender[i][1];
        let z = boxesToRender[i][2];
        let l = boxesToRender[i][3];
        let h = boxesToRender[i][4];
        let w = boxesToRender[i][5];
        box(x,y,z,l,w,h);
    }
}

function box(x,y,z,l,h,w) {
    let colors = ["red", "orange", "yellow", "green", "blue", "magenta"];
    let points = [p.vector(x,y,z),p.vector(x + l, y, z), p.vector(x, y, z + w), p.vector(x + l, y, z + w), p.vector(x,y + h,z),p.vector(x + l, y + h, z), p.vector(x, y + h, z + w), p.vector(x + l, y + h, z + w)];
    let projectedPoints = [];
    for (let i in points) {
        projectedPoints.push(projectPoint(points[i],cam));
    }
    // draw shapes
    /* sides:
        0 --- 1     4 --- 5
        |     |     |     |
        |     |     |     |
        2 --- 3     6 --- 7
    */
    let shapesIndexes = [[0,1,3,2], [4,5,7,6], [0,1,5,4], [2,3,7,6], [0,2,6,4], [1,3,7,5]];
    let indexPointers = [0, 1, 2, 3, 4, 5];
    // calculate the average distance from the camera for each shape in order to determine ordering
    let averageDz = [];
    for (let i in shapesIndexes) {
        let sum = 0;
        for (let j in shapesIndexes[i]) {
            sum += Math.sqrt((cam.pos.x - points[shapesIndexes[i][j]].x)*(cam.pos.x - points[shapesIndexes[i][j]].x) + (cam.pos.y - points[shapesIndexes[i][j]].y)*(cam.pos.y - points[shapesIndexes[i][j]].y) + (cam.pos.z - points[shapesIndexes[i][j]].z)*(cam.pos.z - points[shapesIndexes[i][j]].z));
        }
        averageDz.push(sum / shapesIndexes[i].length);
    }
    // console.log(averageDz);
    let total = 0;
    for (let i in averageDz) {total += averageDz[i];} 
    total /= averageDz.length;

    // sort shapes based on their dz values
    indexPointers = sortArrays(averageDz, indexPointers);

    for (let i = shapesIndexes.length - 1; i >= 0; i--) {
        // p.fill(colors[indexPointers[i]]);
        p.fill("#ffffff80");
        p.stroke("black");
        p.strokeWeight(1);
        let shape = [projectedPoints[shapesIndexes[indexPointers[i]][0]], projectedPoints[shapesIndexes[indexPointers[i]][1]], projectedPoints[shapesIndexes[indexPointers[i]][2]], projectedPoints[shapesIndexes[indexPointers[i]][3]]];
        p.shape(shape);
    }
}

function isArrayInOrder(arr) {
    let val = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < val) {
            return false;
        }
        val = arr[i];
    }
    return true;
}

function sortArrays(values, data) {
    let length = data.length;
    let unsortedData = data;
    let sortedData = [];
    // console.log(unsortedData, sortedData);

    for (let i = 0; i < length; i++) {
        let min = values[0];
        let idx = 0;
        for (let j in values) {
            if (values[j] < min) {
                min = values[j];
                idx = j;
            }
        }
        sortedData.push(unsortedData[idx]);
        unsortedData.splice(idx,1);
        values.splice(idx,1);
    }

    return sortedData;
}