$(document).ready(function(){
    $('.slide-block').slick({
        dots: false,
        infinite: true,
        /*    autoplay: true,
            autoplaySpeed: 4000,*/
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
    });


    $('.slide-rew-block').slick({
        dots: true,arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.slider-partner-block').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
            autoplay: true,
            autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }]
    });



    $(window).scroll(function () {
        var tops = $(this).scrollTop();
        //console.log(tops);
        if(tops > 1){$("header").addClass("active");}else{$("header").removeClass("active");}
    });
    $(window).scroll();


    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: {lat: 50.4591959, lng: 30.4908411}
        });
/*        var marker = new google.maps.Marker({
            map: map,
            position: {lat: 50.4591959, lng: 30.4908411}
        });*/
        var geocoder = new google.maps.Geocoder();

 $(document).on("click",".block-adress a",function () {
     $(".block-adress a").removeClass("active");
     $(this).addClass("active");
     var address = $(this).attr("addresat");
     console.log(address);
            geocodeAddress(geocoder, map, address);
        });
 $(".first-a").click();
    }

    function geocodeAddress(geocoder, resultsMap, address) {

        geocoder.geocode({'address': address}, function(results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
    initMap();
});

