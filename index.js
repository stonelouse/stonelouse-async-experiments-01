// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function play01() {
  console.log("#01#", "entering");
  new Promise((resolve, reject) => {
    setTimeout(() => {
      throw new Error(">01>");
      resolve("#01#");
    }, 1000);
  }).catch(error => console.log("#01#", error)); // not called
}
try {
  play01();
} catch (error) {
  console.log("##01##", error); // not called
}
// -------------------------------------------------------------------------
function play03() {
  console.log("#03#", "entering");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      throw new Error(">03>");
      resolve("#03#");
    }, 1000);
  }).catch(error => console.log("#03#", error)); // not called
}
try {
  play03()
    .then(value => console.log("#03a#", value)) // not called
    .catch(error => console.log("#03b#", error)); // not called
} catch (error) {
  console.log("##03##", error); // not called
}
// -------------------------------------------------------------------------
function play04() {
  console.log("#04#", "entering");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        throw new Error(">04>");
        resolve("#04");
      } catch (error) {
        reject(error);
      }
    }, 1000);
  }).catch(error => console.log("#04#", error)); // called!!!
}
try {
  play04()
    .then(value => console.log("#04a#", value)) // called!!!
    .catch(error => console.log("#04b#", error)); // not called
} catch (error) {
  console.log("##04##", error); // not called
}
// -------------------------------------------------------------------------
// typical application!
function play05() {
  console.log("#05#", "entering");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        throw new Error(">05>");
        resolve("#04");
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}
try {
  play05()
    .then(value => console.log("#05a#", value)) // not called
    .catch(error => console.log("#05b#", error)); // called!!!;
} catch (error) {
  console.log("##05##", error); // not called
}
// -------------------------------------------------------------------------
function play02() {
  function timeout(duration) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, duration);
    });
  }

  timeout(1000)
    .then(resolve => {
      console.log("#02#", "entering");
      throw new Error("#02");
    })
    .catch(error => console.log("#02#", error)); // called!!!
}
try {
  play02();
} catch (error) {
  console.log("##02##", error); // not called
}
