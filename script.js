// Assuming this is your HTML structure:
// <select id="colorSelect">
//     <option value="Red">Red</option>
//     <option value="Green">Green</option>
//     <option value="Blue">Blue</option>
//     <option value="Yellow">Yellow</option>
// </select>

describe('Dropdown Test', () => {
  beforeEach(() => {
    // Visit your page or application URL
    cy.visit('your_application_url');
  });

  it('Should select an option from the dropdown', () => {
    // Ensure that the dropdown has loaded and is visible
    cy.get('#colorSelect').should('be.visible');

    // Select the desired option by its text (e.g., "Red")
    cy.get('#colorSelect').select('Red');

    // You can also assert that the selected value matches the expected value
    cy.get('#colorSelect').should('have.value', 'Red');
  });
});
