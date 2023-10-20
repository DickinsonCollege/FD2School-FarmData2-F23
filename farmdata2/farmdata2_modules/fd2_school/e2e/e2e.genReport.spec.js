describe("Test the results of the Generate Report Button", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })

    it("Check the Generate Report Button", () => {
        cy.get("[data-cy=title]").not.exist
        cy.get("[data-cy=Generate-Report-Button]").click()
        cy.get("[data-cy=title]")
            .should("be.visible")
    })
})