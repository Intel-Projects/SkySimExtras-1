//imports
/// <reference types="../CTAutocomplete-2.0.4" />
/// <reference lib="es2015" />
import "./build/chat/commands"
import config from "./build/gui/gui"
import "./build/tick"


//little code
register("dropItem", (args1, args2, args3, args4, args5) => {
    ChatLib.chat("string")
})
register("renderExperience", (args) => {
    if (config.disableExperience) {
        cancel(args)
    }
})
register("renderHealth", (args) => {
    if (config.disableHealth) {
        cancel(args)
    }
})
register("renderArmor", (args) => {
    if (config.disableArmor) {
        cancel(args)
    }
})
register("renderFood", (args) => {
    if (config.disableFood) {
        cancel(args)
    }
})
register("renderEntity", (one, two, three, event) => {
})