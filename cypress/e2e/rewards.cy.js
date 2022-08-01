import creds from "../fixtures/creds.json";
import RewardCreateElement from "../pageObjects/perx.page";
let po = new RewardCreateElement();
describe("To Create Rewards for Authorized user", () => {
  it("should navigate to perxtech dashboard login page and login with Valid credentials", () => {
    cy.visit(creds.loginURL);
    po.loginUserName().type(creds.email);
    po.loginPassword().type(creds.password);
    cy.intercept({
      method: "GET",
      url: "https://api.perxtech.io/v4/dash/authorizations",
    }).as("auth");
    po.loginSignupBtn().click();
    cy.wait("@auth", { timeout: 100000 }).then((interception) => {
      assert(interception.response?.statusCode, "200");
    });
    cy.contains("Rewards").should("have.text", "Rewards");
  });

  context(
    "To Verify Reward Get Created and Validate Reward Created Successfully",
    () => {
      it("navigate to Rewards Menu and click on create new button", () => {
        po.rewardsMenu().click();
        po.createNew().click();
      });
      it("create new reward and validate created reward", () => {
        po.enterRewardName().type("test_Reward_Creation");
        po.nextButton().click();
        po.openStartDateCalendar().click();
        po.startDate().click();
        po.openEndDateCalendar().click();
        po.endDate().click();
        po.nextButton().click();
        cy.intercept({
          method: "POST",
          url: "https://api.perxtech.io/v4/dash/rewards",
        }).as("save");
        po.saveButton().click();
        cy.wait("@save", { timeout: 100000 }).then((interception) => {
          assert(interception.response?.statusCode, "200");
        });
        po.rewardsMenu().click();
        po.searchBox().type("test_Reward_Creation");
        po.validateCreatedReward().should(
          "contain.text",
          "test_Reward_Creation"
        );
      });
    }
  );
  context(
    "To Verify Private Reward Gets Created and Validate Reward Created Successfully",
    () => {
      it("navigate to Rewards Menu and click on create new button", () => {
        po.rewardsMenu().click();
        po.createNew().click();
      });
      it("create new reward and validate created reward", () => {
        po.checkPrivate().click();
        po.validateTags().should("not.exist");
        po.validatecatalog().should("not.exist");
        po.validatecategories().should("not.exist");
        po.enterRewardName().type("test_Reward_Creation_Private");
        po.nextButton().click();
        po.openStartDateCalendar().click();
        po.startDate().click();
        po.openEndDateCalendar().click();
        po.endDate().click();
        po.nextButton().click();
        cy.intercept({
          method: "POST",
          url: "https://api.perxtech.io/v4/dash/rewards",
        }).as("save");
        po.saveButton().click();
        cy.wait("@save", { timeout: 100000 }).then((interception) => {
          assert(interception.response?.statusCode, "200");
        });
        po.rewardsMenu().click();
        po.searchBox().type("test_Reward_Creation");
        po.validateCreatedReward().should(
          "contain.text",
          "test_Reward_Creation_Private"
        );
      });
    }
  );
});
