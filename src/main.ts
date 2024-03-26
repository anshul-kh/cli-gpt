#!/usr/bin/env node

import { program } from "./command/commands";
import { argv } from "process";

program.parse(argv);