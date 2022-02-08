class EnderecoDados {

    Checkouts(parametros ){
        
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(' .product-block')
        .eq(3)
        .click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type('1')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', 'Ajax Full-Zip Sw')
        cy.get('#cart > .dropdown-toggle').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        
    }

    ConfirmaçãoCheckout(DadosConfirmação) {

        cy.get('#billing_first_name').clear().type('TEste')
        cy.get('#billing_last_name').clear().type('ebac')
        cy.get('#billing_company').clear().type('teste.ltda')
        cy.get('#select2-billing_country-container').click().type('Brasil').get('[data-selected="true"]').click()
        cy.get('#billing_address_1').clear().type('Av. ebac')
        cy.get('#billing_address_2').clear().type('bloco 04 apt 32')
        cy.get('#billing_city').clear().type('Recife')
        cy.get('#select2-billing_state-container').click().type('Pernambuco').get('[aria-selected="true"]').click()
        cy.get('#billing_postcode').clear().type('51111111')
        cy.get('#billing_phone').clear().type('8197333333')
        cy.get('#billing_email').clear().type('kalleoteste@ebac.com')
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido')
    }

}

export default new EnderecoDados()