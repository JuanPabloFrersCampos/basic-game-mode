"use strict"
mp.events.add('setMeInvincible', (booleano, player) => {
    player.setInvincible(booleano);
});

mp.events.add("congelar", (booleano, entity) => {
    entity.freezePosition(booleano);
});

mp.events.add("setClima", clima => {
    mp.world.weather = clima;
});

mp.events.add("getMoney", player => {
    return player.getMoney();
});

mp.events.add("setMoney", (entity, dineroPreSeteo, nuevaCantidadDeDinero) => {
    entity.local.setMoney(dineroPreSeteo + (Math.floor(Number(nuevaCantidadDeDinero))));
});