describe("Test the harvest report default values", () => { 
    beforeEach(() => { 
        cy.login("manager1", "farmdata2") 
        cy.visit("/farm/fd2-school/fd2") 
    }) 
    it("Check the page header", () => { 
        cy.get("[data-cy=page-header]")
        .should("have.text", "Harvest Report") 
    }) 

    it("Check the start and end date", () => { 
        // verify start date
        cy.get("[data-cy=start-date]")
        .should("have.value","2020-05-05")
        // verify end date
        cy.get("[data-cy=end-date]")
        .should("have.value","2020-05-15")
    }) 

    it("Check the crop dropdown", () => { 
        // let the page loading the crop-dropdown
        cy.get("[data-cy=crop-dropdown]")
        .wait(50000)
        // check first crop name
        cy.get("[data-cy=crop-dropdown]>[data-cy=dropdown-input]>[data-cy=option0]")
        .should("have.value","All")
        // check second crop name
        cy.get("[data-cy=crop-dropdown]>[data-cy=dropdown-input]>[data-cy=option1]")
        .should("have.value","ARUGULA")
        // check fifth crop name
        cy.get("[data-cy=crop-dropdown]>[data-cy=dropdown-input]>[data-cy=option4]")
        .should("have.value","BEAN-DRY")
        // check last crop name
        cy.get("[data-cy=crop-dropdown]>[data-cy=dropdown-input]>[data-cy=option111]")
        .should("have.value","ZUCCHINI")
        // check total number of crops
        cy.get("[data-cy=crop-dropdown]>[data-cy=dropdown-input]").children()
        .should("have.length",112)
    }) 
}) 