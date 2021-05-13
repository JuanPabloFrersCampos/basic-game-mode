"use strict"
mp.events.add('setMeInvincible', (booleano, player) => {
    player.setInvincible(booleano);
});

mp.events.add("congelar", (booleano, entity) => {
    entity.freezePosition(booleano);
});