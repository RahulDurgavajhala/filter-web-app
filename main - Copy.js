function setup(){
    canvas = createCanvas(300 , 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    video.size(300 ,300)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose' , gotPoses)

}
function draw(){
    image(video,0, 0, 300, 300)
}
function modelLoaded(){
    console.log('PoseNet Is Initialized')
   
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        nose_x = results[0].pose.nose.x -23
        nose_y = results[0].pose.nose.y -9
    }
}
function preload(){
    clown_nose = loadImage("mustach")
}
nose_x = 0
nose_y =0
function draw(){
    image(video, 0, 0, 300, 300)
    fill("red")
image(clown_nose, nose_x, nose_y, 46, 25)

}
f
