var gender = 'a';
var email;
var name;
var allset = 0;
//splash

$(document).ready(function () {
    setTimeout(function () {
        $('.splash').css('height', 0);
        $('.splash').css('opacity', 0);
        $('.container').css('height', 'auto');
        $('.container').css('opacity', 1);
    }, 3000);
});


$('.splash').hammer().on("tap", function (ev) {
    $('.splash').css('height', 0);
    $('.splash').css('opacity', 0);
    $('.container').css('height', 'auto');
    $('.container').css('opacity', 1);
});


//splash

//Onboarding

/*--------------------------*/
var active = 0;
var slidingText = ['Personalised  Coding Lessons <br> &nbsp', 'Learn with people having the same background', 'Divided into bite sized chunks <br> &nbsp'];
var slidingImages = ['img/img1.png', 'img/img2.png', 'img/img3.png'];

$('#slidingimg').hammer().on("swipeleft", function (ev) {
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


$('#slidingimg').hammer().on("swiperight", function (ev) {
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

$('#one').hammer().on("tap", function (ev) {
    document.getElementById('one').classList.add('active');
    document.getElementById('two').classList = ['slide'];
    document.getElementById('three').classList = ['slide'];
    document.getElementById('slidingtext').innerHTML = slidingText[0];
    document.getElementById('slidingimg').src = slidingImages[0];
});

$('#two').hammer().on("tap", function (ev) {
    document.getElementById('one').classList = ['slide'];
    document.getElementById('two').classList.add('active');
    document.getElementById('three').classList = ['slide'];
    document.getElementById('slidingtext').innerHTML = slidingText[1];
    document.getElementById('slidingimg').src = slidingImages[1];
});

$('#three').hammer().on("tap", function (ev) {
    document.getElementById('one').classList = ['slide'];
    document.getElementById('two').classList = ['slide'];
    document.getElementById('three').classList.add('active');
    document.getElementById('slidingtext').innerHTML = slidingText[2];
    document.getElementById('slidingimg').src = slidingImages[2];
});


//Onboarding
/*--------------------------*/

$('#female').hammer().on("tap", function (ev) {
    gender = "female";
    document.getElementById('female').classList.remove('nay');
    document.getElementById('female').classList.add('yay');
    document.getElementById('male').classList.remove('yay');
    document.getElementById('male').classList.add('nay');
});

$('#male').hammer().on("tap", function (ev) {
    gender = "male";
    document.getElementById('male').classList.remove('nay');
    document.getElementById('male').classList.add('yay');
    document.getElementById('female').classList.remove('yay');
    document.getElementById('female').classList.add('nay');
});


var check = function () {
    let flag1, flag2, flag3 = 0;
    if ((document.getElementById('first').value).length > 0) {
        flag1 = 1;
    } else {
        flag1 = 0;
    }
    if ((document.getElementById('last').value).length > 0) {
        flag2 = 1;
    } else {
        flag2 = 0;
    }
    if (gender.length > 2) {
        flag3 = 1;
    } else {
        flag3 = 0;
    }
    if (flag1 + flag2 + flag3 === 3) {
        document.getElementById('chalo').classList.remove('dead');
        document.getElementById('chalo').classList.add('alive');
        allset = 1;
    } else {
        document.getElementById('chalo').classList.remove('alive');
        document.getElementById('chalo').classList.add('dead');
    }
};

while (!allset) {
    window.setInterval(check, 1000);
}

$('#chalo').hammer().on("tap", function () {
    document.getElementById('chalo').classList.remove('alive');
    document.getElementById('chalo').classList.add('dead');
    $('.part').css('width', '40%');
    $('.gradient h1').css('height', 0);
    $('.gradient h1').html('Select your profile');
    $('.gradient h1').css('height', 'auto');
    $('#lmao').css('opacity', 0);
    window.setTimeout(function () {
        $('#lmao').remove();
    }, 1000);
});
