(function(){
    function setup(){
        bindCarousel();
    }

    function bindCarousel() {
        $('#myCarousel').carousel({
            interval: 2000
        });
    }

    setup();
})();