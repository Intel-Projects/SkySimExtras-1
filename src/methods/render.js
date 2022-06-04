import config from "../gui"
export default new class Render {
    constructor() {
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
        register("renderEntity", (entity, pos, pt, event) => {
            this.players(entity, event)
        })
    }
    players(entity, event) {
        if (entity.name === Player.getName() || !config.renderPlayers || !TabList.getUnformattedNames().join(" ").includes(entity.name)) return

        cancel(event)
    }
}