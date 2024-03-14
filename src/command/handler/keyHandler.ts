import fs from 'fs'
import os from 'os'
import path from 'path';

export const keyHander = (key:string,replace:boolean) =>{
    const homeDir =  os.homedir();
    const keyDir = path.join(homeDir,'.cligpt')

    if(!fs.existsSync(keyDir)){
        fs.mkdirSync(keyDir,{recursive:true})
    }

    const keyPath = path.join(keyDir,'key.txt');
    
    if(!replace){
    if(fs.existsSync(keyPath)){
        console.log("Key Already Exists\nUse '--replace' option to change API Key")
    }else{
        fs.writeFileSync(keyPath,key);
        console.log("Key Setup Success");
    }}
    else{
        if(!fs.existsSync(keyPath)){
            console.log("Key File Does Not Exist\nUse --show to show Setup Steps")
        }else{
            fs.writeFileSync(keyPath,key);
            console.log('Key Replaced')
        }
    }
    
}