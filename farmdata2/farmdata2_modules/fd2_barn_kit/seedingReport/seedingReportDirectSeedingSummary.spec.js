const dayjs = require("dayjs")

describe("Test the seeding report summary values values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-barn-kit/seedingReport")
        cy.get('[data-cy=start-date-select').type('2020-05-05')
        cy.get('[data-cy=end-date-select').type('2020-05-06')
        cy.get('[data-cy=generate-rpt-btn').click()
        cy.get('[data-cy=crop-dropdown] > [data-cy=dropdown-input]').select('BEAN')
    })
    it("Tests total row feet planted", () => {
        cy.get('[data-cy=direct-total-rowft').should('have.text',210)
    })
    it("Tests total bed feet planted summary value", () => {
        cy.get('[data-cy=direct-total-bedft').should('have.text',105)
    })
    it("Tests total hours summary value", () => {
        cy.get('[data-cy=direct-total-hours').should('have.text',.06)
    })
    it("Tests Average row feet/hr summary value", () => {
        cy.get('[data-cy=direct-total-rowft-hour').should('have.text',3500)
    })
    it("Tests Average bed feet/hr summary value", () => {
        cy.get('[data-cy=direct-total-bedfr-hour').should('have.text',1750)
    })
})
