describe('Test the seeding input page', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-barn-kit/seedingReport')
    }) 

    //“All” is selected the table shows both direct seedings and tray seedings
    it("Check table showing both direct and tray seedings", () => {
        //Choose a specific date range
        cy.get('[data-cy=start-date-select]')
                .type('2019-01-01')
        cy.get('[data-cy=end-date-select]')
                .type('2019-03-01')
        cy.get('[data-cy=generate-rpt-btn]')
                .click()

        //select All for the type of seeding
        cy.get("[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]").select("All")

        //check if table has both direct and tray seedings
    })

    //when “Direct” is selected the table shows only direct seedings.
})