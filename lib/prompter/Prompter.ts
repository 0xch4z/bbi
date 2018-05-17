import { prompt } from 'inquirer';

export interface PromptOptions<T> {
  pipe?: PromptInputPipe<T>,
  type?: PromptInputType,
  choices?: T[],
  validate?: PromptInputValidator<T>,
  errorMessage?: string,
}

export type PromptInputValidator<T> =
  (input: T) => boolean;

export type PromptInputPipe<T> = 
  (input: string) => T;

export type PromptInputType =
  'password' |
  'rawlist' |
  'confirm' |
  'input' |
  'list';

const promptOptionsZero: PromptOptions<any> = {
  pipe: undefined,
  type: undefined,
  choices: undefined,
  validate: undefined,
  errorMessage: undefined,
};

export class Prompter {
  private static async _prompt<T>(question: string, options?: PromptOptions<T>): Promise<T> {
    const {
      pipe,
      type,
      choices,
      validate,
      errorMessage
    } = options || promptOptionsZero;
    return new Promise<T>(async resolve => {
      let valid = false,
        pipedValue = null;
      while (!valid) {
        const { answer }: any = await prompt([{
          name: 'answer',
          message: question,
          type: type || 'input',
          choices
        }]);

        pipedValue = typeof pipe === 'function'
          ? pipe(answer)
          : answer;
        
        valid = typeof validate === 'function'
          ? validate(pipedValue)
          : true;

        if (!valid)
          console.log(errorMessage || 'Invalid input')
      }
      resolve(pipedValue);
    });
  }
  private static _pipeInt: PromptInputPipe<number> = (value: string) => parseInt(value, 10);
  private static _pipeBool: PromptInputPipe<boolean> = Boolean;

  public static async prompt(question: string, options?: PromptOptions<string>): Promise<string> {
    return await this._prompt<string>(question, options);
  }

  public static async promptInt(question: string, options?: PromptOptions<number>): Promise<number> {
    return await this._prompt<number>(question, {
      pipe: options.pipe || this._pipeInt,
      ...options,
    });
  }

  public static async promptBool(question: string, options?: PromptOptions<boolean>): Promise<boolean> {
    return await this._prompt<boolean>(question, {
      pipe: options.pipe || this._pipeBool,
      ...options
    });
  }
}
