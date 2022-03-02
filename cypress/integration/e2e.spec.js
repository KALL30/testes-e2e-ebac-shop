/// <reference types="cypress" />
import DadosCheckout from '../support/page_objects/Dados-checkout'
const dadosCheck3 = require('../fixtures/Dados-de-checkout.json')
var faker = require('faker-br');




context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')

        //cy.get('#username').type('aluno_ebac@teste.com')
        //cy.get('#password').type('teste@teste.com')
        //cy.get('.woocommerce-form > .button').click()
    });

    it('Deve fazer o primeiro pedido na loja Ebac Shop, adicionar ao carrinho e fazer checkout', () => {
        
        //describe('PRIMEIRO PEDIDO')
        DadosCheckout.Checkouts()

        //describe('Checkout do primeiro Pedido')
        DadosCheckout.ConfirmaçãoCheckout()

    });

    it('Deve fazer o segundo pedido, adicionar ao carrinho e fazer o checkout - Usando a massa de dados', () => {
          
        //describe('SEGUNDO PEDIDO')
        DadosCheckout.Checkouts2()

       // describe('Checkout do segundo pedido')
        DadosCheckout.ConfirmaçãoChechout2('Nalva', 'Sales', 'Naturaspar', 'Brasil', 'Av. Coqui', 'Bloco07 apt 22', 'Recife', 'Pernambuco', '51163487', '8197665308', 'TEste2@ebac.com')
       
    });

    it('Deve fazer o terceiro pedido, adicionar ao carrinho e fazer o checkout - Usando lista de dados', () => {

         //describe('TERCEIRO PEDIDO')
         DadosCheckout.Checkouts3()
        
        // describe('Checkout do terceiro pedido')
        DadosCheckout.ConfirmaçãoChechout3
           (dadosCheck3[0].nome,
            dadosCheck3[0].sobrenome,
            dadosCheck3[0].empresa,
            dadosCheck3[0].pais,
            dadosCheck3[0].endereco,
            dadosCheck3[0].complemento,
            dadosCheck3[0].cidade,
            dadosCheck3[0].estado,
            dadosCheck3[0].cep,
            dadosCheck3[0].telefone,
            dadosCheck3[0].email,)
        
    });

    it.only('Deve fazer o quarto pedido, adicionar ao carrinho e fazer o checkou - Usando', () => {
        
        //describre('QUARTO PEDIDO')
        DadosCheckout.Checkouts4()
        


        //describre('Checkout do quarto pedido')
        DadosCheckout.ConfirmaçãoChechout4()
        
    });



})