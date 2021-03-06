"use strict"

//https://wiki.rage.mp/index.php?title=Player::setHeadOverlay
mp.events.addCommand('setBeard', (player, fullText, index, opacity, firstColor, secondColor) => {

    if (isNaN(index) || isNaN(opacity) || isNaN(firstColor) || isNaN(secondColor)){
        player.outputChatBox("Please use this format: /setBeard index opacity(0-1.0) firstColor secondColor");
        player.outputChatBox("Example: /setBeard 15 0.8 10 5");
    }
    else{
        //First arg == 1, because this command is only intended to modify facial hair.
        player.setHeadOverlay(1, [Number(index), Number(opacity), Number(firstColor), Number(secondColor)]);
    }
});

mp.events.addCommand('setbeard', player => {
    player.outputChatBox("Please use /setBeard instead");
});

mp.events.addCommand('me', (player, fullText) => {
    console.log(fullText);
    console.log(typeof(fullText));
    player.outputChatBox(`${player.name} !{F702FF} ${fullText}`);
});

