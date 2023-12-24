window.onload = function() {
    const countdown = new Countdown();
    countdown.launch();
    countdown.intervalId = setInterval(() => {countdown.launch()}, 1000);
};

class Countdown {
    constructor() {
        this.timer = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.$minutesSpan = $('#minutes');
        this.$secondsSpan = $('#seconds');
        this.intervalId = null;

        this.init();
    }

    init() {
        this.writeToSpan(this.$minutesSpan, this.minutes);
        this.writeToSpan(this.$secondsSpan, this.seconds);
    }
    launch() {
        if (this.seconds === 60) {
            this.minutes++;
            this.writeToSpan(this.$minutesSpan, this.minutes);
            this.seconds = 0;
            this.writeToSpan(this.$secondsSpan, this.seconds);

            return;
        }

        this.writeToSpan(this.$secondsSpan, this.seconds++);
    }
    writeToSpan($span, time) {
        let result = time;

        if (result < 10) {
            result = '0' + result;
        }

        $span.text(result);
    }
}