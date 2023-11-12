//generates seeding reports to check that the Direct Seeding Summary Table at the bottom of the report
describe('Test the Direct Seeding Summary Report Table', () => {
  beforeEach('Log into FarmData and visit BarnKit tab and Seeding Report sub-tab', () => {
    cy.login('manager1', 'farmdata2')
    cy.visit('/farm/fd2-barn-kit/seedingReport')
    cy.waitForPage()
  })

  //Ally's Test
  it("Checks that the summary table exists and is visible", () => {

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
    cy.get("[data-cy=direct-summary]")
      .should("exist")
      .should("be.visible")

    //check when direct seeding is selected
    cy.get("[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]").select(1)
    cy.get("[data-cy=direct-summary]")
      .should("exist")
      .should("be.visible")

  })

  //Trang's Test
  it("Checks that the summary table does not exists or is not visible when Tray seeding is selected ", () => {
    
    //select dates
    cy.get("[data-cy=date-range-selection]")
    cy.get("[data-cy=date-range-selection] [data-cy=date-select]").eq(0)
      .click()  
      .type("2020-05-20")
    cy.get("[data-cy=date-range-selection] [data-cy=date-select]").eq(1)
      .click()  
      .type("2020-05-30")

    //Generate report button
    cy.get("[data-cy=generate-rpt-btn]").click()

    //check when tray seeding is selected
    cy.get("[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]").select(2)
    cy.get("[data-cy=direct-summary]")
      .should("not.exist")
  })

  //Charlie's Test
  it("Checks that the correct error message is displayed", () => {
    //Enters date on which there were no direct seedings
    cy.get("[data-cy=date-range-selection]")
    cy.get("[data-cy=date-range-selection] [data-cy=date-select]").eq(0)
      .click()  
      .type("2020-05-06")
    cy.get("[data-cy=date-range-selection] [data-cy=date-select]").eq(1)
      .click()  
      .type("2020-05-06")

    //Generates the summary table
    cy.get("[data-cy=generate-rpt-btn]").click()

    //Checks that the correct error message is displayed when 'All' seeding types is selected
    cy.get("[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]").select(0)
    cy.get("[data-cy=direct-no-logs]")
      .should("exist")
      .should("have.text","There are no Direct Seeding logs with these parameters")

    //Checks that the correct error message is displayed when 'All' seeding types is selected
    cy.get("[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]").select(1)
    cy.get("[data-cy=direct-no-logs]")
      .should("exist")
      .should("have.text","There are no Direct Seeding logs with these parameters")
  })


})