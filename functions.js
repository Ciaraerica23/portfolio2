$(document).ready(function() {

    $('.header-div, .header-div-about, .header-div-contact, .header-div-work').addClass('slide-down');

    setInterval(function() {
        $('.ic1').toggleClass('fade-in-out');
    }, 2500);
    setInterval(function() {
        $('.ic2').toggleClass('fade-in-out');
    }, 5000);

    function dropInElements() {
        $('.drop-in').each(function(index) {
            var delay = index * 500; 
            var element = $(this);
            setTimeout(function() {
                element.addClass('active');
            }, delay);
        });
    }
    dropInElements();
    
    
    
 
    let isPaused = false; 
    
 
    function togglePausePlay() {

        const video = $('video')[0];
    

        if (isPaused) {
            video.play();
        } else {
            video.pause();
        }
    

        const playPauseIcon = $('#playPauseIcon');
        if (isPaused) {
            playPauseIcon.attr('src', 'images/icons8-pause-64.png');
            playPauseIcon.attr('alt', 'Pause');
        } else {
            playPauseIcon.attr('src', 'images/icons8-play-button-64.png');
            playPauseIcon.attr('alt', 'Play');
        }
    

        $('.ic1, .ic2').toggleClass('fade-in-out');
    

        isPaused = !isPaused;
    }
    

    $('#pausePlayButton').on('click', function(event) {
        event.preventDefault(); 
        togglePausePlay();
    });


});
