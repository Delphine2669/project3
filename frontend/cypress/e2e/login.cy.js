describe("testing login", () => {
  it("fills the login form", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("#username").type("missyd");
    cy.get("#password").type("1234");
    cy.get(".button-text").click();
    cy.get(".ant-btn").click();
    cy.get(".ant-dropdown-menu-title-content").click();
  });
});
