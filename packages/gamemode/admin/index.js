"use strict"
mp.events.addCommand("tp", (player, _fulltext, id) => {
    if (!id || isNaN(id)) {
        return player.outputChatBox(`Usage: /tp <ID>`);
    }
    let targetPlayer = mp.players.at(id);
    if (targetPlayer) {
        player.position = targetPlayer.position;
        player.outputChatBox(`You teleported to ${targetPlayer.name}`);
    }
    else {
        player.outputChatBox(`That player doesn't exist`);
    };
});

mp.events.addCommand('servicioadmin', (player, fullText) => {
    if (!player.checkAdminRank(1)){ 
        return player.pushError(`No tiene permitido usar esto.`);
    }
    let vidaPreServicioAdmin;
    let nombreJugador;
    let chalecoPreServicioAdmin;
    
    //Si no está en servicio, almacena la vida que tiene, luego lo hace inmortal.
    if (player.enServicioAdmin == false){
        vidaPreServicioAdmin = player.health;
        nombreJugador = player.name;
        player.health = 100;
        player.armour = 100;
        player.name = `!{0804FF}${player.name}`;
        player.outputChatBox(`${player.name}`);
        player.call('setMeInvincible', ([true, player]));
    }
    else{
        player.health = vidaPreServicioAdmin;
        player.armor = chalecoPreServicioAdmin;
        player.name = `!{FFFFFF}${player.name}`;
        player.outputChatBox(`${player.name}`);
        player.call('setMeInvincible', [false, player]);
    }
});