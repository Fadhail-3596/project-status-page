
/**
 * Project Status Page
 * File: script.js
 * Purpose: Lightweight page initialization.
 *
 * Features:
 * - Automatically updates the copyright year.
 * - Handles missing HTML elements safely.
 * - Uses native JavaScript without external dependencies.
 */

(function () {
  "use strict";

  /**
   * Update the copyright year to the current year.
   */
  function updateCopyrightYear() {
    const yearElement = document.getElementById("year");

    if (!yearElement) {
      return;
    }

    const currentYear = new Date().getFullYear();

    yearElement.textContent = String(currentYear);
  }

  /**
   * Initialize page functionality.
   */
  function init() {
    updateCopyrightYear();
  }

  /**
   * Run initialization after the document is ready.
   * Compatible with scripts loaded using the defer attribute.
   */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, {
      once: true
    });
  } else {
    init();
  }
})();
