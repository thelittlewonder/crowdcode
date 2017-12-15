//Onboarding

/*--------------------------*/
var active = 0;
var slidingText = ['Personalised  Coding Lessons <br> &nbsp', 'Learn with people having the same background', 'Divided into bite sized chunks <br> &nbsp'];
var slidingImages = ['img/img1.png', 'img/img2.png', 'img/img3.png'];

$('#slidingimg').swipeLeft(function () {
    active = active + 1;
    active = active % 3;
    if (active === 0) {
        document.getElementById('one').classList.add('active');
        document.getElementById('two').classList = ['slide'];
        document.getElementById('three').classList = ['slide'];
        document.getElementById('slidingtext').innerHTML = slidingText[0];
        document.getElementById('slidingimg').src = slidingImages[0];
    }
    if (active === 1) {
        document.getElementById('one').classList = ['slide'];
        document.getElementById('two').classList.add('active');
        document.getElementById('three').classList = ['slide'];
        document.getElementById('slidingtext').innerHTML = slidingText[1];
        document.getElementById('slidingimg').src = slidingImages[1];
    }
    if (active === 2) {
        document.getElementById('one').classList = ['slide'];
        document.getElementById('two').classList = ['slide'];
        document.getElementById('three').classList.add('active');
        document.getElementById('slidingtext').innerHTML = slidingText[2];
        document.getElementById('slidingimg').src = slidingImages[2];
    }
});


$('#slidingimg').swipeRight(function () {
    active = active - 1;
    if (active < 0) {
        active = 0;
    }
    active = active % 3;
    if (active === 0) {
        document.getElementById('one').classList.add('active');
        document.getElementById('two').classList = ['slide'];
        document.getElementById('three').classList = ['slide'];
        document.getElementById('slidingtext').innerHTML = slidingText[0];
        document.getElementById('slidingimg').src = slidingImages[0];
    }
    if (active === 1) {
        document.getElementById('one').classList = ['slide'];
        document.getElementById('two').classList.add('active');
        document.getElementById('three').classList = ['slide'];
        document.getElementById('slidingtext').innerHTML = slidingText[1];
        document.getElementById('slidingimg').src = slidingImages[1];
    }
    if (active === 2) {
        document.getElementById('one').classList = ['slide'];
        document.getElementById('two').classList = ['slide'];
        document.getElementById('three').classList.add('active');
        document.getElementById('slidingtext').innerHTML = slidingText[2];
        document.getElementById('slidingimg').src = slidingImages[2];
    }
});

$('#one').tap(function () {
    document.getElementById('one').classList.add('active');
    document.getElementById('two').classList = ['slide'];
    document.getElementById('three').classList = ['slide'];
    document.getElementById('slidingtext').innerHTML = slidingText[0];
    document.getElementById('slidingimg').src = slidingImages[0];
});

$('#two').tap(function () {
    document.getElementById('one').classList = ['slide'];
    document.getElementById('two').classList.add('active');
    document.getElementById('three').classList = ['slide'];
    document.getElementById('slidingtext').innerHTML = slidingText[1];
    document.getElementById('slidingimg').src = slidingImages[1];
});

$('#three').tap(function () {
    document.getElementById('one').classList = ['slide'];
    document.getElementById('two').classList = ['slide'];
    document.getElementById('three').classList.add('active');
    document.getElementById('slidingtext').innerHTML = slidingText[2];
    document.getElementById('slidingimg').src = slidingImages[2];
});


/*--------------------------*/

//Onboarding
