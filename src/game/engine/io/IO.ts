import { InputListener, OutputListener } from '.';

export abstract class IO {
  private output: Array<string> = [];
  private outputListeners: Array<OutputListener> = [];
  private inputListeners: Array<InputListener> = [];

  public abstract emit(text: string): void;

  public input(text: string): void {
    this.inputListeners.forEach((listener) => {
      listener(text);
    });
  }

  public getOutput(): Array<string> {
    return this.output;
  }

  public addOutpuListener(listener: OutputListener): void {
    this.outputListeners.push(listener);
  }

  public removeOutputListener(listener: OutputListener): void {
    this.outputListeners = this.inputListeners.filter((l) => l !== listener);
  }

  public addInputListener(listener: InputListener): void {
    this.inputListeners.push(listener);
  }

  public removeInputListener(listener: InputListener): void {
    this.inputListeners = this.inputListeners.filter((l) => l !== listener);
  }
}
