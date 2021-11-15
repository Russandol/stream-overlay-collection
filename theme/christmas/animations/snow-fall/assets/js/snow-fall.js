window.onload = function() {
    const snowFall = new SnowFall();
    setInterval(function(){snowFall.launch();},20);
};

class SnowFall {
    constructor() {
        this.char = ['*', '.'];
        this.color = '#fff';
        this.flakes = [];
        this.height = 1080;
        this.maxSize = 20;
        this.maxSpeed = 2;
        this.maxXRange = 100;
        this.minSize = 8;
        this.minSpeed = 0.5;
        this.minXRange = 30;
        this.number = this.getNumber() ? this.getNumber() : 50;
        this.width = 1920;

        this.init();
    }
    getNumber() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        return urlParams.get('number');
    }
    getRandomChar() {
        return this.char[Math.floor(Math.random() * 2)];
    }
    init() {
        let frag = document.createDocumentFragment();

        for(let i = 0; i < this.number; i++){
            let flake = {
                html : document.createElement("span"),
                life : 0,
                size : this.minSize + this.random(this.maxSize - this.minSize),
                x : this.random(this.width),
                xRange : this.minXRange + this.random(this.maxXRange - this.minXRange),
                y : - this.maxSize,
                ySpeed : this.minSpeed + this.random(this.maxSpeed - this.minSpeed, 100),
            };

            flake.html.style.position = "absolute";
            flake.html.style.top = flake.y + "px";
            flake.html.style.left = flake.x + "px";
            flake.html.style.fontSize = flake.size + "px";
            flake.html.style.color = this.color;
            flake.html.appendChild(document.createTextNode(this.getRandomChar()));
            frag.appendChild(flake.html);
            this.flakes.push(flake);
        }

        $('#container').append(frag);
    }
    launch() {
        for(let i = 0; i < this.flakes.length; i++){
            let flake = this.flakes[i];
            let top = flake.y + flake.ySpeed;
            let left = flake.x + Math.sin(flake.life) * flake.xRange;

            if (top < this.height - flake.size - 10 && left < this.width - flake.size && left > 0) {
                flake.html.style.top = top + "px";
                flake.html.style.left = left + "px";
                flake.y = top;
                flake.life += .01;
            } else {
                flake.html.style.top = -this.maxSize + "px";
                flake.x = this.random(this.width);
                flake.y = -this.maxSize;
                flake.html.style.left = flake.x + "px";
                flake.life = 0;
            }
        }
    }
    random(range, num) {
        const nbr = num ? num : 1;

        return Math.floor(Math.random() * (range + 1) * nbr) / nbr;
    }
}
