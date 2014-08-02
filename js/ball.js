
var x = 0, y = 0,
    vx = 0, vy = 0,
	ax = 0, ay = 0,
	speed1 = 0, speed2 = 0

var boundX = parseInt(document.documentElement.clientHeight / 3), 
	boundY = parseInt(document.documentElement.clientWidth / 3 ),
	centerX = boundX + parseInt (boundX/2),
	centerY = boundY + parseInt (boundY/2)

var sphere = document.getElementById("sphere");

if (window.DeviceMotionEvent != undefined) {
	window.ondevicemotion = function(e) {
		ax = event.accelerationIncludingGravity.x * 5;
		ay = event.accelerationIncludingGravity.y * 5;
		document.getElementById("accelerationX").innerHTML = e.accelerationIncludingGravity.x;
		document.getElementById("accelerationY").innerHTML = e.accelerationIncludingGravity.y;
	}

	setInterval( function() {
		var landscapeOrientation = window.innerWidth/window.innerHeight > 1;
		if ( landscapeOrientation) {
			vx = vx + ay;
			vy = vy + ax;
		} else {
			vy = vy - ay;
			vx = vx + ax;
		}
		vx = vx * 0.98;
		vy = vy * 0.98;

		addHysteresis();

		y = parseInt(y + vy / 100);
		x = parseInt(x + vx / 100);
		
		boundingBoxCheck();
		
		sphere.style.right = y + "px";
		sphere.style.top = x + "px";

		document.getElementById("speed").innerHTML = centerX-x;
		speed1 = centerX - x - centerY + y;
		speed2 = centerX - x + centerY - y;
		document.getElementById("motor1").innerHTML = speed1;
		document.getElementById("motor2").innerHTML = speed2;

	}, 25);
} 


function boundingBoxCheck(){
	if (x<boundX) { x = boundX; vx = -vx; }
	if (y<boundY) { y = boundY; vy = -vy; }
	if (x>2*boundX) { x = 2*boundX; vx = -vx; }
	if (y>2*boundY) { y = 2*boundY; vy = -vy; }
	
}

function addHysteresis(){
	if (vx<10) { vx = 0;}
	if (vy<10) { vy = 0;}
	
	
}