

// portfolio active Start//

var grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item'
    }
})

$('.portfolio-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    grid.isotope({ filter: filterValue });
});

//for portfolio menu active class
$('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
});

// portfolio active End//