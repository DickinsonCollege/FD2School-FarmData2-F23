
describe("Test the harvest report generated values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    }
    )
      
    it("Check generate report button", () => {
        cy.get("[data-cy=generate-report-button]")
        cy.get("[data-cy=report-title]").not.exist
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=report-title]")
            .should("be.visible") 
          


    })
})