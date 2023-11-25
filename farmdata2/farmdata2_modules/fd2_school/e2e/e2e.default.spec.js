describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")    
    })
      
    it("Check the page header", () => {
        cy.get("[data-cy=page-header]").should("have.text", "Harvest Report");
    })

    it ("Date field validation", () => {
        cy.get("[data-cy=start-date]").should("have.value", "2020-05-05T01:01");
        cy.get("[data-cy=end-date]").should("have.value", "2020-05-15T01:01");
    })

    it ("Crop list validation", () => {
        cy.get("[data-cy=crop-list]").children().should("have.length", 111);
        cy.get("[data-cy=crop-list]").children().eq(0).should("have.value", "ARUGULA");
        cy.get("[data-cy=crop-list]").children().eq(4).should("have.value", "BEAN-FAVA");
        cy.get("[data-cy=crop-list]").children().eq(110).should("have.value", "ZUCCHINI");
    })
})