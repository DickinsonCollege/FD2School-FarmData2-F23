describe("Test the generate report feature", () => {
  beforeEach(() => {
      cy.login("manager1", "farmdata2")
      cy.visit("/farm/fd2-school/e2e")
  })
    
  it("Check the generate report", () => {
    cy.get("[data-cy=report-title").should("have.text","Mock Harvest Report")
    cy.get("[data-cy=report-button]").click()
  })
  it("Checks the name of farm",() => {
    cy.get("[data-cy=report-button]").click()
    cy.get("[data-cy=farm-name]")
      .should("have.text","Farm: Sample Farm")
  })
  it("Checks the name of user",() => {
    cy.get("[data-cy=report-button]").click()
    cy.get("[data-cy=user-name]")
      .should("contains.text","manager1")
  })
  it("Checks the language",() => {
    cy.get("[data-cy=report-button]").click()
    cy.get("[data-cy=language-check]")
      .should("have.text"," English ")
  })

})