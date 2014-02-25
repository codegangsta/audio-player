$(document).ready(function() {
    var playing = false;

    $('#play-pause').on("click", function() {
        if (playing == false) {
            document.getElementById('audioPlayer').play();
            playing = true;
            $(this).removeClass("glyphicon-play");
            $(this).addClass("glyphicon-pause");

        } else {
            document.getElementById('audioPlayer').pause();
            playing = false;
            $(this).removeClass("glyphicon-pause");
            $(this).addClass("glyphicon-play");
        }


    });
});