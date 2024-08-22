let string = "";
let buttons = document.querySelectorAll(".button-container button");
let display = document.getElementById("result");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      try {
        string = string.replace(/x/g, "*").replace(/÷/g, "/");

        string = eval(string);
        display.value = string;
      } catch {
        display.value = "Error";
        string = "";
      }
    } else if (e.target.innerHTML === "AC") {
      string = "";
      display.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.slice(0, -1);
      display.value = string;
    } else if (e.target.innerHTML === "%") {
      string = (parseFloat(string) / 100).toString();
      display.value = string;
    } else {
      string += e.target.innerHTML;
      display.value = string;
    }
  });
});
