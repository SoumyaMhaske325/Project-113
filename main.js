function preload()
{

}

function setup()
{
    canvas=createCanvas(640,450);
    canvas.position(250,250);
    video=createCapture(VIDEO);
    video.hide();

    
}
function draw()
{
    image(video,0,0,300,300)
    fill(0,128,0);
    stoke(0,128,0);
    circle(350,50,70)
}

function take_snapshot()
{
    save('filter_photo.png')
}

