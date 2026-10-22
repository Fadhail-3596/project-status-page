
/**
 * Project Status Page
 * Lightweight vanilla JavaScript.
 */

(function () {
  "use strict";

  /**
   * Update the copyright year automatically.
   */
  function updateCopyrightYear() {
    const yearElement = document.getElementById("year");

    if (!yearElement) {
      return;
    }

    yearElement.textContent = String(
      new Date().getFullYear()
    );
  }

  /**
   * Initialize the page.
   */
  function init() {
    updateCopyrightYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, {
      once: true
    });
  } else {
    init();
  }
})();
