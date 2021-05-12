"use strict"

mp.events.addCommand('resucitarme', player => {
    player.spawn(player.position);
});

mp.events.addCommand('hpme', (player) => {
    player.health =50;
});

mp.events.addCommand('armorme', (player) => {
    player.armour = 100;
});