import { Dialog } from '@dcl/npc-scene-utils'
import { marsha } from '../NPC'

export const MarshaDialog: Dialog[] = [
  {
    text: "Hey, I'm Marsha - a cute Robot. I live in the Awesome Repository but now i am here for holidays. There´s a lot going on here, Rigth?",
    isQuestion: true,
    offsetY: 20,
    buttons: [
      { label: 'YES', goToDialog: 2 },
      { label: 'NO', goToDialog: 1 }
    ]
  },
  {
    text: "Ok, so you're that kind of person, we better say goodbye here.",
    isEndOfDialog: true,
    triggeredByNext: () => {
      marsha.playAnimation('Goodbye', true, 2)
    }
  },
  {
    text: 'Yes! i love that thing that moves in circles and also you can see the temperature from paris, oulala.'
  },
  {
    text: 'I think this is sort of a experimental land.'
  },
  {
    text: 'Well! but it´s very refreshing to get out of the Awesome repository once in a while.'
  },
  {
    text: 'Remember to always get some fresh air good fella!',
    isEndOfDialog: true,
    triggeredByNext: () => {
      marsha.playAnimation('Goodbye', true, 2)
    }
  }
]
