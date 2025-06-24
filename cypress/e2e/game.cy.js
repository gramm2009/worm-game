describe('Game E2E Tests', () => {
  it('starts the game, clicks the worm, and increments the score', () => {
    cy.visit('http://localhost:3000');
    cy.contains('START').click();
    cy.get('.game-cell.worm').should('exist');
    cy.get('.game-cell.worm').click();
    cy.contains(/1/i).should('exist');
  });
});
