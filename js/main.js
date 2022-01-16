const price = document.querySelector("#price-range");
const numPageviews = document.querySelector(".pageviews-num");
const cost = document.querySelector(".billing-cost");
const toggleIndicator = document.querySelector(".circle");
const toggleSlider = document.querySelector(".toggle-slider");
const badge = document.querySelector(".badge");
const radioButtons = document.querySelectorAll("input[type='radio']");
let billingSelection = document.querySelector(
  'input[name="billing-selection"]:checked'
).value;

const updateInfo = (pageviews, amount) => {
  numPageviews.textContent = pageviews;
  cost.textContent = amount;
};

const updateSliderColor = (slider) => {
  let value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%) ${value}%, hsl(224, 65%, 95%) 100%`;
};

const displayPrice = () => {
  if (billingSelection === "Yearly Billing") {
    if (price.value === "0") {
      updateInfo("10K", "$6.00");
    } else if (price.value === "1") {
      updateInfo("50K", "$9.00");
    } else if (price.value === "2") {
      updateInfo("100K", "$12.00");
    } else if (price.value === "3") {
      updateInfo("500K", "$18.00");
    } else {
      updateInfo("1M", "$27.00");
    }
  } else if (billingSelection === "Monthly Billing") {
    if (price.value === "0") {
      updateInfo("10K", "$8.00");
    } else if (price.value === "1") {
      updateInfo("50K", "$12.00");
    } else if (price.value === "2") {
      updateInfo("100K", "$16.00");
    } else if (price.value === "3") {
      updateInfo("500K", "$24.00");
    } else {
      updateInfo("1M", "$36.00");
    }
  }
};

const setBadgeContent = () => {
  if (window.innerWidth > 550) {
    badge.textContent = "25% discount";
  } else {
    badge.textContent = "-25%";
  }
};

displayPrice();
updateSliderColor(price);
setBadgeContent();

price.addEventListener("input", (event) => {
  displayPrice();
  updateSliderColor(event.target);
});

window.addEventListener("resize", () => {
  setBadgeContent();
});

radioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    billingSelection = button.value;
    displayPrice();
    if (billingSelection === "Yearly Billing") {
      toggleIndicator.classList.add("toggle-left");
      toggleSlider.style.background = "hsl(174, 86%, 45%)";
    } else {
      toggleIndicator.classList.remove("toggle-left");
      toggleSlider.style.background = "hsl(223, 50%, 87%)";
    }
  });
});

toggleSlider.addEventListener("click", () => {
  if (billingSelection === "Monthly Billing") {
    toggleIndicator.classList.add("toggle-left");
    toggleSlider.style.background = "hsl(174, 86%, 45%)";
    billingSelection = "Yearly Billing";
  } else if (billingSelection === "Yearly Billing") {
    toggleIndicator.classList.remove("toggle-left");
    toggleSlider.style.background = "hsl(223, 50%, 87%)";
    billingSelection = "Monthly Billing";
  }
  displayPrice();
});
