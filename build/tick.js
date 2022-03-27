//imports
import config from "./gui/gui"
import { rpc } from "./consts/rpc"
import { BP, C08PacketPlayerBlockPlacement } from "./consts/1"


//keys
const dropKey = new KeyBind("Uhut Drop Key", Keyboard.KEY_Q, "< Uhut QOL >")


//code
register("step", () => {
    rpc()
}).setFps(1)
register("packetReceived", (packet, event) => {
    if ((packet.class.getSimpleName() == "S12PacketEntityVelocity" || packet.class.getSimpleName() == "S27PacketExplosion") && config.antikb) {
        if (Player.getHeldItem()?.getName()?.includes("Bonzo's Staff") || Player.getHeldItem()?.getName()?.includes("Jerry-chine Gun") || Player.getPlayer().func_180799_ab()) return
            cancel(event);
    }
})
register("playerInteract", (click_event, pos, event) => {
    if (!config.betterterm || !Player.getHeldItem()?.getName()?.includes("Terminator")) return;


    Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getInventory().getStackInSlot(Player.getHeldItemIndex()).getItemStack(), 0, 0, 0))
    cancel(event)
})
register("tick", () => {
})