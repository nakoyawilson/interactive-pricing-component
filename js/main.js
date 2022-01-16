const price = document.querySelector("#price-range");
const numPageviews = document.querySelector(".pageviews-num");
const cost = document.querySelector(".billing-cost");
const toggleSwitch = document.querySelector("#billing-toggle-switch");

const updateInfo = (pageviews, amount) => {
  numPageviews.textContent = pageviews;
  cost.textContent = amount;
};

const displayPrice = () => {
  if (toggleSwitch.checked) {
    if (price.value === "0") {
      updateInfo("10K", "$6");
    } else if (price.value === "1") {
      updateInfo("50K", "$9");
    } else if (price.value === "2") {
      updateInfo("100K", "$12");
    } else if (price.value === "3") {
      updateInfo("500K", "$18");
    } else {
      updateInfo("1M", "$27");
    }
  } else {
    if (price.value === "0") {
      updateInfo("10K", "$8");
    } else if (price.value === "1") {
      updateInfo("50K", "$12");
    } else if (price.value === "2") {
      updateInfo("100K", "$16");
    } else if (price.value === "3") {
      updateInfo("500K", "$24");
    } else {
      updateInfo("1M", "$36");
    }
  }
};

displayPrice();

price.addEventListener("change", displayPrice);
toggleSwitch.addEventListener("change", displayPrice);
