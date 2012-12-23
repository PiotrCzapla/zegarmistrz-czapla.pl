var languageRedirect = languageRedirect || false, minTop, maxTop;       

$(document).ready(function() {
    // Posistion Subnav
    if ($('#sub-nav').length != 0) {
        if ($('body').width() <= 768) { 
            $('#sub-nav').css({'position' : 'static'});
        } else {
            minTop = $('#content').offset().top;
            maxTop = $('#content').height()+minTop-$('#sub-nav').height();       
            $('#sub-nav').css({'top' : minTop});
            $(window).scroll(positionSubnav);
        }
    }
    // Language Redirect
    if (languageRedirect) {
        if ((navigator.language? navigator.language : navigator.userLanguage).substring(0,2) =='de') {
            window.location.replace("/de/");
        } else {
            window.location.replace("/en/");        
        }
    }
});

function positionSubnav () {
    var currentScroll = $(window).scrollTop();
    if( currentScroll > minTop && currentScroll < maxTop ) {
        $('#sub-nav').css({'top' : '15px'});
    }
    if( currentScroll <= minTop ) {
        $('#sub-nav').css({'top' : minTop-currentScroll});
    }
    if( currentScroll >= maxTop ) {
        $('#sub-nav').css({'top' : maxTop-currentScroll});
    }
}



