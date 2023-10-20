describe("Test the harvest report default values", () => { 
    beforeEach(() => { 
        cy.login("manager1", "farmdata2") 
        cy.visit("/farm/fd2-school/e2e") 
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
        .wait(10000)
        // check first crop name
        cy.get("[data-cy=crop-dropdown]").children().eq(0)
        .should("have.value","ARUGULA")
        // check fifth crop name
        cy.get("[data-cy=crop-dropdown]").children().eq(4)
        .should("have.value","BEAN-FAVA")
        // check last crop name
        cy.get("[data-cy=crop-dropdown]").children().eq(-1)
        .should("have.value","ZUCCHINI")
        // check total number of crops
        cy.get("[data-cy=crop-dropdown]").children()
        .should("have.length",111)
    }) 
}) 