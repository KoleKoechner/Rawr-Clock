var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function () {
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours > noon) {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function () {
    var time = new Date().getHours();
    var messageText;
    var image = "https://ih1.redbubble.net/image.90114620.0778/flat,1000x1000,075,f.u2.jpg";

    var timeEventJS = document.getElementById("timeEvent");
    var dragonclockimageJS = document.getElementById('dragonclockimage');

    if (time == partytime) {
        image = "https://steamuserimages-a.akamaihd.net/ugc/919166605126603060/433480BC66E57634EFC85EFFB1A1DB5E2964BD36/";
        messageText = "Let's party!";
    }
    else if (time == wakeuptime) {
        image = "https://www.miocasa.de/images/large-wake-up-dragon-01.jpg";
        messageText = "Wake up!";
    }
    else if (time == lunchtime) {
        image = "https://i.etsystatic.com/8364761/r/il/c9c539/747102531/il_794xN.747102531_d6mz.jpg";
        messageText = "Let's have some lunch!";
    }
    else if (time == naptime) {
        image = "https://cdnb.artstation.com/p/assets/images/images/021/996/285/large/anthony-peltier-sleepy-dragon.jpg?1573715849";
        messageText = "Sleep tight!";
    }
    else if (time < noon) {
        image = "https://66.media.tumblr.com/tumblr_l8ooeujhG91qzs63fo1_1280.gifv";
        messageText = "Good morning!";
    }
    else if (time >= evening) {
        image = "https://i.kym-cdn.com/photos/images/original/000/842/267/4d8.jpg";
        messageText = "Good evening!";
    }
    else {
        image = "https://art.ngfiles.com/images/592000/592556_temariix_derp-dragon.png?f1519609166";
        messageText = "Good afternoon!";
    }

    console.log(messageText);
    timeEventJS.innerText = messageText;
    dragonclockimage.src = image;

    showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function () {
    if (partytime < 0) {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();


// Activates Wake-Up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function () {
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function () {
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function () {
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);