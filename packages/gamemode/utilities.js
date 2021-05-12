"use strict"

mp.events.addCommand('resucitarme', player => {
    player.spawn(player.position);
});