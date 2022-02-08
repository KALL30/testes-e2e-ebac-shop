/// <reference types="cypress" />
import DadosCheckout from '../support/page_objects/Dados-checkout';
import Dados from '../support/page_objects/Dados-checkout'

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



})