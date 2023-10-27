describe("Test if the CustomTableComponent works", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2")
    })

    it("Check table headers", () => {
        cy.get("[data-cy=Generate-Report-Button]").click()
        cy.get("[data-cy=h0]")
            .should("have.text","Date")
        cy.get("[data-cy=h1]")
            .should("have.text","Area")
        cy.get("[data-cy=h2]")
            .should("have.text","Crop")
        cy.get("[data-cy=h3]")
            .should("have.text","Units")
        cy.get("[data-cy=h4]")
            .should("have.text","Yield")
        cy.get("[data-cy=table-headers]").children()
            .should("have.length",5)
    })

    it("Check everything works", () => {
        cy.get("[data-cy=crop-selection] > [data-cy=dropdown-input]")
            .select(1)
        cy.get("[data-cy=Generate-Report-Button]").click()
        cy.get("[data-cy=table-body]").children()
            .should("have.length",4)
        cy.get("[data-cy=table-body]").children().eq(0).should("contain.text","ARUGULA")
        cy.get("[data-cy=table-body]").children().eq(1).should("contain.text","ARUGULA")
        cy.get("[data-cy=table-body]").children().eq(2).should("contain.text","ARUGULA")
        cy.get("[data-cy=table-body]").children().eq(3).should("contain.text","ARUGULA")
    })
})