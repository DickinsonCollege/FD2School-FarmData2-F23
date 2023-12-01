describe("Test the harvest report using the generate button", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
      
    it("Check the generate button", () => {
        cy.get("[data-cy=report-title]").should("not.exist")
        cy.get("[data-cy=details]").should("not.exist")
        cy.get("[data-cy=harvest-report-table]").should("not.exist")
        cy.get("[data-cy=generate-report-button").click()
        cy.get("[data-cy=report-title]").should("be.visible")
        cy.get("[data-cy=details]").should("be.visible")
        cy.get("[data-cy=harvest-report-table]").should("be.visible")
    })
})
