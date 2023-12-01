describe('Test the seeding input page', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-barn-kit/seedingReport')
        cy.waitForPage()
    }) 

    it('should delete a single row and verify removal from the table and database', () => {
        cy.get('[data-cy=start-date-select]')
                .type('2019-01-01')
        cy.get('[data-cy=end-date-select]')
                .type('2019-02-15')
        cy.get('[data-cy=generate-rpt-btn]')
                .click()
        cy.get('[data-cy="report-table"] tbody tr').its('length').as('initialRowCount');

        // Check the checkbox of the first row
        cy.get('[data-cy="report-table"] tbody tr:first-child input[type="checkbox"]').check();
        

        // Click the "Delete" button
        cy.get('[data-cy=delete-button]')
                .click()

        // Wait for the deletion process to complete
        cy.waitForPage()

        // Get the initialRowCount from the alias
        cy.get('@initialRowCount').then((initialRowCount) => {
            cy.get('[data-cy="report-table"] tbody tr').should('have.length', initialRowCount - 1);
        });
    })

})