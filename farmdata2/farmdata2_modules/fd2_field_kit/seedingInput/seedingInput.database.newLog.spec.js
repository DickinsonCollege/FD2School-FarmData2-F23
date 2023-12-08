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
            .type('This is a test log - DELETE ME')
        cy.get('[data-cy=submit-button]').click()
        cy.get('[data-cy=confirm-button]').click()
    })

  
    it('Check the database', () => {
        cy.request('GET', 'http://fd2_farmdata2/log.json?type=farm_seeding&timestamp[ge]=1698811200&timestamp[le]=1698811200').then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.list[0].movement.area[0].name).to.eq("CHUAU") //checks correct area name
        expect(response.body.list[0].quantity[0].value).to.eq('5') //checks correct number of seeds planted per cell
        expect(response.body.list[0].quantity[1].value).to.eq('2') //checks correct number of trays 
        expect(response.body.list[0].quantity[2].value).to.eq('20') //checks correct number of cells per tray
        expect(response.body.list[0].quantity[3].value).to.eq('1') //checks correct number of hours
        expect(response.body.list[0].name).to.eq('2023-11-01 ARUGULA CHUAU') //checks correct date of seeding
        expect(response.body.list[0].timestamp).to.eq('1698811200') //checks correct UNIX date
        })
    })


    })

    