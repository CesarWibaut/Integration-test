/**
 * Class used to test the package
 */
export default class TestClass {

  /**
   * Function that returns Hello, World!
   */
  public helloWorld(): string {
    return 'Hello, World!';
  }

  /**
   * Async function that returns 1 after one second
   */
  public async testingAsync(): Promise<number> {
    await this.sleep();
    return 1;
  }

   /**
    * Simple async function that just waits
    * @param ms time in millisecond
    */
  private async sleep(ms: number = 1000): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
