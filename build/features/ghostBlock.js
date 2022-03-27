//credit to NER for the functions
import { BP } from "../consts/1"
const ghostBlock = () => {
    let lookingAt = Player.lookingAt(); 
    if (lookingAt.getClass() === Block) {
                World.getWorld().func_175698_g(new BP(lookingAt.getX(), lookingAt.getY(), lookingAt.getZ()));
    }
}
export { ghostBlock };