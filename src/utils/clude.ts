import Anthropic from '@anthropic-ai/sdk';

import readline from 'readline';
import path, { resolve } from 'path';
import os from 'os';
import fs from 'fs';


 export const interact = async() =>{
    const rl  = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })
    
   const homeDir =  os.homedir();
   const keyPath = path.join(homeDir,'.cligpt/key.txt')

   if(!fs.existsSync(keyPath)){
    console.log('Key is Not Found');
    return;
   }

   const apiKey:string = fs.readFileSync(keyPath,{encoding:'utf-8'})

   const anthropic = new Anthropic({
    apiKey: apiKey, // defaults to process.env["ANTHROPIC_API_KEY"]
  });

   console.log('Welcome to the CLI-GPT! Type "exit" to quit.');
   
   const askQuestions = async() =>{
        const question = await new Promise<string>((resolve)=>{
            rl.question('Human: ',resolve)
        })

        if(question.toLowerCase()==='exit'){
            rl.close();
            return;
        }

        try{
            const msg = await anthropic.messages.create({
                model: "claude-3-opus-20240229",
                max_tokens: 1024,
                messages: [{ role: "user", content: question }],
              });
            console.log('cligpt:',msg);

        }catch(err){
           console.error('Error:',err)
        }

        askQuestions();
   }

   askQuestions();

}