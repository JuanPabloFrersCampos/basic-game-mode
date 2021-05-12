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
    //Falta verificar si el usuario es administrador o no.
    let vidaPreServicioAdmin;
    let nombreJugador;
    let chalecoPreServicioAdmin;
    //Solo para testear provisoriamente:
    player.enServicioAdmin = false;
    
    //Si no está en servicio, almacena la vida que tiene, luego lo hace inmortal. Si está en servicio, le setea la vida pre-servicio. Hay que almacenar esto en la BDD, y verificar las comprobaciones.
    if (player.enServicioAdmin == false){
        console.log(player);
        console.log(typeof(player));
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