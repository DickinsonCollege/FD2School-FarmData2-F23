describe("Test the harvest report default values", () => {
  beforeEach(() => {
      cy.login("manager1", "farmdata2")
      cy.visit("/farm/fd2-school/FD2")
  })
    
  it("Check the page header", () => {
  cy.get("[data-cy=page-header]")
    .should("have.text","Harvest Report")
  })
  it("Check the default start/end dates", () => {
  cy.get("[data-cy=start-date]")
    .should("have.value","2020-05-05")
  cy.get("[data-cy=end-date]")
    .should("have.value","2020-05-15")
  })
  it("Check the crop dropdown", () => {
    cy.get("[data-cy=option0")
      .should("have.text","All")
    cy.get("[data-cy=option1")
      .should("have.text","ARUGULA")
    cy.get("[data-cy=option4")
      .should("have.text","BEAN-DRY")
    cy.get("[data-cy=dropdown-input]").children()
      .should("have.length","112")
    })
})
