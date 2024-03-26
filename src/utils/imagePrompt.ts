import { converter } from "../functions/imageToString"
import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import os from 'os';
import path from 'path';

export const imagePrompt = async(imagePath:string,prompt:string) =>{
    const{image_media_type,image_data}= await converter(imagePath);
    const homeDir =  os.homedir();
    const keyPath = path.join(homeDir,'.cligpt/key.txt')
 
    if(!fs.existsSync(keyPath)){
     console.log('Key is Not Found');
     return;
    }
 
    const apiKey:string = fs.readFileSync(keyPath,{encoding:'utf-8'})
    
    const anthropic = new Anthropic({
     apiKey: apiKey,
   });


const message = await anthropic.messages.create({
  model: 'claude-3-opus-20240229',
  max_tokens: 1024,
  messages: [
        {
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {
                        "type": "base64",
                        "media_type": image_media_type,
                        "data": image_data,
                    },
                },{
                    "type": "text",
                    "text": prompt
                }
            ],
        }
      ]
});
console.log(message?.content[0]?.text);

    
}