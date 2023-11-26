//Cenário 1
describe('Reservar quarto', () => {
  it('Deve realizar reserva com sucesso', () => {
    cy.visit('https://site-hotel-teste-php.000webhostapp.com')
    cy.get('#btn_verMais').click(); // click em VER MAIS
    cy.get('#btn_fazerReserva').click(); // click em FAZER RESERVA
    // Preenche os dados da reserva aqui
    cy.get('#nome').type('Adri Homem')
    cy.get('#email').type('adrihomem@mailinator.com')
    cy.get('#qt_pessoas').type('2')
    cy.get('#data_checkin').type('2023-12-01')
    cy.get('#data_checkout').type('2023-12-05')
    cy.get('#btn_enviarReserva').click()
    //cy.get('.mensagemConfirmacao').should('be.visible')
  })
})

//Cenário 2
describe('Reserva com data retroativa', () => {
  it('Não deve permitir reserva com data retroativa', () => {
    cy.visit('https://site-hotel-teste-php.000webhostapp.com/quartos.php');

  });
});

//Cenário 3
describe('Cadastrar Quartos (Admin)', () => {
  it('Deve cadastrar um quarto com sucesso', () => {

    cy.visit('https://site-hotel-teste-php.000webhostapp.com/admin.php');
    
  });
});
//Cenário 4
//Cenário 5