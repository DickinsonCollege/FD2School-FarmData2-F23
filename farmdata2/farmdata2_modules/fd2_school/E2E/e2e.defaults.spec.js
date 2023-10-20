describe("Test the harvest report default values", () => {
    beforeEach(() => {
      cy.login("manager1", "farmdata2");
      cy.visit("/farm/fd2-school/e2e");
    });
  
    it("Check the page header", () => {
      cy.get("[data-cy=page-header]").should("have.text", "Harvest Report");
    });
  
    it("Select start and end date inputs", () => {
      // Adjust the default date format to "MM/DD/YYYY" to match the HTML input format
      const startDate = "05/05/2020";
      const endDate = "05/15/2020";
  
      cy.get('[data-cy=start-date-label]').should('have.value', startDate);
      cy.get('[data-cy=end-date-label]').should('have.value', endDate);
    });

  
    it("Find and select the crop dropdown element", () => {
      cy.get('[data-cy=crop-dropdown]').should('exist');
    });

    it("Test the crop Dropdown", () => {
        cy.login("manager1", "farmdata2");
        cy.visit("/farm/fd2-school/e2e");
        cy.get("[data-cy=crop-dropdown]").select("ARUGULA");
        cy.get("[data-cy=crop-dropdown] option").should("have.length", 111);

    }) 

  });
  