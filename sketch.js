function setup() {
	// create a place to draw
	createCanvas(800, 560);
}

function draw() {
	// clear the background
	background(119, 136, 153);

	//crown

	fill(222, 184, 135);
		noStroke();

	triangle(403, 50, 381, 150, 423, 150);

	triangle(353, 60, 381, 150, 323, 180);

	triangle(453, 60, 481, 190, 423, 150);

	ellipse(400, 245, 220, 220);

	// set a fill color white
	fill(255, 245, 225);

	// set a stroke color
	stroke(255, 255, 255);

	// draw a circle
		ellipse(400, 245, 200, 200);
	noStroke();

	fill(0, 0, 0);
	// draw clockhand 1
	rect(400, 155, 5, 95);

	fill(0, 0, 0);
	// draw clockhand 2
	rect(400, 250, 95, 5);

	fill(0, 0, 0);

	triangle(403, 150, 391, 170, 413, 170);

	triangle(490, 240, 490, 270, 505, 255);

	ellipse(403, 345, 10, 10);

	ellipse(303, 248, 10, 10);



}
