describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
      
    it("Check the page header", () => {
        cy.get("[data-cy=page-header]")
            .should("have.text","Harvest Report")
    })
    it("Select Start and End Inputs"), () => {
        const startDate = "05/05/2020".split('/').reverse().join('-');
        const endDate = "05/15/2020".split('/').reverse().join('-');
        cy.get('[data-cy=start-date-input]')
            .should('have.value', '05/05/2020');
        cy.get('[data-cy=end-date-input]')
           .should('have.value', '05/15/2020');
    }
})
