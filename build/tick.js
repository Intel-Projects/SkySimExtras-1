//imports
import config from "./gui/gui"
import { rpc } from "./consts/rpc"
import { BP, C08PacketPlayerBlockPlacement } from "./consts/1"
import PogObject from "../../PogData/index"

//keys
var fillQuiver = false
const active = ["> yes", "> sex", "> pro", "> mhm"]
var activePet = ""
var canTakeKB = true
var usedAtom = false
var clip8 = new KeyBind("Clip 8", Keyboard.KEY_NONE)
var clip82 = new KeyBind("Clip 8+", Keyboard.KEY_NONE)
var logo = new Image("sse_logo.png", "https://cdn.discordapp.com/attachments/950765983809831002/963902022904586350/1024.png")
var logo_t = new Image("sse_trans_logo.png", "https://cdn.discordapp.com/attachments/950765983809831002/963902281860919336/sse_trans.png")
var hasSentCredits = false
var display = new Display();
var data = new PogObject("SkySimExtras", {
    playtime: 0
})

var pt = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
}


const credits = ["&eThis message is a thanks to everyone who made SSE possible:", "&a- ItsAshUwU - Logo, ideas, etc", "&a- Aragorn - Making this project possible.", "&a- sosss - Ideas, and support", "&a- _d3rpy - Testing, and ideas", "&eThank you to everyone who made SSE possible. Means a lot.", "&c:)"]
//ability imports


//render active

//code
register("step", () => {
    //ner RPC updater

    World.getAllEntities().forEach((temp) => {
        if (temp.getName().removeFormatting().includes(`${Player.getName()}'s `)) {
            const yes = temp.getName().removeFormatting().replace(`${Player.getName()}'s `, "").split("] ")
            activePet = yes[1]
        }
    })

    //special aids
    rpc()
    if (activePet === 'Mini T-34' || activePet === 'Golden Tiger') canTakeKB = false
    else canTakeKB = true
    display.setShouldRender(config.bettersb)
    if (config.bettersb) Scoreboard.setShouldRender(false)
    else Scoreboard.setShouldRender(true)
    display.setRenderLoc(10, Renderer.screen.getHeight() / 2 - 60);

    data.playtime = data.playtime + 1
    data.save()
}).setFps(1)
register("packetReceived", (packet, event) => {
    //original
    if ((packet.class.getSimpleName() == "S12PacketEntityVelocity" || packet.class.getSimpleName() == "S27PacketExplosion") && config.antikb && !canTakeKB) {
        if (Player.getHeldItem()?.getName()?.includes("Bonzo's Staff") || Player.getHeldItem()?.getName()?.includes("Jerry-chine Gun") || Player.getPlayer().func_180799_ab()) return
            cancel(event);
    }
})
register("playerInteract", (click_event, pos, event) => {
    //original
    if (!config.betterterm) return;
    if (!config.bettertermanything && !Player.getHeldItem()?.getName()?.removeFormatting()?.includes("Terminator")) return


    Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(Player.getHeldItemIndex()).getItemStack(), 0, 0, 0))
    cancel(event)
})
register("renderEntity", (name, vector, pt, event) => {
    if (config.renderPlayers) return
    if (name.name === "Armor Stand") cancel(event)
    if (name.name === Player.getName()) return
    TabList.getUnformattedNames().forEach((temp) => {
        if (name.name === temp) cancel(event)
    })
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
register("worldLoad", () => {
    if (!config.join_toggle || hasSentCredits) return

    credits.forEach(temp => {
        ChatLib.chat(temp)
    })
    hasSentCredits = true
})


//command * gui integration



register("command", (args) => {
    ChatLib.command("quiver")
    fillQuiver = true
}).setName("quiver")

register("step", (elap) => {
    //quiver int



    //invcheck

    //pet
    try {
        //quiver int
        if (!Server.getIP() || !Player.getOpenedInventory().getName() || !fillQuiver || !Client.isInGui) return
        if (Client.isInGui() && Player.getOpenedInventory().getName() === "Quiver" && fillQuiver) {
            fillQuiver = false
            Player.getOpenedInventory().click(35, false, "MIDDLE")
        }
    } catch (e) {
        print(e)
    }
})
register("renderOverlay", (args) => {
    if (Client.isInGui()) logo_t.draw(-6, -12, 139.2, 68.3)
})
register("tick", () => {
    display.setLine(0, Scoreboard.getScoreboardTitle())
    display.setLine(1, Scoreboard.getLines(false).join("\n"))
    if (clip8.isPressed()) {
        ChatLib.command("clip -8", true)
        ChatLib.chat("clipping")
    }
    if (clip82.isPressed()) {
        ChatLib.command("clip 8", true)
        ChatLib.chat("Clipping")
    }
})

register("guiRender", (x, y, gui) => {
    var inv = Player.getOpenedInventory()
    if (!inv.getName()) return
    if (Player.getOpenedInventory().getName().includes("Select all colors in ")) {
        inv.getItems().forEach((item, i) => {
            if (item?.getID() === 160 && item?.getMetadata() === 3) inv.click(i, false, "MIDDLE")
        })
    }
    if (inv.getName().includes("Correct all the panes!")) {
        inv.getItems().forEach((item, i) => {
            if (item?.getID() === 160 && item?.getMetadata() === 14) inv.click(i, false, "MIDDLE")
        })
    }
    if (Player.getOpenedInventory().getName().includes("What starts with: ")) {
        inv.getItems().forEach((item, i) => {
            if (item?.getID() === 160 && item?.getMetadata() === 3) inv.click(i, false, "MIDDLE")
        })
    }
    if (Player.getOpenedInventory().getName().includes("Finish the maze!")) {
        inv.getItems().forEach((item, i) => {
            if (item?.getID() === 160 && item?.getMetadata() === 0) inv.click(i, false, "MIDDLE")
        })
    }
})

register("command", (args) => {
    ChatLib.command(`strength ${args} set 1000000000`)
    ChatLib.command(`defense ${args} set 1000000`)
    ChatLib.command(`maxhealth ${args} set 1000000`)
    ChatLib.command(`intelligence ${args} set 100000000000`)
}).setName("pop")





display.setAlign("left")
display.setOrder("down")

register("command", () => {
    var hours = data.playtime / 3600
    var hours = hours.toPrecision(3)
    ChatLib.chat(`&aYou have played using SSE for &e${hours} &aHours`)
}).setName("pt").setAliases("playtime")


register("command", (args) => {
    World.getAllEntities().forEach(item => {
        if (item.name === Player.getName()) item.move(0, 3, 0)
    })
}).setName("klip")

