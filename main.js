const adviceCounter = document.getElementById("advice-counter");
const adviceText = document.getElementById("advice-text");
const subBtn = document.getElementById("sub-btn");

// Run the fetchData function when the page is loaded
window.onload = fetchData;



// fetchData function to show random Quote from API
async function fetchData() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const json = await response.json();
  console.log(json);
  adviceCounter.innerText = `Advice #${json.slip.id}`;
  adviceText.innerText =  `"${json.slip.advice}"`;
}

// Execute the function as soon as the dice button is clicked
subBtn.addEventListener('click', fetchData);