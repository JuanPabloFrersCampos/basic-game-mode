"use strict"
mp.events.add('setMeInvincible', (booleano, player) => {
    player.setInvincible(booleano);
});

mp.events.add("congelarJugador", (booleano, player) => {
    player.freezePosition(booleano);
});

mp.events.add("congelarVehiculo", (booleano, player) => {
    player.freezePosition(booleano);
})