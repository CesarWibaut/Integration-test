export default class TestClass {
  public helloWorld(): string {
    return 'Hello, World!';
  }

  public async testingAsync(): Promise<number> {
    await this.sleep();
    return 1;
  }

  private async sleep(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 1000));
  }
}
