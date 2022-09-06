noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
Difference = 0;
function setup(){
    Video = createCapture(VIDEO);
    Video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(Video, modelLoaded);
    poseNet.on("pose", gotposes);
}

function draw(){
    background('blue');
    document.getElementById("square_sides").innerHTML = "The width and height of the square will be = "+Difference+"px";
    fill('red');
    stroke('black');
    square(noseX, noseY, Difference);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+noseX+" , noseY = "+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        Difference = floor(leftWristX-rightWristX);
        console.log("leftWristX = "+leftWristX+" , rightWristX = "+rightWristX+" ,  Difference = "+Difference);
    }
}