// import { createMovingPlatform } from "./SubFunctions/movingPlatforms";


// export function elevator()
// {
//     createMovingPlatform(new GLTFShape("models/plataform.glb"), new Vector3(3,0.1,3), new Vector3(3,5,3), 5)
// }

import * as utils from '@dcl/ecs-scene-utils'

export function elevator()
{

// Create entity
const elevator = new Entity()

// Give entity a shape and transform
elevator.addComponent(new GLTFShape("models/plataform.glb"))
elevator.addComponent(new Transform({
    position: new Vector3(3,0.1,3)  
}))

//Define the positions of the path
let path = []
path[0] = new Vector3(3,0.1,3)
path[1] = new Vector3(3,10 ,3) 
path[2] = new Vector3(3,0.1,3)


// Move entity
elevator.addComponent(new OnPointerDown(() => {
    elevator.addComponent(new utils.FollowPathComponent(path, 10)) 
},
{
    hoverText: "Use Elevator"     
}))


// Add entity to engine
engine.addEntity(elevator)

}