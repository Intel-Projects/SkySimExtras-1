//oringinal
import config from "../inmenu/gui"
var locked_slots = [true, true, true, true, true, true, true, true, true]
const test = () => {
    var slot = Player.getHeldItemIndex()
            if (locked_slots[slot]) {
                ChatLib.chat("Disabled dropping on slot: " + slot)
                locked_slots[slot] = false
            } else {
                ChatLib.chat("Enabling dropping on slot: " + slot)
                locked_slots[slot] = true
            }
}
export {
    test,
    locked_slots
}