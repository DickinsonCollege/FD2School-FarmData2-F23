describe("Test the results of the Generate Report Button", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2")
    })

    it("Check the Generate Report Button", () => {
        cy.get("[data-cy=title]").not.exist
        cy.get("[data-cy=Generate-Report-Button]").click()
        cy.get("[data-cy=title]")
            .should("be.visible")
    })

    it("Check correct Farm, Username, and Language", () => {
        cy.get("[data-cy=Generate-Report-Button]").click()
        cy.get("[data-cy=farm]")
            .should("have.text","Farm: Sample Farm")
        cy.get("[data-cy=username]")
            .should("contain.text","manager1")
        cy.get("[data-cy=language]")
            .should("have.text","English")
    })
})