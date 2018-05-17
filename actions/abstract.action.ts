export abstract class AbstractAction<Input, Options> {
  public abstract async handle(input: Input, options: Options): Promise<void>;
}
