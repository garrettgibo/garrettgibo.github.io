let font, fontsize = 32;
var vehicles = [];
let points2;

function preload() {
    font = loadFont('resources/fonts/voice_in_my_head.otf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    var text = "Garrett Gibo";
    var text2 = "changing";
    var startX = windowWidth/3;
    var startY = windowHeight/2;
    
    var points = font.textToPoints(text2, startX, startY, 100, {sampleFactor:1.5});
    points2 = font.textToPoints(text, startX, startY, 100, {sampleFactor:1});
    for (var i = 0; i < points.length; i++) {
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
    }
}

function draw() {
    background(51);

    for (var i = 0; i < vehicles.length; i++) {
        var v = vehicles[i];
        var pt2 = points2[i % points2.length];
        v.transform(pt2);
        v.behaviors();
        v.update();
        v.show();
        
    }
}

    
