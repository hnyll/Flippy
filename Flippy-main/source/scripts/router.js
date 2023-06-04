export class Router {
  constructor(currentPage, previousPage) {
    this.currentPage = currentPage;
    this.previousPage = previousPage;
  }

  navigate(page) {
    // if navigating to same page as current, do nothing
    if (page === this.currentPage) {
      return;
    }

    // get references to elements
    let pageElement = document.querySelector(page);
    let currentElement = document.querySelector(this.currentPage);

    // hide the current page
    currentElement.classList.add("hidden");
    if (pageElement.classList.contains("hidden")) {
      //set previous page to the current page
      this.previousPage = this.currentPage;
      //Set new current page to page
      this.currentPage = page;
      // show the next page
      pageElement.classList.remove("hidden");
      // scroll to top of page
      document.querySelector("html").scrollTop = 0;
    }

    // hide pages and notifications that are not redirected to using
    // navigate(page)
    document
      .querySelector("notification-select-cookbook")
      .classList.add("hidden");
    document.querySelector("recipe-form").classList.add("hidden");
  }
}
