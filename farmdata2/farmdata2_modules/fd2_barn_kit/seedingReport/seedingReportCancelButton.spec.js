//ADD TEST DESCRIPTION HERE, FULL IN DETAIL


describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-barn-kit/seedingReport")
        cy.get('[data-cy=start-date-select]').type('2020-05-05')
        cy.get('[data-cy=end-date-select]').type('2020-05-06')
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy=r0-edit-button]').click()
    })
    it("Checks that the Cancel button does not effect the database", () => {

    })

})