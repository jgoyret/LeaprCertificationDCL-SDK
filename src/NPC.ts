import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import resources from './NPC/resources'
import { MarshaDialog } from './NPC/dialogData'


export const marsha = new NPC(
    {
      position: new Vector3(11, 1.6, 11),
      rotation: Quaternion.Euler(0, 180, 0)
    },
    resources.models.robots.marsha,
    () => {
      // animations
      marsha.playAnimation('Hello', true, 2)
  
      const dummyent = new Entity()
      dummyent.addComponent(
        new NPCDelay(2, () => {
          marsha.playAnimation('Talk')
        })
      )
      engine.addEntity(dummyent)
  
      // sound
      marsha.addComponentOrReplace(new AudioSource(resources.sounds.marsha))
      marsha.getComponent(AudioSource).playOnce()
  
      // dialog UI
      marsha.talk(MarshaDialog)
    },
    {
      faceUser: true,
      portrait: {
        path: 'images/portraits/marsha.png',
        height: 256,
        width: 256,
        section: {
          sourceHeight: 512,
          sourceWidth: 512
        }
      },
      onWalkAway: () => {
        marsha.playAnimation('Goodbye', true, 2)
      }
    }
  )

const ringShape = resources.models.robots.rings

const marshaRings = new Entity()
marshaRings.addComponent(ringShape)
marshaRings.addComponent(
  new Transform({
    position: new Vector3(0, -0.55, -0.2)
  })
)
marshaRings.setParent(marsha)
  