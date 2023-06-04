class FlashcardSetCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "styles/edit-cookbook.css";

    const fcSetCard = document
      .getElementById("flashcard-set-card")
      .content.cloneNode(true);

    this.shadowRoot.append(stylesheet);
    this.shadowRoot.append(fcSetCard);
  }
}

customElements.define("fc-set-card", FlashcardSetCard);
