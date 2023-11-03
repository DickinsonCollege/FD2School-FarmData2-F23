//generates seeding reports to check that the Direct Seeding Summary Table at the bottom of the report
describe('Test the Direct Seeding Summary Report Table', () => {
  beforeEach('Log into FarmData and visit BarnKit tab and Seeding Report sub-tab', () => {
    cy.login('manager1', 'farmdata2')
    cy.visit('/farm/fd2-barn-kit/seedingReport')
    cy.waitForPage()
  })



  })