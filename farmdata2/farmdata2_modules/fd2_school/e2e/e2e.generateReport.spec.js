describe("Test the harvest report values after report is generated", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
    it("Check generate report button", () => {
        cy.get("[data-cy=generate-button]")
        cy.get("[data-cy=title]").not.exist
        cy.get("[data-cy=generate-button]").click()
        cy.get("[data-cy=title]").should("be.visible")
    })
    it("Check names", () => {
        cy.get("[data-cy=generate-button]")
        cy.get("[data-cy=generate-button]").click()
        cy.get("[data-cy=farm-name]").should("have.text","Farm:Sample Farm")
        cy.get("[data-cy=username]").should("contain.text","manager1")
        cy.get("[data-cy=language]").should("have.text","English")
    })
})