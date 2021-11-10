import { IInput } from './io.interfaces';
import { extractCommand } from './io.utils';

type OutputListener = (text: string) => void;
type InputListener = (text: IInput) => void;

export class IO {
  private output: Array<string> = [];
  private outputListeners: Array<OutputListener> = [];
  private inputListeners: Array<InputListener> = [];
  private commands: Array<string> = [];

  public render(text: string): void {
    this.output.push(text);
    this.outputListeners.forEach((listener) => {
      listener(text);
    });
  }

  public getOutput(): Array<string> {
    return this.output;
  }

  public addOutpuListener(listener: OutputListener): void {
    this.outputListeners.push(listener);
  }

  public input(rawTextInput: string): void {
    const [command, text] = extractCommand(rawTextInput, this.commands);
    const input: IInput = {
      command,
      text,
    };
    this.inputListeners.forEach((listener) => {
      listener(input);
    });
  }

  public addInputListener(listener: InputListener): void {
    this.inputListeners.push(listener);
  }

  public addCommand(command: string): void {
    this.commands.push(command);

    // Sort by length since we treat the longest command as the
    // most specific and should therefore be first to match
    this.commands.sort((a, b) => {
      return a.length > b.length ? -1 : 1;
    });
  }
}
