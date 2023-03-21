var numberOfDrumButtons = document.querySelectorAll(".drum").length;

let aud = ['sounds/tom-1.mp3', 'sounds/tom-2.mp3', 'sounds/tom-3.mp3', 'sounds/tom-4.mp3', 'sounds/snare.mp3', 'sounds/crash.mp3', 'sounds/kick-bass.mp3'];

$('.drum').click(function(){
    var key = this.innerHTML;
    play(key);
    anim(key);
});

$(document).keydown(function(e) {
    play(e.key);
    anim(e.key);
});

function play(a){
    switch (a){
        case 'w':
            var tom1 = new Audio(aud[0]);
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio(aud[1]);
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio(aud[2]);
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio(aud[3]);
            tom4.play();
            break;
        case 'j':
            var snare = new Audio(aud[4]);
            snare.play();
            break;
        case 'k':
            var crash = new Audio(aud[5]);
            crash.play();
            break;
        case 'l':
            var kick = new Audio(aud[6]);
            kick.play();
            break;
        default:
            console.log(a);
    }
}

function anim(currentKey){
    // var activeKey = document.querySelector('.' + currentKey);
    // activeKey.classList.add('pressed');
    var activeKey = '.' + currentKey;
    $(activeKey).addClass('pressed');

    setTimeout(() => {
        // activeKey.classList.remove('pressed');
        $(activeKey).removeClass('pressed');
    }, 100);
}