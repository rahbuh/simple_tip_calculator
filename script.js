(function() {
  const numberInput = document.getElementById("amount");
  const tipDisplay = document.getElementById("display-tip-amt");
  const totalDisplay = document.getElementById("display-total");
  const percentBtns = document.getElementsByClassName("percent-btn");
  const clearBtn = document.getElementById("clear-btn");

  clearBtn.addEventListener("click", () => {
    numberInput.value = "";
    tipDisplay.innerText = "0.00";
    totalDisplay.innerText = "0.00";
  });

  for (let btn of percentBtns) {
    btn.addEventListener("click", e => {
      // console.log(e.target.id)

      if (numberInput.value) {
        // console.log(numberInput.value);
        // console.log(typeof numberInput.value);

        // if (e.target.id === "15percent") {

        // } else if (e.target.id === "18percent") {

        // } else if (e.target.id === "20percent") {

        // } else {
        //   // error message?
        // }

        switch (e.target.id) {
          case "15percent":
            console.log("you selected 15");
            break;
          case "18percent":
            console.log("you selected 18");
            break;
          case "20percent":
            console.log("you selected 20");
            break;
          default: console.log("There's been an error")
            break;
        }
      }
    });
  }

  // console.log('numberInput: ', numberInput)
  // console.log('tipDisplay: ', tipDisplay)
  // console.log('totalDisplay: ', totalDisplay)
  // console.log('percentBtns: ', percentBtns)
  // console.log('clearBtn: ', clearBtn)
})();
