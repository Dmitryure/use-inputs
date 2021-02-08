describe("helo", () => {
  it("wow", () => {
    cy.visit("http://localhost:3000");
    cy.get("div").contains("React");
  });
});
