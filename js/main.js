const price = document.querySelector("#price-range");
const numPageviews = document.querySelector(".pageviews-num");
const cost = document.querySelector(".billing-cost");
const toggleSwitch = document.querySelector("#billing-toggle-switch");
const badge = document.querySelector(".badge");

const updateInfo = (pageviews, amount) => {
  numPageviews.textContent = pageviews;
  cost.textContent = amount;
};

const updateSliderColor = (slider) => {
  let value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%) ${value}%, hsl(224, 65%, 95%) 100%`;
};

const displayPrice = () => {
  if (toggleSwitch.checked) {
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
  } else {
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
toggleSwitch.addEventListener("input", displayPrice);

window.addEventListener("resize", () => {
  setBadgeContent();
});
