import {getRandomInt} from "../src/random.js"; //using the ES6 modules

/**
 * Test Suite
 */
describe("getRandomInt()", () => {
  it("returns equally random numbers", () => {
    // arrange
    const counts = [0, 0, 0, 0]
    
    // act

    for ( let i = 0; i < 100000; i++) {
      const rnd = getRandomInt(4);
      counts[rnd] += 1;
    }

    for (let i = 0; i < counts.length; i++ ) {
      counts[i] = Math.round(counts[i] / 1000);
    }

    // log
    

    // assert
    expect(counts).toEqual([25,25,25,25]);
  });
});
