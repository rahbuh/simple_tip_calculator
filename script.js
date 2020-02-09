(function() {
  const numberInput = document.getElementById("amount");
  const percentBtns = document.getElementsByClassName("percent-btn");
  const clearBtn = document.getElementById("clear-btn");

  clearBtn.addEventListener("click", () => {
    numberInput.value = "";
    document.getElementById("display-tip-amt").innerText = "0.00";
    document.getElementById("display-total").innerText = "0.00";
    document.getElementById("selectedTip").innerText = "";
  });

  for (let btn of percentBtns) {
    btn.addEventListener("click", e => {
      if (numberInput.value) {
        let result = {};
        switch (e.target.id) {
          case "15percent":
            result = calculateTip(0.15);
            displayResults(result, "Selected: 15%");
            break;
          case "18percent":
            result = calculateTip(0.18);
            displayResults(result, "Selected: 18%");
            break;
          case "20percent":
            result = calculateTip(0.2);
            displayResults(result, "Selected: 20%");
            break;
          default:
            // console.log("There's been an error");
            break;
        }
      }
    });
  }

  function calculateTip(percent) {
    let tip = parseFloat(numberInput.value) * percent;
    let total = parseFloat(numberInput.value) + tip;

    return { tip, total };
  }

  function displayResults({ tip, total }, msg) {
    document.getElementById("display-tip-amt").innerText = tip.toFixed(2);
    document.getElementById("display-total").innerText = total.toFixed(2);
    document.getElementById("selectedTip").innerText = msg;
  }
})();
