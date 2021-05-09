mp.events.addCommand("tp", (player, _fulltext, id) => {
    if (!id || isNaN(id)) {
        return player.outputChatBox(`Usage: /tp <ID>`)
    }
    let targetPlayer = mp.players.at(id);
    if (targetPlayer) {
        player.position = targetPlayer.position;
        player.outputChatBox(`You teleported to ${targetPlayer.name}`);
    }
    else {
        player.outputChatBox(`That player doesn't exist`)
    };
});