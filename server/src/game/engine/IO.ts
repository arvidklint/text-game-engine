type OutputListener = (text: string) => void;

class IO {
  private output: Array<string> = [];
  private outputListeners: Array<OutputListener> = [];

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
}

export default IO;
