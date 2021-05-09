"use strict"

mp.events.addCommand('resucitar', player => {
    player.spawn(player.position);
});