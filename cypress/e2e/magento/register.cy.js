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
    it('Register Failed Using Already Data', () => {
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
        registerPage.msgErrorRegister_alreadyAccount();
        cy.wait(2000)
    })
    it('Register Failed with Empty Firstname', ()=> {
        cy.visit('')
        cy.wait(1000)
        registerPage.clickRegister();
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
        registerPage.msgFirstnameError();
        cy.wait(2000)
    })
    it('Register Failed with Empty Lastname', () => {
        cy.visit('')
        cy.wait(1000)
        registerPage.clickRegister();
        cy.wait(2000)
        registerPage.firstname();
        cy.wait(2000)
        registerPage.email();
        cy.wait(2000)
        registerPage.pwd();
        cy.wait(2000)
        registerPage.confirmPwd();
        cy.wait(2000)
        registerPage.clickCreateAccount();
        cy.wait(5000)
        registerPage.msgLastnameError();
        cy.wait(2000)
    })
    it('Register Failed with Empty Email Address', () => {
        cy.visit('')
        cy.wait(1000)
        registerPage.clickRegister();
        cy.wait(2000)
        registerPage.firstname();
        cy.wait(2000)
        registerPage.lastname();
        cy.wait(2000)
        registerPage.pwd();
        cy.wait(2000)
        registerPage.confirmPwd();
        cy.wait(2000)
        registerPage.clickCreateAccount();
        cy.wait(5000)
        registerPage.msgEmailError();
        cy.wait(2000)
    })
    it('Register Failed with Invalid Format of Email', () => {
        cy.visit('')
        cy.wait(1000)
        registerPage.clickRegister();
        cy.wait(2000)
        registerPage.firstname();
        cy.wait(2000)
        registerPage.lastname();
        cy.wait(2000)
        registerPage.invalidemail();
        cy.wait(2000)
        registerPage.pwd();
        cy.wait(2000)
        registerPage.confirmPwd();
        cy.wait(2000)
        registerPage.clickCreateAccount();
        cy.wait(5000)
        registerPage.msgEmailInvalid();
        cy.wait(2000)
    })
    it('Register Failed with Empty Password', () => {
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
        registerPage.confirmPwd();
        cy.wait(2000)
        registerPage.clickCreateAccount();
        cy.wait(5000)
        registerPage.msgPwdError();
        cy.wait(2000)
    })
    it('Register Failed with Empty Confirm Password', () => {
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
        registerPage.clickCreateAccount();
        cy.wait(5000)
        registerPage.msgConfirmPwdError();
        cy.wait(2000)
    })
    it('Register Failed with Empty All Field', () => {
        cy.visit('')
        cy.wait(1000)
        registerPage.clickRegister();
        cy.wait(2000)
        registerPage.clickCreateAccount();
        cy.wait(5000)
        registerPage.msgFirstnameError();
        registerPage.msgLastnameError();
        registerPage.msgEmailError();
        registerPage.msgPwdError();
        registerPage.msgConfirmPwdError();
    })
})