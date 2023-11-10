describe('Test the seeding input page', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-barn-kit/seedingReport')
        cy.waitForPage()
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


    //when "Tray" is selected the table shows only tray seedings. 
    it("Check table showing only tray seedings", () => {
                //Choose a specific date range
                cy.get('[data-cy=start-date-select]')
                .type('2019-01-01')
        cy.get('[data-cy=end-date-select]')
                .type('2019-03-01')
        cy.get('[data-cy=generate-rpt-btn]')
                .click()
        cy.get('[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]').select("Tray Seedings")

        cy.get('[data-cy=r1-Area]')
        .should("have.text", "SEEDING BENCH")
    })

        //when "Tray" is selected the table shows only tray seedings. 
        it("Check table showing only tray seedings", () => {
                //Choose a specific date range
                cy.get('[data-cy=start-date-select]')
                .type('2019-01-01')
        cy.get('[data-cy=end-date-select]')
                .type('2019-03-01')
        cy.get('[data-cy=generate-rpt-btn]')
                .click()
        cy.get('[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]').select("Tray Seedings")

        cy.get('[data-cy=r1-Area]')
        .should("have.text", "SEEDING BENCH")
    })

        //Only the seeding types available in the date range are shown in the dropdown 
        it("Check available seeding types are shown in dropdown in date range", () => {

                //Choose a specific date range (Only All & Direct are available)
                cy.get('[data-cy=start-date-select]')
                        .type('2019-01-01')
                cy.get('[data-cy=end-date-select]')
                        .type('2019-02-01')
                cy.get('[data-cy=generate-rpt-btn]')
                        .click()
                //Counts the number of options available
                cy.get('[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]')
                .children()
                .should("have.length", 2)
                //Checks the options are All and Direct
                cy.get('[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input] [data-cy=option0]')
                        .should("have.text", "All")
                cy.get('[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input] [data-cy=option1]')
                .should("have.text", "Direct Seedings")


                //Choose a specific date range (Only All & Tray are available)
                cy.get('[data-cy=end-date-select]')
                        .type('2019-03-04')
                cy.get('[data-cy=start-date-select]')
                        .type('2019-03-01')

                cy.get('[data-cy=generate-rpt-btn]')
                        .click()
                //Counts the number of options available
                cy.get('[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]')
                .children()
                .should("have.length", 2)
                //Checks the options are All and Direct
                cy.get('[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input] [data-cy=option0]')
                        .should("have.text", "All")
                cy.get('[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input] [data-cy=option1]')
                .should("have.text", "Tray Seedings")


                //Choose a specific date range (Every options are available)
                cy.get('[data-cy=start-date-select]')
                .type('2019-01-11')
                cy.get('[data-cy=end-date-select]')
                .type('2019-02-16')
                cy.get('[data-cy=generate-rpt-btn]')
                .click()
                //Counts the number of options available
                cy.get('[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]')
                .children()
                .should("have.length", 3)



    })


})