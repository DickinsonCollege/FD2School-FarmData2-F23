//test the default contents of the "Data" section of the Seeding Input Form in the FieldKit
//including header, date input element, and crop dropdown, 
describe('test the Seeding Input Form Data defaults', () => {
  beforeEach("Log into FarmData and visit FieldKit tab and Seeding Input sub-tab", () => {
    cy.login('manager1', 'farmdata2')
    cy.visit('/farm/fd2-field-kit/seedingInput')
  })

  //Ally's Tests
  it("Check default value of date input element", () => {
    const dayjs = require('dayjs')
    cy.get("[data-cy=date-selection] > [data-cy=date-select]")
      .should("have.value",dayjs().format('YYYY-MM-DD').toString())
  })

  it("Check that crop drop down is enabled", () => {
    cy.get("[data-cy=crop-selection]")
      .should("exist")

  })


  //Charlie's Tests
  it("Checks if crop drop down is correct", () => {
    //Checks if the drop down has a selected value; it should not
    cy.get("[data-cy=crop-selection]")
      .should("have.value","")

    //Checks to see if the drop down contains the correct crop list by checking the length and if certain indexes have the correct values
    cy.get("[data-cy=crop-selection] > [data-cy=dropdown-input]").children()
      .should("have.length","111")
    cy.get("[data-cy=crop-selection] > [data-cy=dropdown-input] > [data-cy=option0]")
      .should("have.text","ARUGULA")
    cy.get("[data-cy=crop-selection] > [data-cy=dropdown-input] > [data-cy=option110]")
      .should("have.text","ZUCCHINI")
  })

  //Trang's Tests
  it("Check if it has the header 'Data", () => {
    cy.get("[data-cy=data_header]")
      .should("have.text", "Data")

  })

  it("", () => {

  })

  })