describe("Test the harvest report generation", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
      
    it("Check the generate report button", () => {
        cy.get("[data-cy=report-title]").not.exist
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=report-title]").should("be.visible")
    })

    it("Check the report details", () => {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=farm-name]").should("have.text", "Sample Farm")
        cy.get("[data-cy=user-name]").should("contain.text", "manager1")
        cy.get("[data-cy=language]").should("have.text", "English")
    })
})