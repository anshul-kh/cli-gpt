import path from "path";
import fs from 'fs';
import { singlePrompt } from "../../utils/singlePrompt";
import { imagePrompt } from "../../utils/imagePrompt";

export const searchHandler = (options:{prompt:string;image?:string})=>{
    if(!options.prompt ){
       console.error('missing required option "--prompt"')
    }

    if(options.image){
        const imagePath = path.resolve(process.cwd(),options.image)

        if(!fs.existsSync(imagePath)){
            console.error(`File Not Found`)
        }else{
            imagePrompt(imagePath,options.prompt)
        }
    }

    if(!options.image){
        singlePrompt(options.prompt)
    }
}