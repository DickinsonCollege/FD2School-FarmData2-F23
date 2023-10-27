describe("Test the harvest report default values", () => { 
    beforeEach(() => { 
        cy.login("manager1", "farmdata2") 
        cy.visit("/farm/fd2-school/fd2") 
    }) 
    it("Check the generate report button", () => { 
        //cy.get("[data-cy=report-title]").should("not.exist")
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=report-title]").should("be.visible")
    }) 

    it("Check the farm name and language", () => { 
        //cy.get("[data-cy=farm-name]").should("not.exist")
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=farm-name]").should("be.visible")
        cy.get("[data-cy=farm-name]").should("contain.text","Sample Farm")
        cy.get("[data-cy=language]").should("have.text","English")
    }) 
})