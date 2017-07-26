var field = document.querySelector(".wraper");
var ball = document.querySelector(".ball");
var points = document.querySelector(".points")
var time;
var score = 0;

function start(vreme){
	//console.log(vreme);
	time = setInterval(function(){
	var colors = ["#ff0505", "#ff05ff", "#05ff05", "#05ffff", "#0505ff", "#05ff82", "#0582ff"];
	var backgroundColor = colors[Math.floor(Math.random()*colors.length)];
	var backgroundColor2 = colors[Math.floor(Math.random()*colors.length)];
	var a = document.querySelector(".ball");
	a.style.background = `radial-gradient(ellipse at center, ${backgroundColor} 0%,${backgroundColor2} 100%)`;
	createFood();
}, vreme)};
start(1500);

function createFood(){
	var food = document.createElement("div");
	food.addEventListener("click", function(e){
		score++;
		var self = this;
		if(e.target === field.lastElementChild){
			setTimeout(function(){
			self.remove();
		}, 500)
		}
	}, false);
	field.appendChild(food);
	food.classList.add("food");
	var height = field.offsetHeight;
	var width = field.offsetWidth;
	var y = Math.floor(Math.random() * height);
	var x = Math.floor(Math.random() * width);
	food.style.left = x + "px";
	food.style.top = y + "px";   
	checkScore(score);
}

(function bodyClick(){
	field.addEventListener("click", function(e){
		if(e.target === e.currentTarget){
			console.log("Kliknuo si telo");
			score--;
			checkScore(score)
		}
	}, false);
})();

function findClickPosition(e){
	var parentPosition = getPosition(field);
	var xPosition = e.clientX - parentPosition.x - (ball.clientWidth / 2);
	var yPosition = e.clientY - parentPosition.y - (ball.clientHeight / 2);
	ball.style.left = xPosition + "px";
    ball.style.top = yPosition + "px";
}

function getPosition(el) {
  var xPos = 0;
  var yPos = 0;
 
  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;
 
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // determines position of top left corner for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

function checkScore(x){
	points.textContent = `Points: ${score}`;
	if(x === 5){
		clearInterval(time);
		start(1400);
	} if(x === 10){
		clearInterval(time);
		start(1300);
	} if(x === 15){
		clearInterval(time);
		start(1200);
	} if(x === 20){
		clearInterval(time);
		start(1100);
	} if(x === 25){
		clearInterval(time);
		alert("YOU ARE THE EMPEROR OF THIS GAME!!! \n YOU HAVE THE FASTEST HAND IN UNIVERSE!!!")
	}
}

