describe('Test the seeding input page', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-field-kit/seedingInput')
    }) 

    it("Testing time units dropdown", () => {
        //Checks the time units dropdown has the options minutes and hours
        cy.get("[data-cy=time-unit] > [data-cy=dropdown-input] > [data-cy=option0]")
           .should("have.text", "minutes")
        cy.get("[data-cy=time-unit] > [data-cy=dropdown-input] > [data-cy=option1]")
            .should("have.text", "hours")
        
        //Checks minutes is the default time units for labor data entry
        cy.get("[data-cy=time-unit] > [data-cy=dropdown-input] option:selected")
        .should("have.text", "minutes")

    })

})