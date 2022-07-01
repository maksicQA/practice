/// <reference types="cypress" />

describe("Signup & Login", () => {
    let randomString = Math.random().toString(36).substring(2);
    let email = "auto_email" + randomString + "@gmail.com";
    let password = "Password1";
    before(function() {
        cy.fixture('example').then(function(data) {
            globalThis.data = data;
        })
    })

    it("Test Valid Signup", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.get(".login").click()
        cy.get("#email_create").type(email)
        cy.get("#SubmitCreate").click()
        cy.get('#id_gender1').should('be.visible').check()
        cy.get('#customer_firstname').type("FirstName")
        cy.get('#customer_lastname').type("LastName")
        cy.get('#passwd').type(password)
        cy.get('#days').select('15')
        cy.get('#months').select('4')
        cy.get('#years').select('1983')
        cy.get('#company').type("Company")
        cy.get('#address1').type("Addres 1")
        cy.get('#city').type("City")
        cy.get('#id_state').select("Utah")
        cy.get('#postcode').type("21000")
        cy.get('#phone_mobile').type("215215215")
        cy.get("#submitAccount").click()
        cy.get('.info-account').should('contain', "Welcome to your account.")
    })

    it.only("Test Valid Login", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.get(".login").click()
        cy.get("#email").type(data.email)
        cy.get("#passwd").type(data.password)
        cy.get("#SubmitLogin").click()
        cy.get('.info-account').should('contain', "Welcome to your account.")
    })

    it("Login via Authorization Token", () => {
        const userCredentials = {
            "email": "nenad123@test.com",
            "password": "Password% "
        }
        cy.request("POST", "http://automationpractice.com/index.php?controller=authentication", userCredentials)
    })



})