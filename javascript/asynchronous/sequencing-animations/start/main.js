const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

//Q1. callback hell

// function animate1(callback) {
//   setTimeout(() => {
//     alice1.animate(aliceTumbling, aliceTiming);
//     callback();
//   }, 1500);
// }
// function animate2(callback) {
//   setTimeout(() => {
//     alice2.animate(aliceTumbling, aliceTiming);
//     callback();
//   }, 1500);
// }
// function animate3(callback) {
//   setTimeout(() => {
//     alice3.animate(aliceTumbling, aliceTiming);
//   }, 1500);
// }

// function animating() {
//   animate1(() => {
//     animate2(() => {
//       animate3(() => {
//         console.log("finished");
//       });
//     });
//   });
// }
// animating();

//Q2. promise chain
// alice1.animate(aliceTumbling, aliceTiming).finished.then(() => {
//   alice2.animate(aliceTumbling, aliceTiming).finished.then(() => {
//     alice3.animate(aliceTumbling, aliceTiming).finished;
//   });
// });

//Q3 async await

function animate1() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(alice1.animate(aliceTumbling, aliceTiming).finished);
    }, 500);
  });
}
function animate2() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(alice2.animate(aliceTumbling, aliceTiming).finished);
    }, 500);
  });
}
function animate3() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(alice3.animate(aliceTumbling, aliceTiming).finished);
    }, 500);
  });
}

async function animating() {
  try {
    let a = await animate1();
    console.log(a);
    let b = await animate2();
    console.log(b);
    let c = await animate3();
    console.log(c);
  } catch (err) {
    console.log(err);
  }
}

animating();
