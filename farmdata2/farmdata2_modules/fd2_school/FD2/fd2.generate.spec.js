describe("Test  values after clicking Generate Report", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
      
    it("Check Generate Button", () => {

        cy.get("[data-cy=title-element]")
            .should("not.exist")

        cy.get("[data-cy=generate-report-button]").click()

        cy.get("[data-cy=title-element]")
            .should("be.visible")

        
    })
    it("Check Report Info", () => {

        cy.get("[data-cy=generate-report-button]").click()

        cy.get("[data-cy=report-info]").children().eq(0)
            .should("contain.text", "Sample Farm")

        cy.get("[data-cy=report-info]").children().eq(1)
            .should("contain.text", "manager1")

        cy.get("[data-cy=language]")
            .should("contain.text", "English")
        
    })



})
