"use strict"
mp.events.add('setMeInvincible', (booleano, player) => {
    player.setInvincible(booleano);
});

mp.events.add("freezePlayer", (booleano, player) => {
    player.freezePosition(booleano);
})