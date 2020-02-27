/// <reference types="cypress" />
class LoginPage{

    //Login email address textbox
    getEmailAddress(){
        return cy.get('input[type=email]')
    }

    //Login password textbox
    getPassword(){
        return cy.get('input[type=password]')
    }

    //Login button
    getLogIn(){
        return cy.get('button[type=submit]')
    }
   
}

export default LoginPage