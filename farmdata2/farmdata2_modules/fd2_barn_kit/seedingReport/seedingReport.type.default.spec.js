describe("Testing for Area Filter", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-barn-kit/seedingReport")
    })

    it("Check when if when All is selected table will contain seeding logs for multiple different areas", () => {
        
        cy.get('[data-cy=start-date-select] > [data-cy=date-select]').type('2020-05-05').blur()
        cy.get('[data-cy=end-date-select] > [data-cy=date-select]').type('2020-05-15').blur()

        cy.get('[data-cy=generate-rpt-btn]').click()

        cy.get('[data-cy=area-dropdown] > [data-cy=dropdown-input]').should('have.value', 'All')

        cy.get('[data-cy=td-r0c2]').contains('K')
        cy.get('[data-cy=td-r6c2]').contains('J')
        cy.get('[data-cy=td-r10c2]').contains('ALF-1')
        cy.get('[data-cy=td-r11c2]').contains('SEEDING BENCH')
        cy.get('[data-cy=td-r66c2]').contains('ALF-3')
    })
})