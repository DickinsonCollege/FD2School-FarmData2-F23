
describe("Test the harvest report generated values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2")
    }
    )
      
    it("Check generate report button", () => {
        cy.get("[data-cy=generate-report-button]")
        cy.get("[data-cy=report-title]").not.exist
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=report-title]")
            .should("be.visible") 
          
    })

    it("Check farm name", () => {
        cy.get("[data-cy=farm-name]").not.exist
        cy.get("[data-cy=user-name]").not.exist
        cy.get("[data-cy=language]").not.exist

        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=farm-name]")
        .should("have.text", "Farm:Sample Farm")
        cy.get("[data-cy=user-name]")
        .should("contain.text", "manager1")
        cy.get("[data-cy=language]")
        .should("have.text", "English")


    })


})