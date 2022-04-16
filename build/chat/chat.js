import config from "../gui/gui"
import PogObject from "PogData";
//vars
var timer = false
var timer_say = false
register("chat", (rank, name, message, event) => {
    if (config.customchat) {
        var temp_cfmessage = config.namemessage
        var res = temp_cfmessage.replace('_rank_', rank).replace('_name_', name).replace('_message_', message)
        ChatLib.chat(res)
        cancel(event)
    }
    if (message === "!run check_sse") {
        ChatLib.say("Here! :)")
    }
}).setCriteria("[${rank}] ${name}: ${message}").setParameter("contains")
register("chat", (name, event) => {
    if (config.customchat) {
        ChatLib.chat(`&a[+] ${config.namecolor}${name}`)
        cancel(event)
    }
}).setCriteria("Join >> ${name}").setParameter("contains")
register("chat", (rarity, drop, mf, event) => {
    const temp_dropmessage = config.rngmessage
    var res = temp_dropmessage.replace('_rarity_', rarity).replace('_drop_', drop).replace('_mf_', mf)
    ChatLib.chat(res)
    cancel(event)
}).setCriteria("${rarity}! (${drop}) (+${mf} Magic Find!)").setParameter("contains")
register("chat", (message, event) => {
    if (!config.uselessmsg) {
        if (message === 'You currently have a cooldown for this ability!') {
            cancel(event)
        } else if (message === 'There are blocks in the way!') {
            cancel(event)
        } else if (message === 'The ability is already active!') {
            cancel(event)
        } else if (message === "Your Hitshield have broken! Your Voidling's Stronghold Buff is now active for the next 20 seconds!") {
            Client.showTitle("&cYour Hitshield has broken!", "&r&6Your Voidling's Stronghold Buff is now active for the next &a20 seconds!", 2, 40, 2)
        }
    }
}).setCriteria("${message}")
register("chat", (key, event) => {
    ChatLib.chat(`&e[&6SSE&e] &6 Setting API key to: ${Player.getUUID()}:${key}`)
    config.apiKey = Player.getUUID() + ":" + key
}).setContains().setChatCriteria(Player.getUUID() + ":${key}")