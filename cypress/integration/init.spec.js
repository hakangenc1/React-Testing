/// <reference types="Cypress" />

describe('Cypress', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('check todo input', () => {
    cy.focused().should('have.class', 'todo-input');
  });

  it.only('accepts input', () => {
    const typedText = 'Buy milk';
    cy.get('.todo-input')
      .type(typedText)
      .should('have.value', typedText);
  });

  context('Form submission', () => {
    it.only('add a new item on submit', () => {
      const itemText = 'Buy eggs';
      cy.get('.todo-input').type(itemText);
      cy.get('.btn-click').click();
      cy.get('.todo-input').should('have.value', '');
      cy.get('.todo')
        .should('have.length', 1)
        .and('contain', itemText);
    });
  });
});
