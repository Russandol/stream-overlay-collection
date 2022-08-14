window.onload = function() {
    let json = null;

    $.getJSON("./social-network.json", (result) => {
        json = result.socialNetworks;
    }).then(() => {
        appear(0);
    });

    function appear(nbr) {
        if (nbr === json.length) {
            nbr = 0;
        }

        if (json[nbr].pseudo === "") {
            nbr = nbr + 1;
        }

        let socialNetwork = json[nbr];

        nbr = nbr + 1;


        $('.social-network .text').text(socialNetwork.pseudo);

        $('.logo').addClass("animate__tada");
        $('.logo').css("background-image", "url(\"assets/img/" + socialNetwork.img + "\")");
        $('.logo').css("display", "block");

        $('.block-text').addClass("animate__flipInX");
        $('.block-text').css("display", "block");

        sleep(3000).then(() => {
            $('.social-network').removeClass(socialNetwork.name);
            $('.social-network .text').text("");

            $('.logo').removeClass("animate__tada");
            $('.block-text').removeClass("animate__flipInX");

            $('.logo').css("display", "none");
            $('.block-text').css("display", "none");

            sleep(50).then(() => {
                appear(nbr);
            });
        });
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};



