"use strict"

//Me basé en https://wiki.rage.mp/index.php?title=Getting_Started_with_Events#Introduction para hacerlo de esta manera
mp.events.add('setBeard', (player, index, opacity, firstColor, secondColor) => {
    player.setHeadOverlay(1, Number(index), Number(opacity), Number(firstColor), Number(secondColor));
});