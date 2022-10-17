import * as utils from '@dcl/ecs-scene-utils'


export function flotingObject() {

    const floting_object = new Entity()

    floting_object.addComponent(new GLTFShape("models/Moon.glb"))
    floting_object.addComponent(new Transform())
  
    let path = []
    path[0] = new Vector3(8, 8, 4)
    path[1] = new Vector3(3, 7, 8)
    path[2] = new Vector3(8, 6, 12)
    path[3] = new Vector3(12, 5, 8)  
 
    function moveCurved()
    {
        floting_object.addComponent(new utils.FollowCurvedPathComponent(path, 5, 40, false, true, () => { moveCurved()}))
    }

    moveCurved()
    
    engine.addEntity(floting_object)
}