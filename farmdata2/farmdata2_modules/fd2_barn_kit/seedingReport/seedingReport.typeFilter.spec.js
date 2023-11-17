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
                .type('2019-02-15')
        cy.get('[data-cy=generate-rpt-btn]')
                .click()

        //check if table has both direct and tray seedings
        let typeSeeding = null
        cy.get('[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]')
            .select('All')
            .should('have.value', 'All')

        for(let r = 0; r < 6; r++){
            cy.get('[data-cy=r' + r + '-Seeding')
                .invoke('text')
                .then(seeding => {
                    typeSeeding = seeding
                    expect(typeSeeding, 'Direct')
                })
        }

        for(let r = 6; r < 9; r++){
            cy.get('[data-cy=r' + r + '-Seeding')
                .invoke('text')
                .then(seeding => {
                    typeSeeding = seeding
                    expect(typeSeeding, 'Tray')
                })
        }

    })
    /*
    //when “Direct” is selected the table shows only direct seedings.
    it("Check table showing only direct seedings", () => {
        //Choose a specific date range
        cy.get('[data-cy=start-date-select]')
                .type('2019-01-01')
        cy.get('[data-cy=end-date-select]')
                .type('2019-02-15')
        cy.get('[data-cy=generate-rpt-btn]')
                .click()

        //check if table has only direct seedings
        let typeSeeding = null
        cy.get('[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]')
            .select('Direct Seedings')
            .should('have.value', 'Direct Seedings')

        for(let r = 0; r < 6; r++){
            cy.get('[data-cy=r' + r + '-Seeding')
                .invoke('text')
                .then(seeding => {
                    typeSeeding = seeding
                    expect(typeSeeding, 'Direct')
                })
        }
    })
    */
        //when "Direct" is selected the table shows only tray seedings. 
        it("Check table showing only direct seedings", () => {
                //Choose a specific date range
                cy.get('[data-cy=start-date-select]')
                        .type('2019-01-01')
                cy.get('[data-cy=end-date-select]')
                        .type('2019-03-20')
                cy.get('[data-cy=generate-rpt-btn]')
                        .click()
                cy.get('[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]').select("Direct Seedings")

                for (let i=0; i < 7; i++){
                        cy.get('[data-cy=r'+ i +'-Area]')
                        .should("not.have.text", "SEEDING BENCH")
                }
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

        let rows = ["0", "1", "2"]
        for (let i=0; i < 27; i++){
                cy.get('[data-cy=r'+ i +'-Area]')
                .should("have.text", "SEEDING BENCH")
        }
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