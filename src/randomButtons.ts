
export function randomButtons() {


    const buttons = []
    const urls = ['https://www.google.com.uy/', 'https://www.youtube.com/', 'https://wwww.wikipedia.com/', 'https://www.netflix.com/']
    const hover_text = ['Google', 'Youtube', 'Wikipedia', 'Netflix']
    const action_buttons = [ActionButton.PRIMARY, ActionButton.SECONDARY, ActionButton.POINTER, ActionButton.POINTER]

    for (let i = 0; i < 4; i++) {
        buttons[i] = new Entity
        engine.addEntity(buttons[i])

        buttons[i].addComponent(new Transform({
            position: new Vector3(2 , 1, 6 + i),
            scale: new Vector3(0.5, 0.3, 0.5)        
        }))

        buttons[i].addComponent(new BoxShape)
        buttons[i].addComponent(new Material)
        buttons[i].getComponent(Material).albedoColor = new Color3(Math.random(),  Math.random(), Math.random())

        buttons[i].addComponent(new OnPointerDown(() => {
 
            openExternalURL(urls[i])
        },
            {
                button: action_buttons[i],
                hoverText: hover_text[i]
            }
        ))

    }
}
