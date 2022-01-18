
let spinner = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '-\r  ', '\r\\  '] ;

let timeOutTime = 100

for (let char of spinner) {
  setTimeout(() => {
  process.stdout.write(char);
}, timeOutTime += 200)
};

console.log('')



// const sentence = "hello there from lighthouse labs";

// let timeOutTime = 0

// for (const char of sentence) {
//   setTimeout(() => {
//   process.stdout.write(char);
// }, timeOutTime += 50)
// };

// console.log('')