describe("Test the harvest report default values", () => { 
    beforeEach(() => { 
        cy.login("manager1", "farmdata2") 
        cy.visit("/farm/fd2-school/fd2") 
    }) 
    it("Check the table header", () => { 
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=h0]").should("have.text","ID")
        cy.get("[data-cy=h1]").should("have.text","Date")
        cy.get("[data-cy=h2]").should("have.text","Area")
        cy.get("[data-cy=h3]").should("have.text","Crop")
        cy.get("[data-cy=h4]").should("have.text","Yield")
        cy.get("[data-cy=h5]").should("have.text","Units")

        cy.get("[data-cy=table-headers]").children()
        .should("have.length",6)
    }) 

    it("Check the filtering by crop", () => { 
        // let the page loading the crop-dropdown
        cy.get("[data-cy=crop-dropdown]")
        .wait(50000)
        //select crop ARUGULA which is the second crop row
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=crop-dropdown]>[data-cy=dropdown-input]>[data-cy=option1]")
        cy.get("[data-cy=table-body]").children().should("have.length",4)
        //check each row has the same filtering crop
        cy.get("[data-cy=h3]>[data-cy=r0]").should("have.text","ARUGULA")
        cy.get("[data-cy=h3]>[data-cy=r1]").should("have.text","ARUGULA")
        cy.get("[data-cy=h3]>[data-cy=r2]").should("have.text","ARUGULA")
        cy.get("[data-cy=h3]>[data-cy=r3]").should("have.text","ARUGULA")

    }) 
})