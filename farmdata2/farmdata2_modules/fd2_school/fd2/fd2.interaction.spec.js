describe("Test the behavior of the Generate Report button", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2")
    })

    it("Check the Generate Report button", () => {
        cy.get("[data-cy=report-title]").should("not.exist")
        cy.get("[data-cy=details]").should("not.exist")
        cy.get("[data-cy=harvest-report-table]").should("not.exist")
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=report-title]").should("be.visible")
        cy.get("[data-cy=details]").should("be.visible")
        cy.get("[data-cy=harvest-report-table]").should("be.visible")
    })

    it("Check the information about the farm", () => {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=farm-name]").should("have.text", "Farm:Sample Farm")
        cy.get("[data-cy=username]").should("contain.text", "manager1")
        cy.get("[data-cy=language]").should("have.text", "English")
    })

    it("should update harvest report when start date, end date and crop inputs change", () => {
        cy.get("[data-cy=start-date]").should("have.value", "2020-05-05") // check the default start date
        cy.get("[data-cy=end-date]").should("have.value", "2020-05-15") // check the default end date
        cy.get("[data-cy=crop]").should("have.text", "All") // check the default crop

        cy.get("[data-cy=start-date]").type("2020-05-10") // enter a new start date
        cy.get("[data-cy=end-date]").type("2020-05-30") // enter a new end date
        cy.get("[data-cy=crop]").select("KALE") // enter a new crop

        cy.get("[data-cy=generate-report-button]").click()

        cy.get("[data-cy=report-start-date]").should("have.text", "2020-05-10")
        cy.get("[data-cy=report-end-date]").should("have.text", "2020-05-30")
        cy.get("[data-cy=report-crop]").should("have.text", "KALE")

    })

    it("Check the title of the report when the input is changed", () => {
        cy.get("[data-cy=title]").clear() // clear the input field before entering new title
        
        cy.get("[data-cy=title]").type("Harvest Report") // enter a new title

        cy.get("[data-cy=generate-report-button]").click()

        cy.get("[data-cy=report-title]").should("have.text", "Harvest Report")
    })

    it("Check that a message is displayed if no logs are available", () => {
        cy.get("[data-cy=start-date]").clear() // clear the start date input
        cy.get("[data-cy=end-date]").clear() // clear the end date input

        cy.get("[data-cy=generate-report-button]").click()

        cy.get("[data-cy=no-record-message]").should("have.text", "There are no matching records!")
    })
})