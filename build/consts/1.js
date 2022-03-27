//some Packets, credits to NER for saving me research
const BP = Java.type("net.minecraft.util.BlockPos");

const C08PacketPlayerBlockPlacement = Java.type("net.minecraft.network.play.client.C08PacketPlayerBlockPlacement");
const C09PacketHeldItemChange = Java.type("net.minecraft.network.play.client.C09PacketHeldItemChange");
const C0APacketAnimation = Java.type("net.minecraft.network.play.client.C0APacketAnimation");


const playerESP = Java.type("net.minecraft.entity.player.EntityPlayerMP");

const DiscordRPC = Java.type("net.arikia.dev.drpc.DiscordRPC");
const DiscordEventHandlers = Java.type("net.arikia.dev.drpc.DiscordEventHandlers");
const DiscordRichPresence = Java.type("net.arikia.dev.drpc.DiscordRichPresence");
const dropOne = Java.type("net.minecraft.entity.player.EntityPlayer")
export {
    BP,
    C0APacketAnimation,
    C09PacketHeldItemChange,
    C08PacketPlayerBlockPlacement,
    dropOne
}