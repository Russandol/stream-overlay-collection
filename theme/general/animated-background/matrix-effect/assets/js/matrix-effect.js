window.onload = function() {
    let n = 0;

    while (n <= 80) {
        let $div = $('<div></div>')
            .addClass('column col-' + ++n);
        let i = 0;

        while (i < 50) {
            i++;
            let $span = $('<span>' + getRandomChineseWord() + '</span>');

            $div.append($span);
        }

        $('.container').append($div);
    }

    function getRandomChineseWord () {
        let _rsl = "";
        let _randomUniCode = Math.floor(Math.random() * (40870-19968) + 19968).toString(16);
        eval("_rsl=" +'"\\u' + _randomUniCode +'"');
        return _rsl;
    }
};