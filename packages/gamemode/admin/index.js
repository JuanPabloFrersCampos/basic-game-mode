"use strict"
mp.events.addCommand("tp", (player, _fulltext, id) => {
    /*     if (player.user.adminLevel <= enums.ADMIN_LEVELS.GAME_OPERATOR) {
        return player.outputChatBox(`No tiene permitido usar esto.`);
    } */
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
    /*     if (player.user.adminLevel <= enums.ADMIN_LEVELS.GAME_OPERATOR) {
        return player.outputChatBox(`No tiene permitido usar esto.`);
    } */
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
        player.call('setMeInvincible', ([false, player]));
    }
});

//A este cmd yo le agregaría que a todos los GO, les aparezca que X, resucitó a X.
mp.events.addCommand('resucitar', (player, _fulltext, id) => {
/*     if (player.user.adminLevel <= enums.ADMIN_LEVELS.GAME_OPERATOR) {
        return player.outputChatBox(`No tiene permitido usar esto.`);
    } */
    if (!id || isNaN(id)){
        return player.outputChatBox(`Uso: /resucitar ID`);
    }
    let targetPlayer = mp.players.at(id);
    if (targetPlayer.health > 0){
        return player.outputChatBox(`Esa persona está viva!`);
    }
    targetPlayer.spawn(targetPlayer.position);
    targetPlayer.health = 100;
});

//Falta la forma de contabilizar el tiempo en jail, y el tiempo restante.
//Además habría que crear un atributo tipo player.inJail == true, y setearlo.
mp.events.addCommand('jail', (player, _fulltext, id, tiempo) => {
    /*     if (player.user.adminLevel <= enums.ADMIN_LEVELS.GAME_OPERATOR) {
        return player.outputChatBox(`No tiene permitido usar esto.`);
    } */
    if (!id || isNaN(id) || isNaN(tiempo)){
        return player.outputChatBox(`Uso: /jail ID Tiempo(minutos) razón`);
    }
    let targetPlayer = mp.players.at(id);
    /*if (targetPlayer.user.adminLevel >= enums.ADMIN_LEVELS.MODERATOR){
        player.outputChatBox('No podés usar este comando sobre miembros del staff!');
    } */
    if (targetPlayer.vehicle){
        targetPlayer.removeFromVehicle();
    }
    let razonDeSancion = _fulltext.slice(4);

    mp.players.broadcast(`${targetPlayer.name} fue sancionado por ${razonDeSancion}`+
    ` por ${tiempo} minutos`);
    targetPlayer.position = new mp.Vector3(173.2903, -1003.6, -99.65707);
    targetPlayer.health = 100;
    targetPlayer.dimension = (Math.ceil(Math.random() * 9999));
});

mp.events.addCommand('darvida', (player, _fulltext, id, cantidadDeVida) => {
    /*     if (player.user.adminLevel <= enums.ADMIN_LEVELS.GAME_OPERATOR) {
        return player.outputChatBox(`No tiene permitido usar esto.`);
    } */
    if (!id || isNaN(id) || (!cantidadDeVida) || isNaN(cantidadDeVida) || 
    cantidadDeVida < 0 || cantidadDeVida > 100){
        return player.outputChatBox(`Uso: /darvida ID VIDA(0-100)`);
    }
    let targetPlayer = mp.players.at(id);
    targetPlayer.health = Number(cantidadDeVida);
})

mp.events.addCommand('darchaleco', (player, _fulltext, id, cantidadDeChaleco) => {
    /*     if (player.user.adminLevel <= enums.ADMIN_LEVELS.GAME_OPERATOR) {
        return player.outputChatBox(`No tiene permitido usar esto.`);
    } */
    if (!id || isNaN(id) || (!cantidadDeChaleco) || isNaN(cantidadDeChaleco) || 
    cantidadDeChaleco < 0 || cantidadDeChaleco > 100){
        return player.outputChatBox(`Uso: /darchaleco ID CHALECO(0-100)`);
    }
    let targetPlayer = mp.players.at(id);
    targetPlayer.armour = Number(cantidadDeChaleco);
})

