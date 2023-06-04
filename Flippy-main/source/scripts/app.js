// import { Router } from "./router.js";

function createFCSetCard() {
  "use strict";
  const fcSetCard = document.createElement("fc-set-card");
  //   fcSetCard.classList.toggle("hidden");
  document.querySelector("body").append(fcSetCard);
}

function init() {
  "use strict";

  createFCSetCard();
}

window.addEventListener("DOMContentLoaded", init);
