// Asked bing chat for this
function getRandomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
}

// Fires when button is clicked on brents page
function randomBodyBackgroundColor() {
  const body = document.querySelector("body");
  body.style.backgroundColor = getRandomColor();
}

function loadBrentsPageCode() {
  const button = document.querySelector("#that-button");
  button.addEventListener("click", randomBodyBackgroundColor);
  console.log("Function attached to button!");
}

// Once the window is loaded we will run some code.
// Usually not necessary unless it is.
window.onload = () => {
  const windowTitle = document.querySelector("title").textContent;
  console.log(`We are at ${windowTitle}`);

  // Load JS function only if brents page is loaded.
  if (windowTitle.includes("Brent")) {
    loadBrentsPageCode();
  }
};
