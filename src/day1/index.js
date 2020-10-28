const { createReadStream } = require('fs');
const { createInterface } = require('readline');

const BASE_PATH = `src/day1/`;

/**
 * Get fuel requirement for module or fueld
 *
 * @param {number} mass   Module mass from which to calculate fuel requirement
 * @return {number}
 */
let getFuelReq = (mass) => {
  let fuel = Math.floor(mass / 3) - 2;
  if (fuel <= 0) {
    return 0;
  } else {
    return fuel + getFuelReq(fuel);
  }
};

/**
 * Get the total fuel requirement
 *
 * @param {string} input  Filename of module masses from which to calculate
 */
let fuelCounterUpper = async(input) => {
  const rl = createInterface({
    input: createReadStream(`${BASE_PATH}/${input}`),
    console: false
  });

  let fuelSum = 0;

  for await (const line of rl) {
    fuelSum += getFuelReq(line);
  }

  console.log(fuelSum);
};

fuelCounterUpper('input.txt');
