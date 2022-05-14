import selectors from "../fixtures/selectors.json";
// import selector from "/Users/mubarak_arimiyah/Documents/CypressTraining/cypress/fixtures/selectors.json";

describe("Registering user on the swade application", function(){
      it("Launch application",function(){
            cy.visit("/");
      });
      it("invalid register", function(){
            cy.get(selectors.avatarIcon).click();
            cy.get(selectors.emailField).type(selectors.iemail);
            cy.get(selectors.registerBtn).click();
            cy.get(selectors.registerTitle).should('be.visible');
        
    });

    it("valid register", function(){
      cy.get(selectors.emailField).clear();
      cy.get(selectors.emailField).type(selectors.email);
      cy.get(selectors.registerBtn).click();
      cy.wait(5000);
      cy.get(selectors.dashboard).should('be.visible').contains(selectors.dashboardText);
     
  })
})