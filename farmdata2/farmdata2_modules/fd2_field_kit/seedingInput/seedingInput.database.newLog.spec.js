//Checks that a new tray seeding log is added to the database correctly after "Submit" button is clicked
describe('Check that tray seeding log is added to database', () => {
    beforeEach('Log into FarmData and visit Fieldkit tab and Seeding Report sub-tab', () => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-field-kit/seedingInput')
        cy.waitForPage()
    })
  
    it('Create new log', () => {
        cy.get('[data-cy=date-selection]')
            .click()
            .type("2023-11-01")
        cy.get('[data-cy=crop-selection] > [data-cy=dropdown-input]')
            .select(0)
        cy.get('[data-cy=tray-seedings]')
            .click()
        cy.get('[data-cy=tray-area-selection] > [data-cy=dropdown-input]')
            .select(0)
        cy.get('[data-cy=num-cell-input]')
            .type('20')
        cy.get('[data-cy=num-tray-input]')
            .type('2')
        cy.get('[data-cy=num-seed-input]')
            .type('5')
        cy.get('[data-cy=num-worker-input]')
            .type('1')
        cy.get('[data-cy=time-unit] > [data-cy=dropdown-input]')
            .select(1)
        cy.get('[data-cy=hour-input]')
            .type('1')
        cy.get('[data-cy=comments]')
            .type('This is a test log')
        //click button eventually
    })

    it('Check to see if report shows in database', () => {

    })
  
  
    })