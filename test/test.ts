import { suite, timeout, slow, test } from 'mocha-typescript';
import { assert } from 'chai';

import TestClass from '../src/TestClass';

@suite(timeout(3000), slow(3000))
class Hello {
  private test: TestClass;

  constructor() {
    this.test = new TestClass();
  }

  @test
  'Hello World test'() {
    assert.equal(this.test.helloWorld(), 'Hello, World!');
  }

  @test
  async 'Test an async function'() {
    const result = await this.test.testingAsync();
    assert.equal(result, 1);
  }

  @test
  '1 = 1 test'() {
    assert.equal(1, 1);
  }
}
