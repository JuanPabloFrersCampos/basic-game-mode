"use strict"
mp.events.addCommand('rifle', (player, fullText) => {
    player.giveWeapon(0xE284C527, 9999);
});

mp.events.addCommand('minigun', (player, fullText) => {
    player.giveWeapon(0x42BF8A85, 9999);
});

mp.events.addCommand('pistola', (player, fullText) => {
    player.giveWeapon(0xAF3696A1, 9999);
});