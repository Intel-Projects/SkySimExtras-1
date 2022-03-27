import RichPresence from "../../../RichPresence/index";
import config from "../gui/gui";
import sleep from "../../../sleep/index"
let currentServer = "";
//modified Discord RPC from NER
/**
 * @type {RichPresence}
 */
let RPC;
try {
    if (config.rpc_toggle) {
        RPC = new RichPresence("949437908715192332", {
            largeImageKey: "necron",
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
        currentServer = undefined;
    }
} catch (err) { console.log("RPC ERROR: " + err.message) }

function rpc() {
    if (RPC === undefined) return   
    // try {
    if (config.rpcEnabled) {
        sleep(1000, function () {
            if (currentServer !== Server.getIP()) {
                currentServer = Server.getIP();
                switch (currentServer) {
                    case "":
                        RPC.updatePresence({
                            details: "Main Menu",
                            slate: `${config.rpc_toggle}`
                        })
                        break;
                    case "localhost":
                        RPC.updatePresence({
                            details: "Singleplayer",
                            slate: `${config.rpc_toggle}`
                        })
                        break;
                    default:
                        RPC.updatePresence({
                            details: currentServer,
                            slate: `${config.rpc_toggle}`
                        })
                }
            }
        })
    } else if (!config.rpcEnabled && currentServer !== undefined) {
        RPC.clearPresence();
        currentServer = undefined;
    }
    //  } catch { console.log("RPC ERROR: " + e.message); }
}

export { rpc }