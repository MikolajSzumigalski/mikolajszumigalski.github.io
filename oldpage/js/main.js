var secondsHand = document.querySelector('.seconds'),
    minutesHand = document.querySelector('.minutes'),
    hoursHand = document.querySelector('.hours'),
    now = new Date();

var setupClock = function () {
    var secs = now.getSeconds(),
        mins = now.getMinutes() * 60,
        hours = now.getHours() * 3600;
    
    secondsHand.style.animationDelay = '-' + secs + 's';
    minutesHand.style.animationDelay = '-' + mins + 's';
    hoursHand.style.animationDelay = '-' + hours + 's';
};

setupClock();