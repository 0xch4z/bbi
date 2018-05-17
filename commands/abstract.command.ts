import { AbstractAction } from '../actions';
import { CommanderStatic } from 'commander';

export abstract class AbstractCommand<Input, Options> {
  constructor(protected action: AbstractAction<Input, Options>) {}
  /// loads the command to static commander instance
  public abstract async load(program: CommanderStatic): Promise<void>;
}
