document.addEventListener('deviceready', function () {
    StatusBar.backgroundColorByHexString('#28C1F9');
});
var currentCard = 1;
if (document.getElementById('bars') !== null) {
    var bars = document.getElementById('bars').childNodes;
}

function onmousedown(event) {
    console.log(event);
    var pageX = (event.type.toLowerCase() === 'mousedown') ? event.pageX : event.touches[0].pageX;
    dragging = {
        startedAt: {
            x: pageX,
            y: event.clientY
        },
        lastDiff: {
            x: 0,
            y: 0
        },
        card: this
    };
};


Element.prototype.remove = function () {
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

var dragging = null;

function initCards() {
    var cards = document.getElementsByTagName("card");
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        card.onmousedown = onmousedown;
        card.ontouchstart = onmousedown;
    }

    document.body.onmousemove = function (event) {
        if (!dragging)
            return;
        var pageX = (event.type.toLowerCase() === 'mousemove') ? event.pageX : event.touches[0].pageX;
        var diff = {
            x: pageX - dragging.startedAt.x,
            y: event.clientY - dragging.startedAt.y
        };
        dragging.lastDiff = diff;
        dragging.card.style.webkitTransform = "translateX(" + diff.x + "px) rotate(" + (diff.x / 30) + "deg)";
        dragging.card.style.opacity = 1 - Math.min(1, Math.abs(0.002 * diff.x));
    };
    document.body.ontouchmove = document.body.onmousemove;
    document.body.ontouchend = function (event) {
        if (!dragging)
            return;
        var toBeDeleted = Math.abs(dragging.lastDiff.x) > dragging.card.offsetWidth / 2;
        if (!toBeDeleted) {
            dragging.card.style.webkitTransform = "translateX(0) rotate(0)";
            dragging.card.style.opacity = 1;
            dragging = null;
            console.log('not to be deleted');
        } else {
            dragging.card.style.webkitTransform = "translateX(" + (dragging.lastDiff.x > 0 ? 1000 : -1000) + "px) rotate(" + (dragging.lastDiff.x > 0 ? 90 : -90) + "deg)";
            document.body.ontouchend = document.body.onmouseup;
            console.log(dragging.card.style.webkitTransform);
            dragging.card.style.opacity = 0;
            setTimeout(function () {
                dragging.card.remove();
            }, 200);
            if (currentCard === 7) {
                console.log('i was called');
                $('#end').css('opacity', 1);
            }
            bars[currentCard].classList.remove('current');
            currentCard = currentCard + 2;
            bars[currentCard].classList.add('current');

        }
    };
    document.body.onmouseup = function (event) {
        if (!dragging)
            return;
        var toBeDeleted = Math.abs(dragging.lastDiff.x) > dragging.card.offsetWidth / 2;
        if (!toBeDeleted) {
            dragging.card.style.webkitTransform = "translateX(0) rotate(0)";
            dragging.card.style.opacity = 1;
            dragging = null;
        } else {
            dragging.card.style.webkitTransform = "translateX(" + (dragging.lastDiff.x > 0 ? 1000 : -1000) + "px) rotate(" + (dragging.lastDiff.x > 0 ? 90 : -90) + "deg)";
            document.body.ontouchend = document.body.onmouseup;
            console.log(dragging.card.style.webkitTransform);
            dragging.card.style.opacity = 0;
            setTimeout(function () {
                dragging.card.remove();
            }, 200);
            if (currentCard === 7) {
                console.log('i was called');
                $('#end').css('opacity', 1);
            }
            bars[currentCard].classList.remove('current');
            currentCard = currentCard + 2;
            bars[currentCard].classList.add('current');

        }
    };
};
window.onload = function () {
    initCards();
}

$('#testvariables').hammer().on('tap', function () {
    setTimeout(function () {
        $('#end').remove();
        $('.bars').remove();
        document.getElementById('test').style.display = "block";
        document.getElementById('test').style.opacity = 1;
        $('#pane4').css('opacity', 0);
        $('#pane4').remove();
        document.getElementById('v1').style.opacity = 1;
    }, 200);
});

var v1answer;
$('.option').hammer().on('tap', function (e) {
    var wut = document.getElementsByClassName('option');
    let i;
    for (i = 0; i < wut.length; i++) {
        wut[i].classList.remove('got');
    }
    e.target.classList.add('got');
    v1answer = e.target.innerHTML;
});

$('#ansv1').hammer().on('tap', function (e) {
    $('#v1').css('opacity', 0);
    setTimeout(function () {
        $('#v1').remove();
        if (v1answer === 'A. True') {
            $('.galat').remove();
            $('.cards').css('background-color', '#64C56E');
            $('.sahi').css('opacity', 1);
        } else {
            $('.sahi').remove();
            $('.cards').css('background-color', '#ED4C4C');
            document.getElementById('itou').innerHTML = v1answer;
            $('.galat').css('opacity', 1);
        }
    }, 300);
});

if (document.getElementById('topicsearch') !== null) {
    document.getElementById('topicsearch').addEventListener('keyup', function () {
        let filter = (document.getElementById('topicsearch').value);
        filter = filter.toLowerCase();
        let rows = document.getElementsByClassName('module');
        let i, a;
        for (i = 0; i < rows.length; i++) {
            a = rows[i].getElementsByTagName('h1')[0];
            if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
        if (filter.length === 0) {
            window.location.reload();
        }
    });
    $('#trigger').hammer().on('tap', function () {
        $('.header h1').css('display', 'none');
        $('.header div').css('display', 'none');
        $('#topicsearch').css('display', 'block');
        $('#topicsearch').focus();
        setInterval(function () {
            $('#topicsearch').css('opacity', 1);
        });
    });
}

$('#variables1').hammer().on('tap', function (e) {
    window.location.href = "varcards1.html"
});

$('#testvariables2').hammer().on('tap', function () {
    setTimeout(function () {
        $('#end').remove();
        $('.bars').remove();
        document.getElementById('test').style.display = "block";
        document.getElementById('test').style.opacity = 1;
        $('#pane5').css('opacity', 0);
        $('#pane5').remove();
        document.getElementById('v2').style.opacity = 1;
    }, 200);
});

var v2answer;
$('.option').hammer().on('tap', function (e) {
    var wut = document.getElementsByClassName('option');
    let i;
    for (i = 0; i < wut.length; i++) {
        wut[i].classList.remove('got');
    }
    e.target.classList.add('got');
    v2answer = e.target.innerHTML;
});

$('#ansv2').hammer().on('tap', function (e) {
    $('#v2').css('opacity', 0);
    setTimeout(function () {
        $('#v2').remove();
        if (v2answer === 'C. int myWeight;') {
            $('.galat').remove();
            $('.cards').css('background-color', '#64C56E');
            $('.sahi').css('opacity', 1);
        } else {
            $('.sahi').remove();
            $('.cards').css('background-color', '#ED4C4C');
            document.getElementById('itou').innerHTML = v2answer;
            $('.galat').css('opacity', 1);
        }
    }, 300);
});


$('#variables2').hammer().on('tap', function (e) {
    window.location.href = "varcards2.html"
});

$('#variables3').hammer().on('tap', function (e) {
    window.location.href = "varcards3.html"
});

$('#variables4').hammer().on('tap', function (e) {
    window.location.href = "varcards4.html"
});
