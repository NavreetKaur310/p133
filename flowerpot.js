function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Clock", 45, 75);
    stroke("#FF0000")
    noFill();
    rect(30, 50, 420, 350);
}

function back(){
    window.location = "index.html";
}