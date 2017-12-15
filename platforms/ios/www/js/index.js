var gender = 'a';
var email;
var name;
var allset = 0;
var agegroup;
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
    document.getElementById('chalo').classList.remove('dead');
    document.getElementById('chalo').classList.add('alive');
});

$('#male').hammer().on("tap", function (ev) {
    gender = "male";
    document.getElementById('male').classList.remove('nay');
    document.getElementById('male').classList.add('yay');
    document.getElementById('female').classList.remove('yay');
    document.getElementById('female').classList.add('nay');
    document.getElementById('chalo').classList.remove('dead');
    document.getElementById('chalo').classList.add('alive');
});


$('#chalo').hammer().on("tap", function () {
    console.log(allset);
    if (allset === 0) {
        document.getElementById('chalo').classList.remove('alive');
        document.getElementById('chalo').classList.add('dead');
        $('.part').css('width', '40%');
        $('.gradient h1').css('height', 0);
        $('.gradient h1').html('Select your age group');
        $('.gradient h1').css('height', 'auto');
        $('#lmao').css('opacity', 0);
        window.setTimeout(function () {
            $('#lmao').remove();
            $('.agegroup').css('display', 'block');

        }, 300);
        allset = allset + 1;
    } else if (allset === 1) {
        document.getElementById('chalo').classList.remove('alive');
        document.getElementById('chalo').classList.add('dead');
        $('.part').css('width', '60%');
        $('.gradient h1').css('height', 0);
        $('.gradient h1').html('Select your profession');
        $('.gradient h1').css('height', 'auto');
        $('#lmao').css('opacity', 0);
        window.setTimeout(function () {
            $('.agegroup').remove();
            $('.jobgroup').css('display', 'flex');
        }, 300);
        allset = allset + 1;
    } else if (allset === 2) {
        document.getElementById('chalo').classList.remove('alive');
        document.getElementById('chalo').classList.add('dead');
        $('.part').css('width', '80%');
        $('.gradient h1').css('height', 0);
        $('.gradient h1').html('Join a Learning Group');
        $('.gradient h1').css('height', 'auto');
        $('#lmao').css('opacity', 0);
        window.setTimeout(function () {
            $('.jobgroup').remove();
        }, 300);
        allset = allset + 1;
    }
});

$('#g1').hammer().on('tap', function () {
    document.getElementById('g1').classList.add('zinda');
    document.getElementById('g2').classList.remove('zinda');
    document.getElementById('g3').classList.remove('zinda');
    document.getElementById('g4').classList.remove('zinda');
    document.getElementById('g5').classList.remove('zinda');
    document.getElementById('chalo').classList.remove('dead');
    document.getElementById('chalo').classList.add('alive');
});

$('#g2').hammer().on('tap', function () {
    document.getElementById('g2').classList.add('zinda');
    document.getElementById('g1').classList.remove('zinda');
    document.getElementById('g3').classList.remove('zinda');
    document.getElementById('g4').classList.remove('zinda');
    document.getElementById('g5').classList.remove('zinda');
    document.getElementById('chalo').classList.remove('dead');
    document.getElementById('chalo').classList.add('alive');
});


$('#g3').hammer().on('tap', function () {
    document.getElementById('g3').classList.add('zinda');
    document.getElementById('g2').classList.remove('zinda');
    document.getElementById('g1').classList.remove('zinda');
    document.getElementById('g4').classList.remove('zinda');
    document.getElementById('g5').classList.remove('zinda');
    document.getElementById('chalo').classList.remove('dead');
    document.getElementById('chalo').classList.add('alive');
});

$('#g4').hammer().on('tap', function () {
    document.getElementById('g4').classList.add('zinda');
    document.getElementById('g2').classList.remove('zinda');
    document.getElementById('g3').classList.remove('zinda');
    document.getElementById('g1').classList.remove('zinda');
    document.getElementById('g5').classList.remove('zinda');
    document.getElementById('chalo').classList.remove('dead');
    document.getElementById('chalo').classList.add('alive');
});

$('#g5').hammer().on('tap', function () {
    document.getElementById('g5').classList.add('zinda');
    document.getElementById('g2').classList.remove('zinda');
    document.getElementById('g3').classList.remove('zinda');
    document.getElementById('g4').classList.remove('zinda');
    document.getElementById('g1').classList.remove('zinda');
    document.getElementById('chalo').classList.remove('dead');
    document.getElementById('chalo').classList.add('alive');
});


$('#doctor').hammer().on('tap', function () {
    document.getElementById('doctor').classList.add('mera');
    document.getElementById('wife').classList.remove('mera');
    document.getElementById('student').classList.remove('mera');
    document.getElementById('chef').classList.remove('mera');
    document.getElementById('engineer').classList.remove('mera');
    document.getElementById('police').classList.remove('mera');
    document.getElementById('chalo').classList.remove('dead');
    document.getElementById('chalo').classList.add('alive');
});

$('#wife').hammer().on('tap', function () {
    document.getElementById('wife').classList.add('mera');
    document.getElementById('doctor').classList.remove('mera');
    document.getElementById('student').classList.remove('mera');
    document.getElementById('chef').classList.remove('mera');
    document.getElementById('engineer').classList.remove('mera');
    document.getElementById('police').classList.remove('mera');
    document.getElementById('chalo').classList.remove('dead');
    document.getElementById('chalo').classList.add('alive');
});

$('#student').hammer().on('tap', function () {
    document.getElementById('student').classList.add('mera');
    document.getElementById('wife').classList.remove('mera');
    document.getElementById('doctor').classList.remove('mera');
    document.getElementById('chef').classList.remove('mera');
    document.getElementById('engineer').classList.remove('mera');
    document.getElementById('police').classList.remove('mera');
    document.getElementById('chalo').classList.remove('dead');
    document.getElementById('chalo').classList.add('alive');
});

$('#chef').hammer().on('tap', function () {
    document.getElementById('chef').classList.add('mera');
    document.getElementById('wife').classList.remove('mera');
    document.getElementById('student').classList.remove('mera');
    document.getElementById('doctor').classList.remove('mera');
    document.getElementById('engineer').classList.remove('mera');
    document.getElementById('police').classList.remove('mera');
    document.getElementById('chalo').classList.remove('dead');
    document.getElementById('chalo').classList.add('alive');
});

$('#engineer').hammer().on('tap', function () {
    document.getElementById('engineer').classList.add('mera');
    document.getElementById('wife').classList.remove('mera');
    document.getElementById('student').classList.remove('mera');
    document.getElementById('chef').classList.remove('mera');
    document.getElementById('doctor').classList.remove('mera');
    document.getElementById('police').classList.remove('mera');
    document.getElementById('chalo').classList.remove('dead');
    document.getElementById('chalo').classList.add('alive');
});

$('#police').hammer().on('tap', function () {
    document.getElementById('police').classList.add('mera');
    document.getElementById('wife').classList.remove('mera');
    document.getElementById('student').classList.remove('mera');
    document.getElementById('chef').classList.remove('mera');
    document.getElementById('engineer').classList.remove('mera');
    document.getElementById('doctor').classList.remove('mera');
    document.getElementById('chalo').classList.remove('dead');
    document.getElementById('chalo').classList.add('alive');
});
