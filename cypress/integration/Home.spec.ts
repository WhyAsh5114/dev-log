/// <reference types="cypress" />

describe('Navigation bar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('should have proper navbar for large screen', () => {
        cy.get('[data-cy="desktop-navbar"]').should('not.have.css', 'display', 'none')
        cy.get('[data-cy="desktop-navbar"] > [data-cy="home-nav-button"]').should('be.visible').click()
    })

    it('should disable navbar on smaller screens', () => {
        cy.viewport('iphone-8')
        cy.get('[data-cy="desktop-navbar"]').should('have.css', 'display', 'none')
        cy.get('[data-cy="nav-drawer-button"]').click()
        cy.get('[data-cy="nav-drawer"] > [data-cy="home-nav-button"]').click()
        cy.get('[data-cy="home-nav-button"]').should('not.be.visible')
    })
})

export {}