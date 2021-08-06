var canvas = new fabric.Canvas('myCanvas');
var image = "empty";
var x = new Audio('bdayaudio.mp3');

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(IMG){
        image = IMG;
        image.scaleToWidth(750);
        image.scaleToHeight(510);
        image.set({
            top:0,
            left:0,
        })
        canvas.add(image)
    })	
}

function birthday()
{
	x.play();
}

function reveal() {
    document.getElementsByClassName("btn").innerHTML = "<i>Happy Birthday</i>";
}