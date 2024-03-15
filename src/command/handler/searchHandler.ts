import path from "path";
import fs from 'fs';
import { interact } from "../../utils/clude";
import { singlePrompt } from "../../utils/singlePrompt";



export const searchHandler = (options:{prompt:string;image?:string})=>{
    if(!options.prompt ){
       console.error('missing required option "--prompt"')
    }

    if(options.image){
        const imagePath = path.resolve(process.cwd(),options.image)

        if(!fs.existsSync(imagePath)){
            console.error(`File Not Found`)
        }else{
            
        }
    }

    if(!options.image){
        singlePrompt(options.prompt)
    }
}