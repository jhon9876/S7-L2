// ESERCIZIO 1

// const firstButtonElement = document.querySelector(".insertLocalStorage");
// const inputElement = document.querySelector("input");
// const divDisplay = document.querySelector(".valoriSalvati");
// const secondButtonElement = document.querySelector(".deleteLocalStorage");
// const KEY = "Name";
// const insertElement = () => {
//   const objToString = JSON.stringify(inputElement.value);
//   localStorage.setItem("Name", objToString);
//   console.log(objToString);
//   const valueToDisplay = localStorage.getItem(KEY);
//   const stringToObj = JSON.parse(valueToDisplay);
//   const visualizeElement = document.createElement("div");
//   visualizeElement.classList.add("elementoCreato");
//   visualizeElement.innerText = `${stringToObj}`;
//   divDisplay.appendChild(visualizeElement);
// };

// firstButtonElement.onclick = function (event) {
//   event.preventDefault();
//   insertElement();
// };

// secondButtonElement.onclick = function (event) {
//   event.preventDefault();
//   if (document.querySelector(".elementoCreato")) {
//     localStorage.removeItem(KEY);
//   } else {
//     console.log("non esiste alcun elemento");
//   }
// };

// ESERCIZIO 2
let i = sessionStorage.getItem("count")
  ? parseInt(sessionStorage.getItem("count"))
  : 0;

const myTimer = function () {
  i = i + 1;
  const divElement = document.querySelector("#timer");

  divElement.innertext = `${i} + secondi sessione`;
  sessionStorage.setItem("count", i);
};
setInterval(myTimer, 1000);