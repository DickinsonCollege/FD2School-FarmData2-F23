describe("Test the output after generate report", () => {
  beforeEach(() => {
      cy.login("manager1", "farmdata2")
      cy.visit("/farm/fd2-school/e2e")
  })

  it("Test the generate report button", () => { 
    cy.get("[data-cy=report-title]").should("not.exist")
    cy.get("[data-cy=generate-report-button]").click()
    cy.get("[data-cy=report-title]").should("be.visible")
  }) 
})