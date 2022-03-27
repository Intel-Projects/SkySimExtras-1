import { BP } from "../consts/1"
const ghostBlocks = () => {
    let lookingAt = Player.lookingAt(); 
    if (lookingAt.getClass() === Block) {
                World.getWorld().func_175698_g(new BP(lookingAt.getX(), lookingAt.getY(), lookingAt.getZ()));
    }
}
export { ghostBlocks };