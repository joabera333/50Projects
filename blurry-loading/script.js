const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let int = setInterval(blurring, 30); // 30ms interval for blurring effect
function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int); // Stop the interval when load is greater than 99
  }
  loadText.innerText = `${load}%`; // Update loading text
  loadText.style.opacity = scale(load, 0, 100, 1, 0); // Change opacity of loading text
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; // Change blur effect on background image
}

function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min; // Scale function to map values from one range to another
}

// The scale function takes a number and maps it from one range (in_min, in_max) to another (out_min, out_max).
// It is used to calculate the opacity and blur values based on the load percentage.
// The blurring function increases the load percentage and updates the loading text and background blur effect accordingly.
// The setInterval function is used to call the blurring function every 30 milliseconds until the load reaches 100%.
// The clearInterval function stops the interval when the load reaches 100%, effectively ending the loading animation.

// The loadText and bg variables are used to select the loading text and background image elements in the HTML document.

// The load variable keeps track of the current loading percentage, starting from 0 and increasing to 100.

// The int variable stores the interval ID returned by setInterval, which is used to clear the interval later.

// The blurring function is defined to handle the loading animation. It increments the load variable by 1 each time it is called, and updates the loading text and background blur effect accordingly. The function also checks if the load variable has reached 100, in which case it clears the interval to stop the animation.

// The scale function is defined to map a number from one range to another. It takes five parameters: num (the number to be scaled), in_min (the minimum value of the input range), in_max (the maximum value of the input range), out_min (the minimum value of the output range), and out_max (the maximum value of the output range). The function uses a mathematical formula to calculate the scaled value and returns it.
// The scale function is used in the blurring function to calculate the opacity and blur values based on the load percentage. It maps the load percentage from the range of 0 to 100 to the desired output ranges for opacity (1 to 0) and blur (30px to 0px).

// The blurring function is called every 30 milliseconds using setInterval, creating a smooth loading animation. The interval ID is stored in the int variable, which can be cleared later using clearInterval when the load reaches 100%.

// The clearInterval function is used to stop the interval when the load reaches 100%, effectively ending the loading animation. This prevents the blurring function from being called continuously after the loading is complete.

// The loadText and bg variables are used to select the loading text and background image elements in the HTML document. These variables are used to update the content and styles of the respective elements during the loading animation.

// The load variable keeps track of the current loading percentage, starting from 0 and increasing to 100. It is incremented by 1 each time the blurring function is called, simulating the loading progress. The load variable is used to control the loading text and background blur effect.

// The int variable stores the interval ID returned by setInterval, which is used to clear the interval later. This allows the loading animation to stop once the load reaches 100%, preventing unnecessary function calls and resource usage.
