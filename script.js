const playButton = document.querySelector('.play');
const lapButton = document.querySelector('.lap');
const resetButton = document.querySelector('.reset');
const second = document.querySelector('.sec');
const milliSecond = document.querySelector('.msec');

let isplay = false;
let secCounter = 0;
let sec;
let msecCounter = 0;
let msec;

const toggleButton = () => {
    lapButton.classList.remove('hidden');
    resetButton.classList.remove('hidden');
};

const play = () => {
    if (!isplay) {
        playButton.innerHTML = 'Pause';
        sec = setInterval(() => {
                second.innerHTML = `${++secCounter} .`;
                if (secCounter === 60) {
                    secCounter = 0;
                }
            }, 1000);
        msec = setInterval(() => {
                milliSecond.innerHTML = `${++msecCounter}`;
                if (msecCounter === 100) {
                    msecCounter = 0;
                }
            }, 10);
        isplay = true;
    }
    else {
        playButton.innerHTML = 'Play';
        clearInterval(sec);
        clearInterval(msec);
        isplay = false;
    };
    toggleButton();
};



const reset = () => {
    play()
    lapButton.classList.add('hidden');
    resetButton.classList.add('hidden');
    second.innerHTML = '0 .';
    milliSecond.innerHTML = '00';
}

playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);