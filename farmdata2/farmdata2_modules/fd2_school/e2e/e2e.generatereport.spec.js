describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")    
    })
      
    it("Button does generate report", () => {
        cy.get("[data-cy=generate-button]").click();
        cy.get("[data-cy=report-name]").should("be.visible");
    })

    it("Report values accurate", () =>
    {
        cy.get("[data-cy=generate-button]").click();
        cy.get("[data-cy=report-farm-name]").should("contain.text", "Sample Farm");
        cy.get("[data-cy=report-language]").should("contain.text", "English");
    })
})