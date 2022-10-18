
import { randomButtons } from "./randomButtons";
import { printDataTempParis } from "./printDataTempParis";
import { elevator } from "./elevator";
import { flotingObject } from "./flotingObject";
import { displayWearable } from "./displayWearable";
import { CreateNPC } from "./NPC";

const floor = new Entity()
floor.addComponent(new GLTFShape('models/baseScene.glb'))
floor.addComponent(new Transform())
engine.addEntity(floor)


randomButtons() 
printDataTempParis() 
elevator() 
flotingObject() 
displayWearable() 
CreateNPC()