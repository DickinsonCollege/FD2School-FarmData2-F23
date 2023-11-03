describe('Test the seeding input page', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-field-kit/seedingInput')
    }) 

    it("Testing the header", () => {
        cy.get("[data-cy=labor_header]")
        .should("have.text", "Labor")
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

    it("Test the number of workers field", () => {
        //Check the field of number of workers should be empty and enabled
        cy.get("[data-cy=num-worker-input]").should('exist').should("have.value", "")
    })

    it("Test the time worked field", () => {
        //Check the field of number of time worked should be empty and enabled
        cy.get("[data-cy=minute-input]").should('exist').should("have.value", "")
        cy.get("[data-cy=hour-input]").should('exist').should("have.value", "")
    })

    it("Test the time unit dropdown", () => {
        //Check the dropdown for the time units is enabled
        cy.get("[data-cy=time-unit] > [data-cy=dropdown-input] option:selected").should('exist')
    })

})