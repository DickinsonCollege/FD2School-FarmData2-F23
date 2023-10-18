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

    it("Check farm name, user name, and language after click", () => {
        cy.get("[data-cy=gen-report]").click()
        cy.get("[data-cy=farm-name]")
            .should('have.text', "Farm: Sample Farm")
        cy.get("[data-cy=user-name]")
            .should('contain.text', "manager1")
        cy.get("[data-cy=language-check]")
            .should('have.text', " English ")
        
    })

})