describe("testing signup, login and heroslider", () => {
  it("fills the signup form", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get(":nth-child(2) > .signup-input").type("dd26om");
    cy.get(":nth-child(3) > .signup-input").type("dd26om@tsn.game");
    cy.get(":nth-child(4) > .signup-input").type("1234");
    cy.get(":nth-child(5) > .signup-input").type("1234");
    cy.get(".signup-submit").click();
  });

  it("fills the login form and connects", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("#username").type("dd26om");
    cy.get("#password").type("1234");
    cy.get(".button-text").click();
  });
  it("tests that the slider changes when buttons left or right are clicked", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".control-next").click({ force: true }).click({ force: true });
    cy.get(".control-prev").click({ force: true });
  });
});