import { AbstractAction } from './abstract.action';
import { NewCommandInput, NewCommandOptions } from '../commands';

export class NewAction extends AbstractAction<NewCommandInput, NewCommandOptions> {
  public async handle(input: NewCommandInput, options: NewCommandOptions): Promise<void> {
    
  }
}
