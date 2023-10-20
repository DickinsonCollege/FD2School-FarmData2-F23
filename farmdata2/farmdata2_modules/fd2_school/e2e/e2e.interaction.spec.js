describe("Test the behavior of the Generate Report button", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })

    it("Check the Generate Report button", () => {
        cy.get("[data-cy=report-title]").should("not.exist")
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=report-title]").should("be.visible")
    })

    it("Check the information about the farm", () => {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=farm-name]").should("have.text", "Farm:Sample Farm")
        cy.get("[data-cy=username]").should("contain.text", "manager1")
        cy.get("[data-cy=language]").should("have.text", "English")
    })
})