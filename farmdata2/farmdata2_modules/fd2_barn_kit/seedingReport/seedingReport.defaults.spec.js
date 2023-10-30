describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-barn-kit/seedingReport")
    })
    it("Checks table header", () => {
        cy.get("[class=text-center]").should("have.text","Seeding Report")
    })
    it("Checks for 'Set Dates' section ", () => {
        cy.get("[class=panel-heading]").should("have.text","Set Dates")
    })
})