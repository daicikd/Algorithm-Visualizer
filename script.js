const arrayContainer = document.getElementById("array-container");
let array = [];

// Function to generate a new random array
function generateArray() {
  array = [];
  arrayContainer.innerHTML = "";  // Clear the current array
  for (let i = 0; i < 52; i++) {
    const value = Math.floor(Math.random() * 200) + 20;  // Random height between 20 and 220
    array.push(value);
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value}px`;
    arrayContainer.appendChild(bar);
  }
}

// Utility function to pause for animation
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Bubble Sort with animation
async function bubbleSort() {
  const bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      bars[j].classList.add("active");
      bars[j + 1].classList.add("active");

      if (array[j] > array[j + 1]) {
        // Swap heights in the DOM
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        bars[j].style.height = `${array[j]}px`;
        bars[j + 1].style.height = `${array[j + 1]}px`;
      }
      await sleep(20);  // Control speed of the animation
      bars[j].classList.remove("active");
      bars[j + 1].classList.remove("active");
    }
  }
}

// Selection Sort with animation
async function selectionSort() {
  const bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    bars[minIndex].classList.add("active");

    for (let j = i + 1; j < array.length; j++) {
      bars[j].classList.add("active");

      if (array[j] < array[minIndex]) {
        bars[minIndex].classList.remove("active");
        minIndex = j;
        bars[minIndex].classList.add("active");
      }
      await sleep(20);  // Control speed of the animation
      bars[j].classList.remove("active");
    }

    // Swap elements
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
      bars[i].style.height = `${array[i]}px`;
      bars[minIndex].style.height = `${array[minIndex]}px`;
    }
    bars[minIndex].classList.remove("active");
  }
}

// Initialize with a random array
generateArray();
