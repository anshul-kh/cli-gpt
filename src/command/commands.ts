process.noDeprecation = true;
import { Command } from "commander";
import { keyHander } from "./handler/keyHandler";
import { searchHandler } from "./handler/searchHandler";
import { sessionHandler } from "./handler/sessionHandler";

export const program = new Command();

program
      .command('key')
      .argument("<string>")
      .option("-r,--replace","Replace your Key")
      .description('Setup API Key')
      .action((key:string,options:any)=>keyHander(key,options.replace))

program
      .command('search')
      .option('-p,--prompt <string>',"Prompt")
      .option('-i,--image <string>','Image')
      .description('Search The Prompt')
      .action((options:any)=>searchHandler(options))

program 
      .command('start')
      .description("Start a new chat session")
      .action(()=>sessionHandler())


