// Play/Pause Button
$(document).ready(function() {
    var playing = false;
    $("#play-pause").on("click", function() {
        if (playing == false) {
            document.getElementById('audio-player').play();
            playing = true;
            $(this).removeClass("glyphicon-play");
            $(this).addClass("glyphicon-pause");

        } else {
            document.getElementById('audio-player').pause();
            playing = false;
            $(this).removeClass("glyphicon-pause");
            $(this).addClass("glyphicon-play");
        }
        });
});
// Mute Button
$(document).ready(function() {
    var mute = false;
    $("#volume-off").on("click", function(){
        if(audio-muted == false){
            document.getElementById('audio-player').muted = true;
            mute = true;
        } else{
            document.getElementById('audio-player').muted = false;
            mute = false;
        }
    });
});
// Volume Up
$(document).ready(function() {
    $("#volume-up").on("click", function(){
        document.getElementById('audio-player').volume+=0.1
    });
});
// Volume Down
$(document).ready(function() {
    $("#volume-down").on("click", function(){
        document.getElementById('audio-player').volume-=0.1
    });
});
