import config from "../gui"
import { C08PacketPlayerBlockPlacement, BP } from "./consts"
export default new class Packets {
    constructor() {

        this.noclick = ["Terminator", "Dimoonizary Dagger"]
        register("packetReceived", (packet, event) => {
            this.handler(packet, event)
        })
        register("playerInteract", (action, pos, event) => {
            this.clickHandler(event)
        })
    }
    handler(packet, event) {
        if (packet.class.getSimpleName() === "S12PacketEntityVelocity" || packet.class.getSimpleName() === "S27PacketExplosion" && config.antikb) cancel(event)
    }
    clickHandler(event) {
        this.noclick.forEach((item) => {
            if (!config.betterterm || !Player.getHeldItem()?.getName()?.removeFormatting()?.includes(item)) return
            new Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getHeldItem()?.getItemStack(), 0, 0, 0))
            cancel(event)
        })
    }
}