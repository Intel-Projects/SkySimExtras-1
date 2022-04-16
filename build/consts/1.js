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


const CombatXPArray = [0, 50, 175, 375, 675, 1175, 1925, 2925, 4425, 6425, 9925, 14925, 22425,
    32425, 47425, 67425, 97425, 147425, 222425, 322425, 522425, 822425, 1222425, 1722425, 2322425,
    3022425, 3822425, 4722425, 5722425, 6822425, 8022425, 9322425, 10722425, 12222425, 13822425,
    15522425, 17322425, 19222425, 21222425, 23322425, 25522425, 27822425, 30222425, 32722425,
    35322425, 38072425, 40972425, 44072425, 47472425, 51172425, 55172425, 59472425, 64072425,
    68972425, 74172425, 79672425, 85472425, 91572425, 97972425, 104672425, 111672425];
const zombiearray = [0,5,15,200,1000,5000,20000,100000,400000,1000000]
const spiderarray = [0,5,25,200,1000,5000,20000,100000,400000,1000000]
const restarray = [0,10,30,250,1500,5000,20000,100000,400000,1000000]


export {
    BP,
    C0APacketAnimation,
    C09PacketHeldItemChange,
    C08PacketPlayerBlockPlacement,
    dropOne,
    CombatXPArray,
    zombiearray,
    spiderarray,
    restarray
}