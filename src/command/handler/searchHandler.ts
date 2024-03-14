import path from "path";
import fs from 'fs'
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

    }
}