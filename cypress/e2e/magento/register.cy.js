import registerPage from "../../support/pageObject/registerPage"

describe('Create Account', () => {
    it('Register Success Using Valid Data', () => {
     cy.visit('')
     cy.wait(1000)
     registerPage.clickRegister();
     cy.wait(2000)
     registerPage.firstname();
     cy.wait(2000)
     registerPage.lastname();
     cy.wait(2000)
     registerPage.email();
     cy.wait(2000)
     registerPage.pwd();
     cy.wait(2000)
     registerPage.confirmPwd();
     cy.wait(2000)
     registerPage.clickCreateAccount();
     cy.wait(5000)
     registerPage.msgSuccessRegister();
    })
})