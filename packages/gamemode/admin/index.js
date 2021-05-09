mp.events.addCommand("tp", (player, _fulltext, id) => {
    if (!id || isNaN(parseInt(id, 10))) {
        return player.outputChatBox(`Usage: /tp <ID>`)
    }
    let targetPlayer = mp.players.at(parseInt(id));
    if (targetPlayer) {
        player.position = targetPlayer.position;
        player.outputChatBox(`You teleported to ${targetPlayer.name}`);
    }
    else {
        player.outputChatBox(`That player doesn't exist`)
    };
})