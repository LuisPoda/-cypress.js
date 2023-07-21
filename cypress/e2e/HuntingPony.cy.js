describe('Автотест для HuntingPony', function () {
   it('Оформление заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[href="/collection/sumki-i-avtokresla"] > .banner-list__item-photo > :nth-child(1) > .img-ratio > .img-ratio__inner > picture > .loaded').click();
        cy.wait(5000);
        cy.get('[data-product-id="338933151"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.wait(5000);
        cy.get('.add-cart-counter__btn').click();
        cy.wait(5000);
        cy.get('.header__cart').click();
        cy.wait(5000);
        cy.get('.is-count-up').click();
        cy.wait(5000);
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа');
    })
})
