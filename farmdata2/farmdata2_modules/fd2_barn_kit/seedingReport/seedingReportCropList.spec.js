const dayjs = require("dayjs")

describe("Test the seeding report summary values values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-barn-kit/seedingReport")
        cy.get('[data-cy=start-date-select]').type('2020-05-05')
        cy.get('[data-cy=end-date-select]').type('2020-05-06')
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy=r0-edit-button]').click()
        
    })
    it("Tests crop list length", () => {
        cy.get('[data-cy=r0-Crop-input]').children().should('have.length',111)
    })
    
})
