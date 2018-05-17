import { AbstractCommand } from './abstract.command';
import { CommanderStatic, Command } from 'commander';
import { Input } from './command.input';
import { Parser } from '../lib/parser';

export interface NewCommandInput {
  client: Input<string>;
  name: Input<string>;
  challengers: Input<number>;
}

export interface NewCommandOptions {
  typescript: Input<boolean>;
}

export class NewCommand extends AbstractCommand<NewCommandInput, NewCommandOptions> {
  public async load(program: CommanderStatic): Promise<void> {
    program
      .command('new [client] [name] [challengers]')
      .alias('n')
      .description('Generate a new BB project.')
      .option('--puppet', 'Install the BBPuppet HMR tool.')
      .option('-t, --template <template>', 'Generate a project from a specific template.')
      .action(async (client: string, name: string, challengers: string, command: Command) => {
        const input: NewCommandInput = {
          client: Parser.parse('client')(client),
          name: Parser.parse('name')(name),
          challengers: Parser.parseInt('challengers')(challengers)
        };
        const options: NewCommandOptions = {
          typescript: Parser.parseBool('typescript')(command['typescript'])
        };
        await this.action.handle(input, options)
      });
  }
}
