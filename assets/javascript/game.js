var spacebar = true;

function chooseChar(){
    document.onkeypress = function(e){
        if(e.keyCode == 32 && spacebar == true){
            $("#sound").html(`<audio controls style="display:none" autoplay><source src="assets/audio/choosechar.mp3" type="audio/mpeg"></audio>`);
            $("#song").html(`<audio controls style="display:none" autoplay><source src="assets/audio/charsong.mp3" type="audio/mpeg"></audio>`);
            $(".topbox").removeClass();
            $(".toptext").removeClass();
            $("#topbox").addClass("topboxTwo");
            $("#toptext").addClass("topboxTwo");
            $(".bottombox").removeClass();
            $(".bottomtext").removeClass();
            $("#bottombox").addClass("bottomboxTwo");
            $("#bottomtext").addClass("bottomboxTwo");
            $(".topboxTwo").html(`<p class="toptextTwo">Choose Your Character!</p>`);
            $(".bottomboxTwo").html(`<p class="bottomtextTwo">Click to view stats, then press OK to select that dook&eacute;mon!</p>`);
            $("#crackhead").html(`<img id="cshadow" src="assets/images/dookemon-crackhead.png" alt="Crackhead">`);
            $("#dealer").html(`<img id="dshadow" src="assets/images/dookemon-drugdealer.png" alt="Drug Dealer">`);
            $("#hoe").html(`<img id="hshadow" src="assets/images/dookemon-hoe.png" alt="Hoe">`);
            $("#pimp").html(`<img id="pshadow" src="assets/images/dookemon-pimp.png" alt="Pimp">`);
            spacebar = false;
        }
    }
}

chooseChar();
