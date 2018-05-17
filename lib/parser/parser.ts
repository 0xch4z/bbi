import { Input } from '../../commands';

export class Parser {
  public static parse(name: string): (value: string) => Input<string> {
    return (value: string): Input<string> => {
      return { name, value };
    }
  }

  public static parseInt(name: string): (value: string) => Input<number> {
    return (value: string): Input<number> => {
      return { name, value: parseInt(value, 10) };
    }
  }

  public static parseBool(name: string): (value: string) => Input<boolean> {
    return (value: string): Input<boolean> => {
      return { name, value: Boolean(value) };
    }
  }
}
