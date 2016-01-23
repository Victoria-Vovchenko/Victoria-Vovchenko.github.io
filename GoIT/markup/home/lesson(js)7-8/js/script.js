	/* Form */


$(function(){
    $('input')
        .on('mouseover', function () {
            $(this).siblings('.textForm').addClass('show');
        })
        .on('mouseout', function () {
            $(this).siblings('.textForm').removeClass('show');
        });
    $('.button')
        .on('click', function (e) {
            e.preventDefault();
            $('.textForm').addClass('show');
        });
});

	/* Tabs */


$(function() {
	$('.tab li').on('click', function() {
	$(this).addClass('visible')
	    .siblings().removeClass('visible');
	$('.tabs .text').removeClass('visible')
	    .eq($(this).index()).addClass('visible');
	});
});

	