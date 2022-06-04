import RichPresence from "../../../RichPresence/index";
import config from "../gui";

export default new class Discord {
    constructor() {
        this.rpc;

        var maspro;
        if (config.rpc_toggle) maspro = false
        else maspro = true

        this.enabled = maspro

        
        //on load
        try {
            this.rpc = new RichPresence("949437908715192332", {
                largeImageKey: "sse_1024",
                startTimestamp: Date.now(),
                details: "Main Menu",
                state: "Gaming",
                hidePresence: this.rpc,
                readyListener: function (event) {
                    print(`Connected as ${event.user.name}#${event.user.discriminator}`)
                }
            })
        } catch (e) {

        }
        register("step", () => {
            this.updateRpc()
        }).setFps(1)
    }
    updateRpc() {
        if (this.rpc === undefined) return

        new Thread(() => {
            Thread.sleep(1000)
            switch (Server.getIP()) {
                case "":
                    this.rpc.updatePresence({
                        details: "Main Menu"
                    })
                    break;
                case "localhost":
                    this.rpc.updatePresence({
                        details: "Singleplayer"
                    })
                    break;
                default:
                    this.rpc.updatePresence({
                        details: Server.getIP(),
                        state: config.rpcMessage
                    })

            }
        })
    }
}