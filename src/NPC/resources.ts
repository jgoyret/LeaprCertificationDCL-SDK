export default {
    sounds: {
      marsha: new AudioClip('sounds/marsha.mp3')
    },
    models: {
      robots: {
        marsha: 'models/marsha.glb', 
        rings: new GLTFShape('models/rings.glb')
      }
    },
    textures: {
      blank: new Texture('images/ui/blank.png'),
      buttonE: new Texture('images/ui/buttonE.png'),
      buttonF: new Texture('images/ui/buttonF.png'),
      leftClickIcon: new Texture('images/ui/leftClickIcon.png'),
      textPanel: new Texture('images/ui/textPanel.png')
    }
  }
  