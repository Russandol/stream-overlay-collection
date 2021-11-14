window.onload = function() {
    const countdown = new Countdown();
    countdown.intervalId = setInterval(function(){countdown.launch()}, 1000);
};

class Countdown {
    constructor() {
        this.timer = this.getTimer();
        this.minutes = Math.floor(this.timer / 60);
        this.seconds = this.timer - this.minutes * 60;
        this.$minutesSpan = $('#minutes');
        this.$secondsSpan = $('#seconds');
        this.intervalId = null;

        this.init();
    }
    getTimer() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        return urlParams.get('timer');
    }
    init() {
        this.writeToSpan(this.$minutesSpan, this.minutes);
        this.writeToSpan(this.$secondsSpan, this.seconds);
    }
    launch() {
        if (this.minutes === 0 && this.seconds === 0) {
            clearInterval(this.intervalId);
            return;
        }

        if (this.seconds === 0) {
            this.minutes = this.minutes - 1;
            this.writeToSpan(this.$minutesSpan, this.minutes);
            this.seconds = 59;
            this.writeToSpan(this.$secondsSpan, this.seconds);
            return;
        }

        this.seconds = this.seconds - 1;
        this.writeToSpan(this.$secondsSpan, this.seconds);
    }
    writeToSpan($span, time) {
        let result = time;

        if (result < 10) {
            result = '0' + result;
        }

        $span.text(result);
    }
}