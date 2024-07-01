const playButton = document.querySelector('.play');
const lapButton = document.querySelector('.lap');
const resetButton = document.querySelector('.reset');
const clearButton = document.querySelector('.lap-clear-button');
const second = document.querySelector('.sec');
const minute = document.querySelector('.minute');
const milliSecond = document.querySelector('.msec');
const laps = document.querySelector('.laps')
const timestamp = document.querySelector

let isplay = false;
let secCounter = 0;
let sec;
let msecCounter = 0;
let msec;
let min;
let minCounter = 0;
let isReset = false;
let lapCounter = 0;

const toggleButton = () => {
    lapButton.classList.remove('hidden');
    resetButton.classList.remove('hidden');
};

const play = () => {
    if (!isplay && !isReset) {
        playButton.innerHTML = 'Pause';
        min = setInterval(() => {
            minute.innerHTML = `${++minCounter} :&nbsp;`;
        }, 60*1000);
        sec = setInterval(() => {
                second.innerHTML = `${++secCounter} `;
                if (secCounter === 60) {
                    secCounter = 0;
                }
            }, 1000);
        msec = setInterval(() => {
                milliSecond.innerHTML = `&nbsp ${++msecCounter}`;
                if (msecCounter === 100) {
                    msecCounter = 0;
                }
            }, 10);
        isplay = true;
        isReset = true;
    }
    else {
        playButton.innerHTML = 'Play';
        clearInterval(min)
        clearInterval(sec);
        clearInterval(msec);
        isplay = false;
        isReset = false;
    };
    toggleButton();
};



const reset = () => {
    isReset = true
    play()
    lapButton.classList.add('hidden');
    resetButton.classList.add('hidden');
    second.innerHTML = '0  &nbsp;';
    milliSecond.innerHTML = '. &nbsp; 00';
    minute.innerHTML = '0 : &nbsp;';
    minCounter = 0;
    secCounter = 0;
    msecCounter = 0;
    clearLap();
}

const lap = () => {
    const li = document.createElement("li")
    const number = document.createElement("span")
    const timestamp = document.createElement("span")

    li.setAttribute("class", "lap-item")
    number.setAttribute("class", "lap-number")
    timestamp.setAttribute("class", "lap-time")

    timestamp.innerHTML = `${minCounter} : ${secCounter} . ${msecCounter}`
    number.innerHTML = `#${++lapCounter}`

    li.append(number,timestamp)
    laps.append(li)

    clearButton.classList.remove("hidden")
}

const clearLap = () => {
    laps.innerHTML = '';
    laps.append(clearButton);
    clearButton.classList.add("hidden");
    lapCounter = 0;
}


playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', lap);
clearButton.addEventListener('click', clearLap)