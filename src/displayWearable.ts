
export async function displayWearable() {
    const response = await fetch('https://peer-testing.decentraland.org/lambdas/collections/wearables?collectionId=urn:decentraland:matic:collections-v2:0xae3d6cbe10cb4a0947c5e8362efb2802ab5098ab')
    const data = await response.json()

    const name_ = JSON.stringify(data['wearables'][0]['name']) 
    const name__ = name_.replace('"', ' ').replace('"', ' ')

    const image_ = JSON.stringify(data['wearables'][0]['image']) 

    log("NAME OF WEARBALE : " + name_)  
    log("IMAGE OF WEARBALE : " + image_)    
     
    const textura = new Texture("https://peer-testing.decentraland.org/content/contents/QmdMd3bfM5nfWKjiwajuDuVLYjHDsikZw2JjCcRSEmLtoq")     
     
    const wearable_entity = new Entity()    
    engine.addEntity(wearable_entity) 

    

    wearable_entity.addComponent(new PlaneShape)
    wearable_entity.addComponent(new Transform({  
        position: new Vector3(15,1.5,3), 
        rotation: Quaternion.Euler(-180,90,0), 
        scale: new Vector3(2,2,2)  
    }))
    wearable_entity.addComponent(new Material)
    wearable_entity.getComponent(Material).albedoTexture = textura 
   
    
    const text_name = new Entity()
    engine.addEntity(text_name)

    text_name.addComponent( new TextShape(name__))    
    text_name.getComponent(TextShape).fontSize = 2       

    text_name.addComponent(new Transform({   
        position: new Vector3(15,3,3),  
        rotation: Quaternion.Euler(0,90,0)     
    }))
    
  }
  
  