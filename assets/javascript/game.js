var spacebar = true;
var character;
var firstOpp;
var secondOpp;
var oppThree;
var charAttackPower;
var oppAttackPower;
var crackhead = {
    name: "Crackhead",
    image: `<img src="assets/images/dookemon-crackhead2.png" alt="Crackhead">`,
    pop: `<img id="cshadow" src="assets/images/dookemon-crackhead.png" alt="Crackhead"></img>`,
    song: `<audio controls style="display:none" autoplay><source src="assets/audio/cracksong.mp3" type="audio/mpeg"></audio>`,
    attack: "Sidewalk Defecation",
    power: "Stamina",
    cash: 20,
    nickname: "crack",
    dealer: 50,
    hoe: 100,
    pimp: 200,
}
var dealer = {
    name: "Drug Dealer",
    image: `<img src="assets/images/dookemon-drugdealer2.png" alt="Drug Dealer">`,
    pop: `<img id="dshadow" src="assets/images/dookemon-drugdealer.png" alt="Drug Dealer">`,
    song: `<audio controls style="display:none" autoplay><source src="assets/audio/dealersong.mp3" type="audio/mpeg"></audio>`,
    attack: "Slangin' Dope",
    power: "Hustlin",
    cash: 100,
    nickname: "dealer",
    crack: 9,
}
var hoe = {
    name: "Hoe",
    image: `<img src="assets/images/dookemon-hoe2.png" alt="Hoe">`,
    pop: `<img id="hshadow" src="assets/images/dookemon-hoe.png" alt="Hoe">`,
    song: `<audio controls style="display:none" autoplay><source src="assets/audio/hoesong.mp3" type="audio/mpeg"></audio>`,
    attack: "Working Corners",
    power: "Ho'ing",
    cash: 200,
    nickname: "hoe",
    crack: 1,
}
var pimp = {
    name: "Pimp",
    image: `<img src="assets/images/dookemon-pimp2.png" alt="Pimp">`,
    pop: `<img id="pshadow" src="assets/images/dookemon-pimp.png" alt="Pimp">`,
    song: `<audio controls style="display:none" autoplay><source src="assets/audio/pimpsong.mp3" type="audio/mpeg"></audio>`,
    attack: "Slap & Collect",
    power: "Shinin'",
    cash: 400,
    nickname: "pimp",
    crack: 1,
}
var playerCash;
var playerCashTwo;
var opponentCash;
var playAttack = true;
var availableChars = ["Crackhead", "Drug Dealer", "Hoe", "Pimp"];
var availableChars = [crackhead, dealer, hoe, pimp];
var flagOne;

