var spacebar = true;
var character;
var crackhead = {
    name: "Crackhead",
    image: `<img src="assets/images/dookemon-crackhead.png" alt="Crackhead">`,
    attack: "Sidewalk Defecation",
    power: "Stamina",
    cash: 20,
}
var dealer = {
    name: "Drug Dealer",
    image: `<img src="assets/images/dookemon-drugdealer.png" alt="Drug Dealer">`,
    attack: "Slangin' Dope",
    power: "Hustlin",
    cash: 100,
}
var hoe = {
    name: "Hoe",
    image: `<img src="assets/images/dookemon-crackhead.png" alt="Crackhead">`,
    attack: "Working Corners",
    power: "Ho'ing",
    cash: 200,
}
var pimp = {
    name: "Pimp",
    image: `<img src="assets/images/dookemon-crackhead.png" alt="Crackhead">`,
    attack: "Slap & Collect",
    power: "Shinin'",
    cash: 400,
}
backspace = true;

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
            $(".bottomboxTwo").html(`<p class="bottomtextTwo">Click to view stats, then press "Choose" to select that dook&eacute;mon!</p>`);
            $("#crackhead").html(`<img id="cshadow" src="assets/images/dookemon-crackhead.png" alt="Crackhead">`);
            $("#dealer").html(`<img id="dshadow" src="assets/images/dookemon-drugdealer.png" alt="Drug Dealer">`);
            $("#hoe").html(`<img id="hshadow" src="assets/images/dookemon-hoe.png" alt="Hoe">`);
            $("#pimp").html(`<img id="pshadow" src="assets/images/dookemon-pimp.png" alt="Pimp">`);
            spacebar = false;
            $("#cshadow").on("click", function(){
                $(".card").html(`<img src="assets/images/dookemon-crackhead.png" alt="Crackhead">`);
                $(".popup-overlay, .popup-content").addClass("active");
                character = crackhead;
            });
            $("#dshadow").on("click", function(){
                $(".card").html(`<img src="assets/images/dookemon-drugdealer.png" alt="Drug Dealer">`);
                $(".popup-overlay, .popup-content").addClass("active");
                character = dealer;
            });
            $("#hshadow").on("click", function(){
                $(".card").html(`<img src="assets/images/dookemon-hoe.png" alt="Hoe">`);
                $(".popup-overlay, .popup-content").addClass("active");
                character = hoe;
            });
            $("#pshadow").on("click", function(){
                $(".card").html(`<img src="assets/images/dookemon-pimp.png" alt="Pimp">`);
                $(".popup-overlay, .popup-content").addClass("active");
                character = pimp;
            });
            $(".exit").on("click", function(){
                $(".popup-overlay, .popup-content").removeClass("active");
            });
            $(".choose").on("click", function(){
                setTimeout(killMusic, 1400);
                $("#sound").html(`<audio controls style="display:none" autoplay><source src="assets/audio/charselected.mp3" type="audio/mpeg"></audio>`);
                chooseOpp();
                $(".popup-overlay, .popup-content").removeClass("active");
            });
        }
    }
}

chooseChar();

function chooseOpp(){
    $(".topboxTwo").html(`<p class="toptextTwo">You chose ${character.name}!</p>`);
    $("#midbox").html(``);
    $(".bottomboxTwo").html(`<p class="bottomtextTwo">Now it's time to pick your first opponent!</p>`);
}

function killMusic(){
    $("#song").html(`<audio controls style="display:none" autoplay><source src="" type="audio/mpeg"></audio>`);
}