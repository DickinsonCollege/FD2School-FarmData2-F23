describe("Testing for Field-kit Sub-tabs", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-field-kit")
    })

    //Test 1
    it("Check that the FieldKit tab contains sub-tabs for “Info” and “Seeding Input", () => {
    
    })

    //Test 2
    it("Check that the order of the tabs is “Info” and then “Seeding Input", () => {
      cy.get('.tabs--secondary > :nth-child(1) > a').should("have.contain","Info")
      cy.get('.tabs--secondary > :nth-child(2) > a').should("have.contain","Seeding Input")

    })

    //Test 3
    it("Check that there are the correct number of sub-tabs (2 at this time)", () => {
        cy.get('.tabs--secondary').should('have.length', 2)
     })
    })