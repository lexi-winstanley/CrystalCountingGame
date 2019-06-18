/*var crystalsGame = {
    wins : 0,
    losses : 0,
    randomTarget : function() {
        Math.trunc(Math.random());
        return;
    },
    purpleCrystal : $('#purpleCrystal').val(),
    greenCrystal : ,
    redCrystal : ,
    blueCrystal : ,


}; */

var wins = 0;
var losses = 0;
var currentScore = 0;
var targetScore;



//sets four random values 1-12 in an array which are then assigned to crystals
function setCrystalValue() {
    var crystalValues = [];
    while (crystalValues.length < 4) {
        var crystalNumber = Math.trunc(Math.random() * 12) + 1;
        if (!crystalValues.includes(crystalNumber)) {
            crystalValues.push(crystalNumber);
        } else {
            return;
        }
    }
    $('#purpleCrystal').attr('data-crystalValue', crystalValues[0]);
    $('#greenCrystal').attr('data-crystalValue', crystalValues[1]);
    $('#redCrystal').attr('data-crystalValue', crystalValues[2]);
    $('#blueCrystal').attr('data-crystalValue', crystalValues[3]);
    console.log(crystalValues[0]);
    console.log(crystalValues[1]);
    console.log(crystalValues[2]);
    console.log(crystalValues[3]);
}

//sets the target score to a random number between 19 and 120 and updates appropriate HTML
function setTarget() {
    targetScore = Math.trunc(Math.random() * 111) + 19;
    $('#targetScore').html(targetScore);
}

function updateStats() {
    $('#winsText').html(wins);
    $('#lossesText').html(losses);
}

function setGame() {
    currentScore = 0;
    $('#currentScore').html(currentScore);
    updateStats();
    setCrystalValue();
    setTarget();
}

setGame();

$('.crystalGraphic').on('click', function(event) {
    event.preventDefault();
    $('.gameLeft').addClass('hide');
    $('.gameRight').addClass('noInstructions');
    $('.targetTotal').addClass('rowLayout');
    $('.currentTotal').addClass('rowLayout');
    $('#statMessage').text('');
    var newPoints = parseInt($(this).attr('data-crystalValue'));
    if ((currentScore + newPoints) < targetScore) {
        currentScore = parseInt(parseInt(currentScore) + newPoints);
        $('#currentScore').html(currentScore);
    }  else if ((currentScore + newPoints) === targetScore) {
        wins++;
        var oldTarget = targetScore;
        setGame();
        $('#statMessage').text('You won the last game by matching the target score of ' + oldTarget + '.');
    } else {
        currentScore = parseInt(parseInt(currentScore) + newPoints);
        var oldTarget = targetScore;
        var oldCurrent = currentScore;
        losses++;
        setGame();
        $('#statMessage').text('You lost the last game. The target was ' + oldTarget + ' your score was ' + oldCurrent + '.');
    }
});








