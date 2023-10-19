describe("Your Test Suite Description", () => {
    it("Test Report Generation", () => {
      // Initially, the report header should not exist.
      cy.contains("[data-cy=report-header]", "My Sample Harvest").should("not.exist");
  
      // Click the "Generate Report" button and wait for it to be visible.
      cy.get("[data-cy=generate-report-button]").should("be.visible").click();
  
      // Wait for the report header to exist after the data is loaded.
      cy.contains("[data-cy=report-header]", "My Sample Harvest").should("exist");
    });
  }); 
  
  
  