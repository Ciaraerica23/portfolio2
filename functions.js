$(document).ready(function() {
    // Slide down all header divs
    $('.header-div, .header-div-about, .header-div-contact, .header-div-work').addClass('slide-down');

    // Toggle fade-in-out classes on icons periodically
    setInterval(function() {
        $('.ic1').toggleClass('fade-in-out');
    }, 2500);
    setInterval(function() {
        $('.ic2').toggleClass('fade-in-out');
    }, 5000);

    // Drop in elements with a delay
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
    
    
    
    // Define pause/play button behavior
    let isPaused = false; // Track pause/play state
    
    // Function to toggle pause/play state
    function togglePausePlay() {
        // Get the video element
        const video = $('video')[0];
    
        // Toggle video playback
        if (isPaused) {
            video.play();
        } else {
            video.pause();
        }
    
        // Change button icon based on the state
        const playPauseIcon = $('#playPauseIcon');
        if (isPaused) {
            playPauseIcon.attr('src', 'icons8-pause-64.png');
            playPauseIcon.attr('alt', 'Pause');
        } else {
            playPauseIcon.attr('src', 'icons8-play-button-64.png');
            playPauseIcon.attr('alt', 'Play');
        }
    
        // Toggle animations on icons
        $('.ic1, .ic2').toggleClass('fade-in-out');
    
        // Toggle the isPaused flag
        isPaused = !isPaused;
    }
    
    // Add event listener to the play/pause button
    $('#pausePlayButton').on('click', function(event) {
        event.preventDefault(); // Prevent default anchor link behavior
        togglePausePlay();
    });


});
