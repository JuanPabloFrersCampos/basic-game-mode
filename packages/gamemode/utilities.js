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

mp.events.addCommand('car', (player, vehicleName) => {
    const model = mp.joaat(vehicleName);

    const veh = mp.vehicles.new(model, player.position, { dimension: player.dimension, heading: player.heading });
});