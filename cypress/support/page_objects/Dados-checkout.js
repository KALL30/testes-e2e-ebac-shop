class EnderecoDados {

    Checkouts(Produto1) {

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

    ConfirmaçãoCheckout(DadosConfirmação1) {

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

    Checkouts2(Produto2) {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(' .product-block')
            .first()
            .click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type('1')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', '1')
        cy.get('.woocommerce-message').should('contain', '“Abominable Hoodie')
    }

    ConfirmaçãoChechout2(nome, sobrenome, empresa, pais, endereco, complemento, cidade, estado, cep, telefone, email) {

        cy.get('.top-cart-wishlist').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais).get('[data-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(complemento)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado).get('[aria-selected="true"]').click()
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido')
    }

    Checkouts3(Produto3) {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(' .product-block')
           .last()
           .click()
        cy.get('.button-variable-item-S').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type('1')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', '1')
        
    }

    ConfirmaçãoChechout3(nome, sobrenome, empresa, pais, endereco, complemento, cidade, estado, cep, telefone, email,) {
        
        cy.get('.top-cart-wishlist').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(complemento)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado).get('[aria-selected="true"]').click()
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)

        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.page-title').should('contain', 'Pedido rec')

    }

    Checkouts4(Produto4) {

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

    ConfirmaçãoChechout4()
}



export default new EnderecoDados() 