function chooseChar(){
    document.onkeypress = function(e){
        if(e.keyCode == 32 && spacebar == true){
            $("#midbox").html(`<div id="crackhead" class="choice"></div>
            <div id="dealer" class="choice"></div>
            <div id="hoe" class="choice"></div>
            <div id="pimp" class="choice"></div>
            `);
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
    setTimeout(oppMusic, 1400);
    $(".topboxTwo").html(`<p class="toptextTwo">You chose ${character.name}!</p>`);
    $("#midbox").html(`<div class="oppContain">
    <div id="oppOne" class="opponents"></div>
    <div id="oppTwo" class="opponents"></div>
    <div id="oppThree" class="opponents"></div>
    </div>
    `);
    $(".bottomboxTwo").html(`<p class="bottomtextTwo">Now it's time to pick your first opponent!</p>`);
    opponents();
}

function killMusic(){
    $("#song").html(`<audio controls style="display:none" autoplay><source src="" type="audio/mpeg"></audio>`);
}

function oppMusic(){
    $("#song").html(`<audio controls style="display:none" autoplay><source src="assets/audio/enemysong.mp3" type="audio/mpeg"></audio>`);
}

function gameMusic(){
    $("#song").html(firstOpp.song);
}

function opponents(){
    if (character == crackhead){
        $("#oppOne").html(`<img id="dshadow" src="assets/images/dookemon-drugdealer.png" alt="Drug Dealer">`);
        $("#oppTwo").html(`<img id="hshadow" src="assets/images/dookemon-hoe.png" alt="Hoe">`);
        $("#oppThree").html(`<img id="pshadow" src="assets/images/dookemon-pimp.png" alt="Pimp">`);
    } if (character == dealer){
        $("#oppOne").html(`<img id="cshadow" src="assets/images/dookemon-crackhead.png" alt="Crackhead">`);
        $("#oppTwo").html(`<img id="hshadow" src="assets/images/dookemon-hoe.png" alt="Hoe">`);
        $("#oppThree").html(`<img id="pshadow" src="assets/images/dookemon-pimp.png" alt="Pimp">`);
    } if (character == hoe){
        $("#oppOne").html(`<img id="cshadow" src="assets/images/dookemon-crackhead.png" alt="Crackhead">`);
        $("#oppTwo").html(`<img id="dshadow" src="assets/images/dookemon-drugdealer.png" alt="Drug Dealer">`);
        $("#oppThree").html(`<img id="pshadow" src="assets/images/dookemon-pimp.png" alt="Pimp">`);
    } if (character == pimp){
        $("#oppOne").html(`<img id="cshadow" src="assets/images/dookemon-crackhead.png" alt="Crackhead">`);
        $("#oppTwo").html(`<img id="dshadow" src="assets/images/dookemon-drugdealer.png" alt="Drug Dealer">`);
        $("#oppThree").html(`<img id="hshadow" src="assets/images/dookemon-hoe.png" alt="Hoe">`);
    }
    $("#cshadow").on("click", function(){
        $(".card").html(`<img src="assets/images/dookemon-crackhead.png" alt="Crackhead">`);
        $(".popup-overlay, .popup-content").addClass("active");
        firstOpp = crackhead;
        charAttackPower = character.crack;
        oppAttackPower = firstOpp[character.nickname];
        flagOne = true;
    });
    $("#dshadow").on("click", function(){
        $(".card").html(`<img src="assets/images/dookemon-drugdealer.png" alt="Drug Dealer">`);
        $(".popup-overlay, .popup-content").addClass("active");
        firstOpp = dealer;
        charAttackPower = character.dealer;
        oppAttackPower = firstOpp[character.nickname];
        flagOne = true;
    });
    $("#hshadow").on("click", function(){
        $(".card").html(`<img src="assets/images/dookemon-hoe.png" alt="Hoe">`);
        $(".popup-overlay, .popup-content").addClass("active");
        firstOpp = hoe;
        charAttackPower = character.hoe;
        oppAttackPower = firstOpp[character.nickname];
        flagOne = true;
    });
    $("#pshadow").on("click", function(){
        $(".card").html(`<img src="assets/images/dookemon-pimp.png" alt="Pimp">`);
        $(".popup-overlay, .popup-content").addClass("active");
        firstOpp = pimp;
        charAttackPower = character.pimp;
        oppAttackPower = firstOpp[character.nickname];
        flagOne = true;
    });
    $(".exit").on("click", function(){
        $(".popup-overlay, .popup-content").removeClass("active");
    });
    $(".choose").on("click", function(){
        setTimeout(killMusic, 1400);
        $("#sound").html(`<audio controls style="display:none" autoplay><source src="assets/audio/charselected.mp3" type="audio/mpeg"></audio>`);
        availableChars = availableChars.filter(e => e !== character);
        availableChars = availableChars.filter(e => e !== firstOpp);
        $(".choose").attr('class', 'chooseTwo');
        if (flagOne = true){
            play();
        };
        $(".popup-overlay, .popup-content").removeClass("active");
    });
}

function play(){
    setTimeout(gameMusic, 1400);
    flagOne = false;
    playerCash = character.cash;
    opponentCash = firstOpp.cash;
    $(".topboxTwo").html(`<p class="toptextTwo">Now let's fight!</p>`);
    $("#midbox").html(`<button class="attack">Attack</button>
    <div id="charCash"></div>
    <div id="oppCash"></div>
    <div class="playContain">
    <div id="fighter" class="regPlay"></div>
    <div id="defender" class="regPlay"></div>
    </div>`);
    $("#charCash").html(`$${playerCash}`);
    $("#oppCash").html(`$${opponentCash}`);
    $("#fighter").html(character.image);
    $("#defender").html(firstOpp.image);
    $(".bottomboxTwo").html(`<p class="bottomtextTwo">Click attack to start ${character.attack} on that ${firstOpp.name}!</p>`);
    firstFight();
}

function firstFight(){
    $(".attack").on("click", function(){
        if (playAttack == true){
            $(".bottomboxTwo").html(`<p class="bottomtextTwo">${character.name} used ${character.attack} on that ${firstOpp.name}!</p>`);
            console.log("attack");
            opponentCash -= charAttackPower;
            $("#oppCash").html(`$${opponentCash}`);
            playAttack = false;
            setTimeout(firstCounterAttack, 2000);
        }
    });
}

function firstCounterAttack(){
    console.log("Counter attack");
    if (opponentCash < 1){
        playAttack = false;
        $(".topboxTwo").html(`<p class="toptextTwo">First Round Winner!</p>`);
        $(".bottomboxTwo").html(`<p class="bottomtextTwo">${character.name} defeated ${firstOpp.name}!</p>`);
        $(".attack").text("Choose Next Opponent").attr('class', 'attackTwo');
        playerCashTwo = playerCash
        chooseOppTwo();
    } else {
        $(".bottomboxTwo").html(`<p class="bottomtextTwo">${firstOpp.name} counter attacked with ${firstOpp.attack}!</p>`);
        playAttack = true;    
        playerCash -= oppAttackPower;
        $("#charCash").html(`$${playerCash}`);
    }
}

function chooseOppTwo(){
    $(".attackTwo").on("click", function(){
        setTimeout(oppMusic, 1400);
        $(".topboxTwo").html(`<p class="toptextTwo">${character.name}'s Next Opponent!</p>`);
        $("#midbox").html(`<div class="oppContain"></div>`);
        for (i=0; i<availableChars.length; i++){
            $('.oppContain').append(`<div class="opponentsTwo">${availableChars[i].pop}</div>`);
        }
        $(".bottomboxTwo").html(`<p class="bottomtextTwo">Now it's time to pick your second opponent!</p>`);
    });
    $(document).on("click", "#cshadow", function(){
        $(".card").html(`<img src="assets/images/dookemon-crackhead.png" alt="Crackhead">`);
        $(".popup-overlay, .popup-content").addClass("active");
        secondOpp = crackhead;
        charAttackPower = character.crack;
        oppAttackPower = secondOpp[character.nickname];
    });
    $(document).on("click", "#dshadow", function(){
        $(".card").html(`<img src="assets/images/dookemon-drugdealer.png" alt="Drug Dealer">`);
        $(".popup-overlay, .popup-content").addClass("active");
        secondOpp = dealer;
        charAttackPower = character.dealer;
        oppAttackPower = secondOpp[character.nickname];
    });
    $(document).on("click", "#hshadow", function(){
        $(".card").html(`<img src="assets/images/dookemon-hoe.png" alt="Hoe">`);
        $(".popup-overlay, .popup-content").addClass("active");
        secondOpp = hoe;
        charAttackPower = character.hoe;
        oppAttackPower = secondOpp[character.nickname];
    });
    $(document).on("click", "#pshadow", function(){
        $(".card").html(`<img src="assets/images/dookemon-pimp.png" alt="Pimp">`);
        $(".popup-overlay, .popup-content").addClass("active");
        secondOpp = pimp;
        charAttackPower = character.pimp;
        oppAttackPower = secondOpp[character.nickname];
    });
    $(".exit").on("click", function(){
        $(".popup-overlay, .popup-content").removeClass("active");
    });
    $(document).on("click",".chooseTwo", function(){
        setTimeout(killMusic, 1400);
        opponentCash = secondOpp.cash;
        $("#sound").html(`<audio controls style="display:none" autoplay><source src="assets/audio/charselected.mp3" type="audio/mpeg"></audio>`);
        availableChars = availableChars.filter(e => e !== secondOpp);
        playTwo();
        $(".popup-overlay, .popup-content").removeClass("active");
    });
}

function playTwo(){
    setTimeout(gameMusic, 1400);
    $(".topboxTwo").html(`<p class="toptextTwo">Now let's fight!</p>`);
    $("#midbox").html(`<button class="attack">Attack</button>
    <div id="charCash"></div>
    <div id="oppCash"></div>
    <div class="playContain">
    <div id="fighter" class="regPlay"></div>
    <div id="defender" class="regPlay"></div>
    </div>`);
    $("#charCash").html(`$${playerCashTwo}`);
    $("#oppCash").html(`$${opponentCash}`);
    $("#fighter").html(character.image);
    $("#defender").html(secondOpp.image);
    $(".bottomboxTwo").html(`<p class="bottomtextTwo">Click attack to start ${character.attack} on that ${secondOpp.name}!</p>`);
    playAttack = true;
    secondFight();
}

function secondFight(){
    opponentCash = secondOpp.cash;
    $(".attack").on("click", function(){
        if (playAttack == true){
            $(".bottomboxTwo").html(`<p class="bottomtextTwo">${character.name} used ${character.attack} on that ${secondOpp.name}!</p>`);
            console.log("attack");
            opponentCash -= charAttackPower;
            $("#oppCash").html(`$${opponentCash}`);
            playAttack = false;
            setTimeout(secondCounterAttack, 2000);
        }
    });
}

function secondCounterAttack(){
    console.log("Counter attack");
    if (opponentCash < 1){
        playAttack = false;
        $(".topboxTwo").html(`<p class="toptextTwo">Second Round Winner!</p>`);
        $(".bottomboxTwo").html(`<p class="bottomtextTwo">${character.name} defeated ${secondOpp.name}!</p>`);
        $(".attack").text("Choose Next Opponent").attr('class', 'attackThree');;
        chooseOppThree();
    } else {
        $(".bottomboxTwo").html(`<p class="bottomtextTwo">${secondOpp.name} counter attacked with ${secondOpp.attack}!</p>`);
        playAttack = true;    
        playerCashTwo -= oppAttackPower;
        $("#charCash").html(`$${playerCashTwo}`);
    }
}

function chooseOppThree(){
    $(document).on("click", ".attackThree", function(){
        setTimeout(oppMusic, 1400);
        $(".topboxTwo").html(`<p class="toptextTwo">${character.name}'s Next Opponent!</p>`);
        $("#midbox").html(`<div class="oppContain"></div>`);
        for (i=0; i<availableChars.length; i++){
            $('.oppContain').append(`<div class="opponentsThree">${availableChars[i].pop}</div>`);
        }
        $(".bottomboxTwo").html(`<p class="bottomtextTwo">Now it's time to pick your third opponent!</p>`);
    });
    $(document).on("click", "#cshadow", function(){
        $(".card").html(`<img src="assets/images/dookemon-crackhead.png" alt="Crackhead">`);
        $(".popup-overlay, .popup-content").addClass("active");
        thirdOpp = crackhead;
        charAttackPower = character.crack;
        oppAttackPower = thirdOpp[character.nickname];
    });
    $(document).on("click", "#dshadow", function(){
        $(".card").html(`<img src="assets/images/dookemon-drugdealer.png" alt="Drug Dealer">`);
        $(".popup-overlay, .popup-content").addClass("active");
        thirdOpp = dealer;
        charAttackPower = character.dealer;
        oppAttackPower = thirdOpp[character.nickname];
    });
    $(document).on("click", "#hshadow", function(){
        $(".card").html(`<img src="assets/images/dookemon-hoe.png" alt="Hoe">`);
        $(".popup-overlay, .popup-content").addClass("active");
        thirdOpp = hoe;
        charAttackPower = character.hoe;
        oppAttackPower = thirdOpp[character.nickname];
    });
    $(document).on("click", "#pshadow", function(){
        $(".card").html(`<img src="assets/images/dookemon-pimp.png" alt="Pimp">`);
        $(".popup-overlay, .popup-content").addClass("active");
        thirdOpp = pimp;
        charAttackPower = character.pimp;
        oppAttackPower = thirdOpp[character.nickname];
    });
    $(".exit").on("click", function(){
        $(".popup-overlay, .popup-content").removeClass("active");
    });
    $(document).on("click",".chooseTwo", function(){
        setTimeout(killMusic, 1400);
        opponentCash = thirdOpp.cash;
        $("#sound").html(`<audio controls style="display:none" autoplay><source src="assets/audio/charselected.mp3" type="audio/mpeg"></audio>`);
        playThree();
        $(".popup-overlay, .popup-content").removeClass("active");
    });
}

function playThree(){
    setTimeout(gameMusic, 1400);
    $(".topboxTwo").html(`<p class="toptextTwo">Now let's fight!</p>`);
    $("#midbox").html(`<button class="attack">Attack</button>
    <div id="charCash"></div>
    <div id="oppCash"></div>
    <div class="playContain">
    <div id="fighter" class="regPlay"></div>
    <div id="defender" class="regPlay"></div>
    </div>`);
    $("#charCash").html(`$${playerCashTwo}`);
    $("#oppCash").html(`$${opponentCash}`);
    $("#fighter").html(character.image);
    $("#defender").html(thirdOpp.image);
    $(".bottomboxTwo").html(`<p class="bottomtextTwo">Click attack to start ${character.attack} on that ${thirdOpp.name}!</p>`);
    playAttack = true;
    thirdFight();
}

function thirdFight(){
    opponentCash = thirdOpp.cash;
    $(".attack").on("click", function(){
        if (playAttack == true){
            $(".bottomboxTwo").html(`<p class="bottomtextTwo">${character.name} used ${character.attack} on that ${thirdOpp.name}!</p>`);
            console.log("attack");
            opponentCash -= charAttackPower;
            $("#oppCash").html(`$${opponentCash}`);
            playAttack = false;
            setTimeout(thirdCounterAttack, 2000);
        }
    });
}

function thirdCounterAttack(){
    console.log("Counter attack");
    if (opponentCash < 1){
        playAttack = false;
        $(".topboxTwo").html(`<p class="toptextTwo">Third Round Winner!</p>`);
        $(".bottomboxTwo").html(`<p class="bottomtextTwo">${character.name} defeated ${thirdOpp.name}!</p>`);
        $(".attack").text("Collect Your Trophy!");
        chooseOppThree();
    } else {
        $(".bottomboxTwo").html(`<p class="bottomtextTwo">${thirdOpp.name} counter attacked with ${thirdOpp.attack}!</p>`);
        playAttack = true;    
        playerCashTwo -= oppAttackPower;
        $("#charCash").html(`$${playerCashTwo}`);
    }
}