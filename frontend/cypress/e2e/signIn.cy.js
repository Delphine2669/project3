describe("testing signup, login and heroslider and videoModal", () => {
  beforeEach(() => {
    cy.viewport(390, 844);
  });
  it("fills the signup form", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get(":nth-child(2) > .signup-input").type("user12");
    cy.get(":nth-child(3) > .signup-input").type("user12@gmail.com");
    cy.get(":nth-child(4) > .signup-input").type("SuperMario12*");
    cy.get(":nth-child(4) > .toggle-password > img").click({ force: true });
    cy.get(":nth-child(5) > .signup-input").type("SuperMario12*");
    cy.get(".signup-submit").click();
    cy.screenshot("signup form");
  });

  it("fills the login form and connects", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("#username").type("user12");
    cy.get("#password").type("SuperMario12*");
    cy.get(".button-text").click();
    cy.screenshot("homepage");
  });
  it("tests that the slider changes when buttons left or right are clicked", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".control-next").click({ force: true }).click({ force: true });
    cy.get(".control-prev").click({ force: true });
  });
  it("tests the video modal", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[src="/assets/logo/csgologo.webp"]').click({ force: true });
    cy.get(".video-modal-close-button > span").click({ force: true });
  });
});
