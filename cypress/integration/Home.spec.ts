/// <reference types="cypress" />

// TODO START TESTING NOW, ENOUGH DEVELOPMENT, DO SOME TESTING FFS

describe('Navigation bar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('should have proper navbar for large screen', () => {
        cy.get('[data-cy=desktop-navbar]').should('not.have.css', 'display', 'none')
        cy.get('[data-cy=home-nav-button]').click()
    })

    it('should disable navbar on smaller screens', () => {
        cy.viewport('iphone-8')
        cy.get('[data-cy=desktop-navbar]').should('have.css', 'display', 'none')
    })
})

export {}