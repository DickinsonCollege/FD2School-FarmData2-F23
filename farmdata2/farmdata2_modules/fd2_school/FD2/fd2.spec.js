describe("Test Report Generation", () => {
    beforeEach(() => {
      cy.login("manager1", "farmdata2");
      cy.visit("/farm/fd2-school/fd2");
    });

    it("Test Report Generation", () => {
      cy.get("[data-cy=report-header]").not.exist
      cy.get("[data-cy=generate-button]")
      cy.get("[data-cy=generate-button]").click()
      cy.get("[data-cy=report-header]").should.exist
    });
    it("Checks if the farm name is correctly set after generating the report & names", () => {
        cy.get('[data-cy="generate-button"]').click();
        cy.get('[data-cy="farm-name"]').should("contain.text", "Sample Farm"); 
        cy.get('[data-cy="user-name"]').should("contain.text", "manager1");
        cy.get('[data-cy="user-lang"]').should("have.text", "en");
      });
  }); 
  