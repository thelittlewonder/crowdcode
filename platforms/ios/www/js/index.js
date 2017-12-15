var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();


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
