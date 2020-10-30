let grid = []
let squareSize = 8
let zoff = 1

function setup(){
    createCanvas(floor(innerWidth / squareSize) * squareSize, floor(innerHeight / squareSize) * squareSize)
    for(let i = 0; i <= height/squareSize; i++){
        grid.push([])
        xoff = 0
        for(let j = 0; j <= width/squareSize; j++){
            grid[i].push(noise(i/10, j/10, zoff))
        }
    }
}

function draw(){
    background(60)
    zoff += 0.001
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid.length; j++){
            grid[i][j] = noise(i/10, j/10, zoff)
        }
    }
    for(let i = 0; i < grid.length - 1; i++){
        for(let j = 0; j < grid[i].length - 1; j++){
            noStroke()
            strokeWeight(4)
            stroke(round(grid[i][j]) * 255)
            // point(j * squareSize, i * squareSize)
            if(i < grid.length && j < grid[i].length){
                const state = getState(round(grid[i][j]), round(grid[i][j+1]), round(grid[i+1][j+1]), round(grid[i+1][j]))

                const a = createVector(j * squareSize + squareSize/2, i * squareSize)
                const b = createVector(j * squareSize + squareSize, i * squareSize + squareSize/2)
                const c = createVector(j * squareSize + squareSize/2, i * squareSize + squareSize)
                const d = createVector(j * squareSize, i * squareSize + squareSize/2)

                stroke(120)
                strokeWeight(4)
                switch(state){
                    case 1:
                        drawLine(d, c)
                        break;
                    case 2:
                        drawLine(c, b)
                        break;
                    case 3:
                        drawLine(d, b)
                        break;
                    case 4:
                        drawLine(a, b)
                        break;
                    case 5:
                        drawLine(d, a)
                        drawLine(c, b)
                        break;
                    case 6:
                        drawLine(a, c)
                        break;
                    case 7:
                        drawLine(d, a)
                        break;
                    case 8:
                        drawLine(d, a)
                        break;
                    case 9:
                        drawLine(a, c)
                        break;
                    case 10:
                        drawLine(d, c)
                        drawLine(a, b)
                        break;
                    case 11:
                        drawLine(a, b)
                        break;
                    case 12:
                        drawLine(d, b)
                        break;
                    case 13:
                        drawLine(c, b)
                        break;
                    case 14:
                        drawLine(d, c)
                        break;
                }
            }
        }
    }
    // const res = 1;
    // for(let i = 0; i < grid.length; i++){
    //     for(let j = 0; j < grid[i].length; j++){
    //       let color = noise(i/10, j/10)
    
    //       fill(color * 255)
    //       noStroke()
    //       rect(j * squareSize, i * squareSize, squareSize, squareSize)
    //     }
    //   }
}


function getState(a,b,c,d){
    return a * 8 + b * 4 + c * 2 + d * 1
}

function drawLine(a, b){
    line(a.x, a.y, b.x, b.y)
}