
$(function() {

    $('.jcarousel').jcarousel({
        $('.jcarousel-arrow-right').click( function() {
        $('.jcarousel').jcarousel('scroll', '+=1');
        })

        $('.jcarousel-arrow-left').click( function() {
        $('.jcarousel').jcarousel('scroll', '-=1');
        })

    });

});


 /* Select jQuery */

 (function($) {
$(function() {

  $('select, option').styler(
    {
        $('.select1').on('click', function(){
                $('.photo1').show();
        });
         $('.select2').on('click', function(){
                $('.photo2').show();
        });
          $('.select3').on('click', function(){
                $('.photo3').show();
        });
           $('.select4').on('click', function(){
                $('.photo4').show();
        });
    });

});
})(jQuery);

/* End Select */



/* MENU */

$(function(){
    var $links = $('.menu a');
    $links.on('click', function(){
        var $submenu = $(this).siblings('.submenu');
        e.preventDefault();
        $submenu.slideToggle(); 
    });
});

/* END MENU */