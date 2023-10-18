describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
      
    it("Check the report title before and after click", () => {
        cy.get("[data-cy=report-title-before]")
            .should('not.exist')
        cy.get("[data-cy=gen-report]").click()
        cy.get("[data-cy=report-title-after]")
            .should('be.visible')
        
    })

})