describe("Test the generate report button", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2")
    })
      
    it("Check the click on generate report button", () => {
      cy.get("[data-cy=gen-report]")
      cy.get("[data-cy=check-title").should("not.exist")
      cy.get("[data-cy=gen-report]").click()
      //cy.get("[data-cy=check-title]").should("be.visible")
      
    })
  
    it("Checks the name of farm",() => {
       cy.get("[data-cy=gen-report]").click()
       cy.get("[data-cy=farm-name]")
         .should("have.text","Farm: Sample Farm")
     })
     it("Checks the name of user",() => {
       cy.get("[data-cy=gen-report]").click()
       cy.get("[data-cy=user-name]")
         .should("contains.text","manager1")
     })
     it("Checks the language",() => {
       cy.get("[data-cy=gen-report]").click()
       cy.get("[data-cy=language-check]")
         .should("contains.text"," English ")
     })
  
  })