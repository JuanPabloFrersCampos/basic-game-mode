"use strict"
mp.events.add('render', (bool, player) => {
    player.setInvincible(bool);
});