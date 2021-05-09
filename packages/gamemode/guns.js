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

mp.events.addCommand('granada', (player, fullText) => {
    player.giveWeapon(0x93E220BD, 9999);
});

mp.events.addCommand('molotov', (player, fullText) => {
    player.giveWeapon(0x24B17070, 9999);
});