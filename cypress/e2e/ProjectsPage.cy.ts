/// <reference types="cypress" />

const fs = require('fs')

describe('Projects page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/projects');
    })

    it('should load the title', () => {
        cy.on('task', () => {
            /* TODO: basic text checking, then load and read all project files, and check if their data is
             shown correctly */
        })
    })
})

export {}