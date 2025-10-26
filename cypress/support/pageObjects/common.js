class common {
  // Navigate to the URL

  navigateUrl(url) {
    cy.visit(url);
    cy.log("Navigated to the URL successfully");
  }

  // Validate the page URL
  validateUrl(url) {
    cy.url().should('include', url);
    cy.log("URL is validated successfully");
  }
}

export default common;
