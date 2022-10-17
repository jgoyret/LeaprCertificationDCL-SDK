export async function printDataTempParis() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?id=2968815&appid=0e96037630c65c49b572d15ad7edf776')
    const data = await response.json()
    const temp = JSON.stringify(data['main']['temp'])
    log(parseInt(temp))
    
    let temp_ = parseFloat(temp) - 273.15
    let temp__ = temp_.toFixed(1)
    
    const text_entity = new Entity()
    engine.addEntity(text_entity)
    const text_ = new TextShape("Paris Temp: " + temp__ + " C°")
    text_.font = new Font(Fonts.SansSerif_SemiBold)
    text_.fontSize = 10
    text_entity.addComponent(text_) 
    text_entity.addComponent(new Transform({
     position: new Vector3(8,3,14)
   }))
  
    return temp
  }
  
  
  
  
  
  
  
  
  