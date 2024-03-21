//Open the browser and visit the BMI Rechner page
describe('BMI Rechner tests', () => {
  // run before each test
  beforeEach(() => {
    cy.visit('http://localhost:5500')
  })

  it('loads the page', () => {
    // Test that the page loads (implicitly done by cy.visit)
  })

  // Test the BMI calculation
  it('calculates BMI', () => {
    // type in the weight and height
    cy.get('#weight').type('70')
    cy.get('#height').type('180')
    cy.get('#calculate').click()
    // check the result
    cy.get('#result').should('have.text', 'Ihr BMI beträgt: 22')
  })
})
