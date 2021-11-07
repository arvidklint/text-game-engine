type OutputListener = (text: string) => void;
type InputListener = (text: string) => void;

class IO {
  private output: Array<string> = [];
  private outputListeners: Array<OutputListener> = [];
  private inputListeners: Array<InputListener> = [];

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

  public input(text: string): void {
    this.inputListeners.forEach((listener) => {
      listener(text);
    });
  }

  public addInputListener(listener: InputListener): void {
    this.inputListeners.push(listener);
  }
}

export default IO;
