let rating = null;
const rating_card = document.getElementById("card");
const thankyou_card = document.getElementById("thankyou");
const rating_display = document.getElementById("rating-display");

clicked = (num) => {
  rating = num;
};

submit = () => {
  rating_card.style.display = "none";
  thankyou_card.style.display = "block";
  rating_display.innerHTML = `You selected ${rating} out of 5`;
};
