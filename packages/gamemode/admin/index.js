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

mp.events.addCommand('adminservicio', (player, fullText) => {
    //Falta verificar si el usuario es administrador o no.

    //Si no está en servicio, almacena la vida que tiene, luego lo hace inmortal. Si está en servicio, le setea la vida pre-servicio. Hay que almacenar esto en la BDD, y verificar las comprobaciones.
    /* if (player.enServicio == false){ */
        let vidaPreServicioAdmin = player.health;
        let nombreJugador = player.name;
        player.health = 10000;
        player.name = `!{0804FF}${player.name}`;
    /* } */
/*     else{
        player.health = vidaPreServicioAdmin;
        player.name = `!{FFFFFF}${player.name}`;
    } */
})