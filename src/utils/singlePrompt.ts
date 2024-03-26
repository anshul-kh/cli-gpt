import Anthropic from '@anthropic-ai/sdk';

import path, { resolve } from 'path';
import os from 'os';
import fs from 'fs';

export const singlePrompt = async(prompt:string) =>{
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
 
   try{
  // Display initial loading indicator
  const stream = await anthropic.messages.create({
    max_tokens: 1024,
    messages: [{ role: 'user', content: 'Hello, Claude' }],
    model: 'claude-3-opus-20240229',
  });

  console.log(stream)
 
}catch(err){
   console.error('Error:',err)
}
}