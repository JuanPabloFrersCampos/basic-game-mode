"use strict"

mp.events.add("playerDamage", (player, healthLoss, armorLoss) => {
    console.log('ay');
    setTimeout(()=>{
        player.health = 100;
        player.armour = 100;
    },1000);
});

mp.events.add("playerDeath", (player)=> {
});