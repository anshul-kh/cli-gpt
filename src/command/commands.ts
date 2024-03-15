import { Command } from "commander";
import { keyHander } from "./handler/keyHandler";
import { searchHandler } from "./handler/searchHandler";

export const program = new Command();

program
      .command('key')
      .argument("<string>")
      .option("-r,--replace","Replace your Key")
      .description('Setup API Key')
      .action((key,options)=>keyHander(key,options.replace))

program
      .command('search')
      .option('-p,--prompt <string>',"Prompt")
      .option('-i,--image <string>','Image')
      .description('Search The Prompt')
      .action((options)=>searchHandler(options))
// program
//       .option("--prompt")
//       .argument("<string>")
//       .description("Prompt To Search")
//       .action((str)=>console.log(str))

// program
//       .option('--image')
//       .description('Image Path to Search')
//       .action((path)=>imageHandler(path))