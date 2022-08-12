window.onload = function() {
    setTimeout(function() {
        $('.logo').css('display', 'block');
        $('.block-text').css('display', 'block');
    }, 3000)

    setTimeout(function() {
        $('.block-text').css('display', 'block');
    }, 4000)


    /*$.getJSON('./assets/json/social-network.json', function(json) {
        let socialNetworks = json.socialNetworks;
        let html = '';

        for (let i = 0; i < socialNetworks; i++) {
            let socialNetwork = socialNetworks[i];

            html += '<div class="social-network ' + socialNetwork.name + '">'
            html += '</div>';
        }
    });*/
};