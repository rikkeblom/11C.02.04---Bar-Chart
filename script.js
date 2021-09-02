"use strict";

window.addEventListener("load", init);

const model = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 31, 30, 29, 28, 27, 26, 25, 24];
let counter = 0;

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function init() {
  loop();
}

function loop() {
  //this function should call the queuesize and add the new data to the model
  //while only keeping the last 40 items
  counter++;
  let queueSize = getNumberOfCustomers();
  model.unshift(queueSize);
  displayData();
  console.log(model.slice(1, 41));
  setTimeout(loop, 1000);
}

function displayData() {
  //this function will modify the css so that the bars show the corresponding heigth
  //I want the height to be (queueSize * 10 + "px")

  for (let i = 0; i < 40; i++) {
    // console.log("display loop " + i);
    let queueHeight = model[i] * 10 + "px";
    let opacity = ((40 - i) * 5) / 100;
    document.querySelector(`.data${40 - i}`).setAttribute("style", `height: ${queueHeight}; opacity: ${opacity};`);
  }
}
