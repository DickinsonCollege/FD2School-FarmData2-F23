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
                .type('2019-03-15')
        cy.get('[data-cy=generate-rpt-btn]')
                .click()
        cy.get('[data-cy="report-table"] tbody tr').its('length').as('initialRowCount');

        // Check the checkbox of the first row
        cy.get('[data-cy="report-table"] tbody tr:first-child input[type="checkbox"]').check();
        

        // Click the "Delete" buttons
        cy.get('[data-cy=delete-button]')
                .click()

        // Wait for the deletion process to complete
        cy.waitForPage()

        // Get the initialRowCount from the alias
        cy.get('@initialRowCount').then((initialRowCount) => {
            cy.get('[data-cy="report-table"] tbody tr').should('have.length', initialRowCount - 1);
        });
    })

    it('should delete many rows and verify removal from the table and database', () => {
        cy.get('[data-cy=start-date-select]')
                .type('2019-01-01')
        cy.get('[data-cy=end-date-select]')
                .type('2019-03-15')
        cy.get('[data-cy=generate-rpt-btn]')
                .click()
        cy.get('[data-cy="report-table"] tbody tr').its('length').as('initialRowCount');

        // Check the checkbox of the 1st + 2nd row
        cy.get('[data-cy="report-table"] tbody tr:first-child input[type="checkbox"]').check();
        cy.get('[data-cy="report-table"] tbody tr:second-child input[type="checkbox"]').check();
        
        // Click the "Delete" buttons
        cy.get('[data-cy=delete-button]') .click()
        cy.on("window:confirm", function(alert){
                return true;})

        // Wait for the deletion process to complete
        cy.waitForPage()

        // Get the initialRowCount from the alias
        cy.get('@initialRowCount').then((initialRowCount) => {
            cy.get('[data-cy="report-table"] tbody tr').should('have.length', initialRowCount - 2);
        });
    })

    it('cancel deleting row and checking that it was not removed from table and database', () => {
        cy.get('[data-cy=start-date-select]')
                .type('2019-01-01')
        cy.get('[data-cy=end-date-select]')
                .type('2019-03-15')
        cy.get('[data-cy=generate-rpt-btn]')
                .click()
        //cy.get('[data-cy="report-table"] tbody tr').its('length').as('initialRowCount');

         // Check the checkbox of the first row
        cy.get('[data-cy="report-table"] tbody tr:first-child input[type="checkbox"]').check();

        // cy.viewport(1500, 1500) 
         // Click the "Delete" and cancel button
         cy.get('[data-cy=delete-button]')
                 .click()
        cy.on("window:confirm", function(alert){
                return false;})
 
         // Wait for the deletion process to complete
         cy.waitForPage()
 
         // Get the initialRowCount from the alias
         cy.get('@initialRowCount').then((initialRowCount) => {
             cy.get('[data-cy="report-table"] tbody tr').should('have.length', initialRowCount - 1);
         });



    })

})