//generates seeding reports to check that the Direct Seeding Summary Table at the bottom of the report
describe('Test the Direct Seeding Summary Report Table', () => {
  beforeEach('Log into FarmData and visit BarnKit tab and Seeding Report sub-tab', () => {
    cy.login('manager1', 'farmdata2')
    cy.visit('/farm/fd2-barn-kit/seedingReport')
    cy.waitForPage()
  })

  //Ally's Test
  it("Checks that the table exists and is visible", () => {

    //select dates
    cy.get("[data-cy=date-range-selection]")
    cy.get("[data-cy=date-range-selection] [data-cy=date-select]").eq(0)
      .click()  
      .type("2020-01-01")
    cy.get("[data-cy=date-range-selection] [data-cy=date-select]").eq(1)
      .click()  
      .type("2023-01-01")

    //click generate report button
    cy.get("[data-cy=generate-rpt-btn]").click()

    //check when all is selected
    cy.get("[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]").select(0)
    cy.get("[data-cy=report-table]")
      .should("exist")
      .should("be.visible")

    //check when direct seeding is selected
    cy.get("[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]").select(1)
    cy.get("[data-cy=report-table]")
      .should("exist")
      .should("be.visible")

  })

  //Trang's Test

  //Charlie's Test
  


  })