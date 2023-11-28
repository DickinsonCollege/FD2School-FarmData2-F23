//This test edits the data in a row of the seeding report, then cancels these changes. 
//This test ultimately tests that the cancel button does not effect the API.


describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-barn-kit/seedingReport")
        cy.get('[data-cy=start-date-select]').type('2020-05-05')
        cy.get('[data-cy=end-date-select]').type('2020-05-05')
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy=crop-dropdown] > [data-cy=dropdown-input]').select('BEET')
        cy.get('[data-cy=r0-edit-button]').click()
    })
    it("Checks that the Cancel button does not effect the database", () => {
        cy.get('[data-cy=r0-Crop-input]').select("BEAN")
        cy.get('[data-cy=r0-Area-input]').select("J")
        cy.get('[data-cy=r0-cancel-button]').click()
        cy.request('GET', 'http://fd2_farmdata2//log.json?type=farm_seeding&id=231')
        .should((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.nested.property("list.0.name").that.includes("2020-05-05 BEET K");
        })
    })

})