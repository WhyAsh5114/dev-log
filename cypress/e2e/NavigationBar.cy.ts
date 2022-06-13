/// <reference types="cypress" />

describe('Navigation bar on desktop', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('should have proper navbar for large screen', () => {
        cy.get('[data-cy="desktop-navbar"]').should('not.have.css', 'display', 'none')
        cy.get('[data-cy="desktop-navbar"] > [data-cy="home-nav-button"]').should('be.visible').click()
    })

    it('should redirect to correct places on desktop', () => {
        cy.get('[data-cy="desktop-navbar"] > [data-cy="projects-nav-button"]').should('be.visible').click()
        cy.url().should('eq', 'http://localhost:3000/projects')
        cy.get('[data-cy="project-page-container"]').should('be.visible')
        cy.get('[data-cy="desktop-navbar"] > [data-cy="about-nav-button"]').should('be.visible').click()
        cy.url().should('eq', 'http://localhost:3000/about')
        cy.get('[data-cy="about-page-container"]').should('be.visible')
        cy.get('[data-cy="desktop-navbar"] > [data-cy="home-nav-button"]').should('be.visible').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })
})


describe('Navigation bar on desktop', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.viewport('iphone-se2')
    })

    it('should disable navbar on smaller screens', () => {
        cy.get('[data-cy="desktop-navbar"]').should('have.css', 'display', 'none')
        cy.get('[data-cy="nav-drawer-button"]').click()
        cy.get('[data-cy="nav-drawer"] > [data-cy="home-nav-button"]').click()
        cy.get('[data-cy="nav-drawer"]').should('not.be.visible')
    })

    it('should redirect to correct places on mobile', () => {
        cy.viewport('iphone-se2')
        cy.get('[data-cy="desktop-navbar"]').should('have.css', 'display', 'none')

        cy.get('[data-cy="nav-drawer-button"]').click()
        cy.get('[data-cy="nav-drawer"] > [data-cy="projects-nav-button"]').click()
        cy.get('[data-cy="nav-drawer"]').should('not.be.visible')
        cy.get('[data-cy="project-page-container"]').should('be.visible')
        cy.url().should('eq', 'http://localhost:3000/projects')

        cy.get('[data-cy="nav-drawer-button"]').click()
        cy.get('[data-cy="nav-drawer"] > [data-cy="about-nav-button"]').click()
        cy.get('[data-cy="nav-drawer"]').should('not.be.visible')
        cy.get('[data-cy="about-page-container"]').should('be.visible')
        cy.url().should('eq', 'http://localhost:3000/about')

        cy.get('[data-cy="nav-drawer-button"]').click()
        cy.get('[data-cy="nav-drawer"] > [data-cy="home-nav-button"]').click()
        cy.get('[data-cy="nav-drawer"]').should('not.be.visible')
        cy.get('[data-cy="home-page-container"]').should('be.visible')
        cy.url().should('eq', 'http://localhost:3000/')
    })
})
