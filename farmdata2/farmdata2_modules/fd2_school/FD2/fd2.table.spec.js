describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/FD2")
        cy.contains('Generate').click()
    })
      
    it("Checks table headers", () => {
        cy.get("[data-cy=h0]").should("have.text","Date")
        cy.get("[data-cy=h1]").should("have.text","Area")
        cy.get("[data-cy=h2]").should("have.text","Crop")
        cy.get("[data-cy=h3]").should("have.text","Yield")
        cy.get("[data-cy=h4]").should("have.text","Units")
    })
})