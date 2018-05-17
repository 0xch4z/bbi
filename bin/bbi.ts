#!/usr/bin/env node
import * as commander from 'commander';
import { CommanderStatic } from 'commander';

const bootstrap = () => {
  const program: CommanderStatic = commander;
  program
    .version(require('../package.json').version)
  commander.parse(process.argv);
}

bootstrap();
