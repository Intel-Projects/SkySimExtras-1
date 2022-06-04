import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
    @SliderProperty
} from '../../Vigilance/index';

@Vigilant("SkySimExtras", "SSE", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General", "Slayers", "Displays", "QOL", "Other"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})
class Config {
    constructor() {
        this.initialize(this)
        this.setCategoryDescription("General", 
            "&e[&6SSE&e]\n\n" +
            "&eMost of everything that falls under here is safe\n" +
            "&eThis mod is use at your own risk however, so don't\n" +
            "&eblame me if anything happens.\n"
        )
        this.setCategoryDescription("Slayers", 
            "&e[&6SSE&e]\n\n" +
            "&cSlayers POG" 
        )
        this.setCategoryDescription("Displays",
            "&e[&6SSE&e]\n\n" +
            "&cDisplays data haha\n"
        )
        this.setCategoryDescription("QOL",
            "&e[&6SSE&e]\n\n" +
            "&cEverything here is &luse at your own risk"
        )
        this.setCategoryDescription("Other",
            "&e[&6SSE&e]\n\n"
        )
    }

    customsbmove = new Gui()

    // ---------------------------------------------------------------
    // General

    // ---------------------------------------------------------------
    @TextProperty({
        name: "Color for chat messages (usernames)",
        description: "Chat reformatation using SSE. (BETA)\nAvailable Variables:\n_rank_, _name_, _message_\nEXAMPLE: _rank_ Without the underscores displays Rank\nCOLOR CODES DO WORK",
        category: "General",
        subcategory: "Chat",
        placeholder: "_rank_ _name_ > _message_",
    })
    namemessage = "_rank_ _name_ > _message_";
    @SwitchProperty({
        name: "Toggle useless chat messages",
        description: "Toggles useless chat information, such as blocks in way, etc.",
        category: "General",
        subcategory: "Chat",
    })
    uselessmsg = false
    @SwitchProperty({
        name: "Toggle custom chat",
        description: "Toggles custom chat",
        category: "General",
        subcategory: "Chat"
    })
    customchat = false
    @SwitchProperty({
        name: "Toggle other users",
        description: "Toggles the visibility of other users",
        category: "General",
        subcategory: "Render"
    })
    renderPlayers = true
    

    
    
    
    // ---------------------------------------------------------------
    // Slayers

    // ---------------------------------------------------------------
    @TextProperty({
        name: "Slayer RNG Message",
        description: "Configurable slayer RNG message, is sent into chat when you\nget a drop. Like the chat formatation one it can be changed\nVariables: _rarity_, _drop_, _mf_",
        category: "Slayers",
        subcategory: "Message",
        placeholder: "&r&l_rarity_! &r&7(&e_drop_&7)&r &b(+${mf} Magic Find!)",
    })
    rngmessage = "&r&l_rarity_! &r&7(&e_drop_&7)&r &b(+_mf_ Magic Find!)";
    @SwitchProperty({
        name: "Soulcry Alert",
        description: "Alerts you when your soulcry ability needs to be used again.",
        category: "Slayers",
        subcategory: "Message",
    })
    soulcry = false


    



    

    

    // ---------------------------------------------------------------
    // Displays

    // ---------------------------------------------------------------
    @SwitchProperty({
        name: "Toggle Health Bar",
        description: "Toggles the visibility of the minecarft Health Bar",
        category: "Displays",
        subcategory: "Render"
    })
    disableHealth = true
    @SwitchProperty({
        name: "Toggle XP Bar",
        description: "Toggles the visibility of the minecraft Experience Bar",
        category: "Displays",
        subcategory: "Render"
    })
    disableExperience = true
    @SwitchProperty({
        name: "Toggle Armor Bar",
        description: "Toggles the visibility of the minecraft Armor Bar",
        category: "Displays",
        subcategory: "Render"
    })
    disableArmor = true
    @SwitchProperty({
        name: "Toggle Food Bar",
        description: "Toggles the visibility of the minecraft Food Bar",
        category: "Displays",
        subcategory: "Render"
    })
    disableFood = true






    // ---------------------------------------------------------------
    // QOL

    // ---------------------------------------------------------------
    @SwitchProperty({
        name: "Better Term",
        description: "Better terminator click",
        category: "QOL",
        subcategory: "Better Term"
    })
    betterterm = true
    @SwitchProperty({
        name: "Better Term With Anything",
        description: "Better Terminator Clicks on any weapon (MOST LIKELY BANNABLE)",
        category: "QOL",
        subcategory: "Better Term"
    })
    bettertermanything = true
    
    @SwitchProperty({
        name: "anti KB",
        description: "Removes knockback",
        category: 'QOL',
        subcategory: "USE AT YOUR OWN RISK"
    })
    antikb = true







    // ---------------------------------------------------------------
    // Other

    // ---------------------------------------------------------------
    @SwitchProperty({
        name: 'RPC toggle',
        description: 'Toggles whether SSE takes over your discord RPC and displays your status',
        category: 'Other',
        subcategory: 'Discord'
    })
    rpc_toggle = true
    @TextProperty({
        name: "RPC Message",
        description: "Displays a custom message on your discord RPC",
        category: "Other",
        subcategory: "Discord",
    })
    rpcMessage = "Example RPC message";
    @SwitchProperty({
        name: 'Join Message',
        description: 'Toggles where the SSE join message is sent when joining a game, would reccomend to leave on.',
        category: 'Other',
        subcategory: 'World Load',
    })
    join_toggle = true
    @SwitchProperty({
        name: 'Better Scoreboard',
        description: 'Toggles where the better scoreboard is displayed instead of the default one.',
        category: 'Other',
        subcategory: 'Displays'
    })
    bettersb = true

    @TextProperty({
        name: "RPC image",
        description: "Image key used by discord RPC (Available: sse_1024)",
        category: "Other",
        subcategory: "Discord",
        placeholder: "sse_1024",
    })
    image_key = "sse_1024";
    @TextProperty({
        name: "API key",
        description: "API key for skysim, used for API features",
        category: "Other",
        subcategory: "API"
    })
    apiKey = "";    


}
export default new Config()