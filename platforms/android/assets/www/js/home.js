document.addEventListener('deviceready', function(){
StatusBar.backgroundColorByHexString('#28C1F9');});

function onmousedown(event) {
		console.log(event);
	var pageX = (event.type.toLowerCase() === 'mousedown') ? event.pageX : event.touches[0].pageX;
		dragging = {
			startedAt: {
				x: pageX,
				y: event.clientY
			},
			lastDiff: {x:0,y:0},
			card: this
		};
	};


Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

var dragging = null;

function initCards() {
	var cards = document.getElementsByTagName("card");
	for(var i=0; i<cards.length; i++) {
		var card = cards[i];
		card.onmousedown = onmousedown;
		card.ontouchstart = onmousedown;
	}
	
	document.body.onmousemove = function(event){
			if(!dragging)
				return;
		var pageX = (event.type.toLowerCase() === 'mousemove') ? event.pageX : event.touches[0].pageX;
			var diff = {
				x: pageX - dragging.startedAt.x,
				y: event.clientY - dragging.startedAt.y
			};
		dragging.lastDiff = diff;
			dragging.card.style.webkitTransform = "translateX("+diff.x+"px) rotate("+(diff.x/30)+"deg)";
		dragging.card.style.opacity = 1-Math.min(1,Math.abs(0.002*diff.x));
		};
	document.body.ontouchmove = document.body.onmousemove;
    document.body.ontouchend = function(event){
		if(!dragging)
				return;
		var toBeDeleted = Math.abs(dragging.lastDiff.x) > dragging.card.offsetWidth / 2;
		if(!toBeDeleted) {
				dragging.card.style.webkitTransform = "translateX(0) rotate(0)";
				dragging.card.style.opacity = 1;
				dragging = null;
			} else {
				dragging.card.style.webkitTransform = "translateX("+(dragging.lastDiff.x>0 ? 1000 : -1000)+"px) rotate("+(dragging.lastDiff.x>0 ? 90 : -90)+"deg)";
				document.body.ontouchend = document.body.onmouseup;
				console.log(dragging.card.style.webkitTransform);
				dragging.card.style.opacity = 0;
				setTimeout(function(){
					dragging.card.remove();
				}, 200);
			}
		}; 
	document.body.onmouseup = function(event){
		if(!dragging)
				return;
		var toBeDeleted = Math.abs(dragging.lastDiff.x) > dragging.card.offsetWidth / 2;
		if(!toBeDeleted) {
				dragging.card.style.webkitTransform = "translateX(0) rotate(0)";
				dragging.card.style.opacity = 1;
				dragging = null;
			} else {
				dragging.card.style.webkitTransform = "translateX("+(dragging.lastDiff.x>0 ? 1000 : -1000)+"px) rotate("+(dragging.lastDiff.x>0 ? 90 : -90)+"deg)";
				document.body.ontouchend = document.body.onmouseup;
				console.log(dragging.card.style.webkitTransform);
				dragging.card.style.opacity = 0;
				setTimeout(function(){
					dragging.card.remove();
				}, 200);
			}
		}; 
};

window.onload = function() {
  initCards();
}