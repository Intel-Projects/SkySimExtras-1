import guilib from "../gui/gui"
import sleep from "../../../sleep/index"
import { dropOne, CombatXPArray, zombiearray, spiderarray, restarray } from "../consts/1";
import request from "../../../requestV2/index"

const Minecraft = Java.type('net.minecraft.client.Minecraft');
var slot
var slayer
var name
const armor_enchants = ["growth 1500", "protection 1500"]
const sword_enchants = ["sharpness 400", "soul_eater 5", "Bane_of_arthropods 10", "critical 30", "first_strike 5", "smite 10", "ender_slayer 10", "telekinesis 1", "vampirism 5", "fire_aspect 1500", "life_steal 5", "execute 30", "dragon_hunter 10"]
const bow_enchants = ["power 400", "soul_eater 5", "flame 1500", "aiming 5", "dragon_hunter 10", "telekinesis 1"]
register("worldLoad", () => {

})
register("command", (args) => {
    guilib.openGUI()
}).setName("sse");
register("command", (args) => {
    ChatLib.chat("thot")
}).setName("pro")
register("command", (args) => {
    ChatLib.chat('-------------------- SkySimExtras ---------------------')
    ChatLib.chat('Welcome to SkySimExtras! This is an inbeta mod, so')
    ChatLib.chat('understand that there may be bugs. Other than that,')
    ChatLib.chat('have fun! /sse to open gui btw, you got this gamer')
    ChatLib.chat('-----------------------------------------------------')
}).setCommandName("help")
register("command", (args) => {
}).setName("devmode")
register("command", (args) => {
    if (!args) {
        ChatLib.chat("/enchant armor : gives every armor enchant")
        ChatLib.chat("/enchant sword : gives you every sword enchant")
        ChatLib.chat("/enchant bow : gives you every bow enchant")
    } else if (args === "armor") {
        ChatLib.chat("Giving armor enchants...")
        armor_enchants.forEach((enchant, i) => {
            var speed = (i + 1) * 500
            sleep(speed, () => {
                ChatLib.command(`meb ${enchant}`)
            })
        })
    } else if (args === "sword") {
        ChatLib.chat("Giving sword enchants...")
        sword_enchants.forEach((enchant, i) => {
            var speed = (i + 1) * 500
            sleep(speed, () => {
                ChatLib.command(`meb ${enchant}`)
            })
        })
    } else if (args === "bow") {
        ChatLib.chat("Giving bow enchants...")
        bow_enchants.forEach((enchant, i) => {
            var speed = (i + 1) * 500
            sleep(speed, () => {
                ChatLib.command(`meb ${enchant}`)
            })
        })
    }
}).setName("enchant")



