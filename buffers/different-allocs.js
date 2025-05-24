const { Buffer } = require("buffer");

const buffer = Buffer.alloc(10000, 0); // slower but zeroed

console.log(Buffer.poolSize >>> 1);
const unsafeBuffer = Buffer.allocUnsafe(10000); // faster but not zeroed

const buff = Buffer.allocUnsafeSlow(2); // It won't make use of the pool

for (let i = 0; i < unsafeBuffer.length; i++) {
  if (unsafeBuffer[i] !== 0) {
    console.log(
      `element at ${i} is not zeroed, it has value: ${unsafeBuffer[i].toString(
        2
      )}`
    );
  }
}
