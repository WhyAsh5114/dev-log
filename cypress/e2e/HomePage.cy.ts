/// <reference types="cypress" />

describe('Home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('should have the correct text', () => {
        cy.get("h1").should('have.text', 'Hi, my name is Yash').should('be.visible')
        cy.get("h2").should('have.text', 'I am a full-stack developer, who is').should('be.visible')
        
        cy.get("p").should('contain.text', 'Super excited about new technologies').should('be.visible')
        cy.get("p").should('contain.text', 'Ready to tackle challenges head on').should('be.visible')
        cy.get("p").should('contain.text', 'Always willing to learn').should('be.visible')
    })
})