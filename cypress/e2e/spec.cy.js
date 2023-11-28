//Cenário 1
describe('Reservar quarto', () => {
  it('Deve realizar reserva com sucesso', () => {
    cy.visit('https://site-hotel-teste-php.000webhostapp.com')
    Cypress.on('uncaught:exception', (err, runnable) => {return false;})

    cy.get('#btn_verMais').click(); // click em VER MAIS
    cy.get('#btn_fazerReserva', { timeout: 10000 }).click(); // click em FAZER RESERVA
    cy.get('#nome').type('Adri Homem')
    cy.get('#email').type('adrihomem@mailinator.com')
    cy.get('#qt_pessoas').type('1')
    cy.get('#data_checkin').type('2024-12-03')
    cy.get('#data_checkout').type('2024-12-07')
    cy.get('#btn_enviarReserva').click()
    cy.get('.mb-4').should('contain', 'Confirmação de Reserva')
  })
})

//Cenário 2
describe('Reserva com data retroativa', () => {
  it('Não deve permitir reserva com data retroativa', () => {
    cy.visit('https://site-hotel-teste-php.000webhostapp.com/quartos.php')
    cy.document().its('readyState').should('eq', 'complete')
    cy.get('#btn_verMais').click() // ver pq nao ta encontrando
    cy.get('#btn_fazerReserva').click()
    cy.get('#nome').type('Diego Homem')
    cy.get('#email').type('diego@mailinator.com')
    cy.get('#qt_pessoas').type('1')
    cy.get('#data_checkin').type('2022-12-01')
    cy.get('#data_checkout').type('2022-12-05')
    cy.get('#btn_enviarReserva').click()
    // como validar se o sistema nao esta barrando como deveria?
  })
})

//Cenário 3
describe('Cadastrar Quartos (Admin)', () => {
  it('Deve cadastrar um quarto com sucesso', () => {
    cy.wait(2000);
    cy.visit('https://site-hotel-teste-php.000webhostapp.com/admin/')
    Cypress.on('uncaught:exception', (err, runnable) => {return false;})
    cy.get('[name="email"]').type('teste@teste.com')
    cy.get('[name="senha"]').type('123456')
    cy.get('[type="submit"]').click()
    cy.get('#menu_adicionarQ').click()
    cy.get('#nome_do_quarto').type('Quarto teste 3')
    cy.get('#descricao').type('Descrição do quarto')
    cy.get('#preco_por_noite').type('150')
    cy.get('#capacidade').type('4')
    cy.get('#disponibilidade').select('1')
    cy.get('[type="submit"]').click()
    // validar 
  })
})

//Cenário 4
describe('Editar Quarto (Admin)', () => {
  it('Deve editar um quarto com sucesso', () => {
    cy.wait(2000);
    cy.visit('https://site-hotel-teste-php.000webhostapp.com/admin/')
    Cypress.on('uncaught:exception', (err, runnable) => {return false;})
    cy.get('[name="email"]').type('teste@teste.com')
    cy.get('[name="senha"]').type('123456')
    cy.get('[type="submit"]').click()
    cy.get('#menu_editarQ').click()
    cy.get('.btn btn-primary btn-sm').click()
    cy.get('[type="submit"]').should('contain', 'Salvar Alterações').click()
    // validar
  })
})

//Cenário 5
describe('Excluir Quarto (Admin)', () => {
  it('Deve excluir um quarto com sucesso', () => {
    cy.wait(2000);
    cy.visit('https://site-hotel-teste-php.000webhostapp.com/admin/')
    Cypress.on('uncaught:exception', (err, runnable) => {return false;})
    cy.get('[name="email"]').type('teste@teste.com')
    cy.get('[name="senha"]').type('123456')
    cy.get('[type="submit"]').click()
    cy.get('.btn btn-danger btn-sm').click()
    //validar
  })
})