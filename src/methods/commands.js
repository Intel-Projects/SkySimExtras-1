import config from "../gui"
var enchants = {
    armor: {
        growth: 1500,
        protection: 1500,
    },
    sword: {
        sharpness: 400,
        soul_eater: 5,
        bane_of_arthropods: 10,
        critical: 30,
        first_strike: 5,
        smite: 10,
        ender_slayer: 10,
        telekinesis: 1,
        vampirism: 5,
        fire_aspect: 1500,
        life_steal: 5,
        execute: 30,
        dragon_hunter: 10
    },
    bow: {
        power: 400,
        soul_eater: 5,
        flame: 1500,
        aiming: 5,
        dragon_hunter: 10,
        telekinesis: 1
    }
}

export default new class Commands {
    constructor() {
        register("command", () => {
            config.openGUI()
        }).setName("sse")
        register("command", (args) => {
            this.enchant(args)
        }).setName("enchant")
    }
    enchant(type) {
        var get = type.toLowerCase()

        try {
            new Thread(() => {
                Object.keys(enchants[get]).forEach((item, i) => {
                    ChatLib.command(`meb ${item} ${enchants[get][item]}`)
                    Thread.sleep(750)
                })
            }).start()
        } catch (e) {
            print(e)
        }
    }
}