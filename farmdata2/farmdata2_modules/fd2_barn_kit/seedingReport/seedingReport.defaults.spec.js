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
    it("Checks the button has the label Generate Report ", () => {
        cy.get("[data-cy=generate-rpt-btn]").should("have.text","Generate Report")
    })
    it("Checks that the Start Date is the first day of the year ", () => {
        cy.get('[data-cy=date-select]')
        .each(($el, index, $all) => {
            if (index == 0) {
                expect($el).to.have.value('2023-01-01')
            }
        })

    })


})