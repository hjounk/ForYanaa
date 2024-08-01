$(document).ready(function () {
    // Handle hover effect
    $('.container').on('mouseenter', '.card', function () {
        $(this).stop().animate({
            top: '-90px'
        }, 'slow');
        
        // Display the letter when mouse enters the card
        var letter = $(this).data('letter');
        $('.letter-display').text(letter);
    }).on('mouseleave', '.card', function () {
        $(this).stop().animate({
            top: 0
        }, 'slow');
        
        // Clear the letter display when mouse leaves the card
        $('.letter-display').text('');
    });
});
