/// <reference types="cypress" />
class LoginPage{

    getEmailAddress(){
        return cy.get('input[type=email]')
    }

    getPassword(){
        return cy.get('input[type=password]')
    }

    getLogIn(){
        return cy.get('button[type=submit]')
    }
   
}

export default LoginPage