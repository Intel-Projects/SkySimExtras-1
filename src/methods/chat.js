import config from "../gui"

export default new class Chat {
    constructor() {
        this.uselessmessages = ['You currently have a cooldown for this ability!', 'There are blocks in the way!', 'The ability is already active!']
        register("chat", (message, event) => {
            if (!config.uselessmsg) this.chatHandler(message, event)
        }).setCriteria("${message}")
    }
    chatHandler(message, event) {
        this.uselessmessages.forEach((item) => {
            if (message === item) cancel(event)
        })
    }
}