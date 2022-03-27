
import RichPresence from "../../../RichPresence/index"
import config from "../gui/gui"
import sleep from "../../../sleep/index"
let currentServer = "";
let RPC
if (config.rpc_toggle) {
    RPC = new RichPresence("949437908715192332", {
        largeImageKey: `${config.image_key}`,
        startTimestamp: Date.now(),
        details: "Main Menu",
        readyListener: function (event) {
            print(`Logged in as ${event.user.name}#${event.user.discriminator}`);
        }
    })
} else {
    RPC = new RichPresence("949437908715192332", {
        largeImageKey: `${config.image_key}`,
        startTimestamp: Date.now(),
        details: "Main Menu",
        hidePresence: true,
        readyListener: function (event) {
            print(`Logged in as ${event.user.name}#${event.user.discriminator}`);
        }
    })
}
    const rpc = () => {
        if (RPC === undefined) return   
        // try {
        rpcmessage = config.rpcMessage
        if (!config.rpcMessage) rpcmessage = "Seems this user isn't original."
        if (config.rpc_toggle) {
            sleep(1000, function () {
                if (currentServer !== Server.getIP()) {
                    currentServer = Server.getIP();
                    switch (currentServer) {
                        case "":
                            RPC.updatePresence({
                                details: "Main Menu",
                            })
                            break;
                        case "localhost":
                            RPC.updatePresence({
                                details: "Singleplayer"
                            })
                            break;
                        default:
                            RPC.updatePresence({
                                state: `${rpcmessage}`,
                                details: `Playing: ${currentServer}`
                            })
                    }
                }
            })
        } else if (!config.rpc_toggle) {
            RPC.clearPresence();
            currentServer = undefined;
        }
        //  } catch { console.log("RPC ERROR: " + e.message); }
    }
    export { rpc }