
import { displayWearable } from "./displayWearable";
import { elevator } from "./elevator";
import { flotingObject } from "./flotingObject";
import { printDataTempParis } from "./printDataTempParis";
import { randomButtons } from "./randomButtons";

// Base scene
const baseScene = new Entity()
baseScene.addComponent(new GLTFShape('models/baseScene.glb'))
baseScene.addComponent(new Transform())
engine.addEntity(baseScene)


randomButtons() // DONE
printDataTempParis() // DONE
elevator() // DONE 
flotingObject() // DONE 
displayWearable() // DONE 
// NPC DONE 

// TO DO
// - Clickable buttons DONE
// - Showcase a text floating with the temperature in Paris, France. DONE
// - 1 Elevator
// - 1 Object floating around in circles
// - Display an L2 wearable and its name
// - Include an NPC with a few boxes of dialog