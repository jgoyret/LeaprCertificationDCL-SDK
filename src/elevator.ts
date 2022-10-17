import * as utils from '@dcl/ecs-scene-utils'

export function elevator()
{


const elevator = new Entity()

elevator.addComponent(new GLTFShape("models/plataform.glb"))
elevator.addComponent(new Transform({
    position: new Vector3(3,0.1,3)  
}))

let path = []
path[0] = new Vector3(3,0.1,3)
path[1] = new Vector3(3,10 ,3) 
path[2] = new Vector3(3,0.1,3)


elevator.addComponent(new OnPointerDown(() => {
    elevator.addComponent(new utils.FollowPathComponent(path, 10)) 
},
{
    hoverText: "Use Elevator"     
}))

engine.addEntity(elevator)

}