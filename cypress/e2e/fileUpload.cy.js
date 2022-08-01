import creds from "../fixtures/creds.json";
import RewardCreateElement from "../pageObjects/perx.page";
let po = new RewardCreateElement();
describe("To Verify File Upload and Verify it is Uploaded Successfully", () => {
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
    "Verify CSV File Upload and Verify it is Uploaded Successfully",
    () => {
      beforeEach("navigate to bulk actions and click on upload button", () => {
        po.bulkActions().click();
        po.uploadButton().first().click();
      });
      it("should upload Csv file", () => {
        po.fileUpload()
          .should(
            "have.attr",
            "accept",
            ".csv, .txt, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          )
          .attachFile("sample_issue_vouchers.csv");
        cy.intercept({
          method: "POST",
          url: "https://api.perxtech.io/v4/dash/file_imports",
        }).as("upload");
        po.clickToUpload().click();
        cy.wait("@upload", { timeout: 100000 }).then((interception) => {
          assert(interception.response?.statusCode, "200");
        });
      });

      it("should upload txt file", () => {
        po.fileUpload()
          .should(
            "have.attr",
            "accept",
            ".csv, .txt, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          )
          .attachFile("sampleVoucher.txt");
        cy.intercept({
          method: "POST",
          url: "https://api.perxtech.io/v4/dash/file_imports",
        }).as("upload");
        po.clickToUpload().click();
        cy.wait("@upload", { timeout: 100000 }).then((interception) => {
          assert(interception.response?.statusCode, "200");
        });
      });

      it("should upload excel file", () => {
        po.fileUpload()
          .should(
            "have.attr",
            "accept",
            ".csv, .txt, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          )
          .attachFile("excelvoucher.xlsx");
        cy.intercept({
          method: "POST",
          url: "https://api.perxtech.io/v4/dash/file_imports",
        }).as("upload");
        po.clickToUpload().click();
        cy.wait("@upload", { timeout: 100000 }).then((interception) => {
          assert(interception.response?.statusCode, "200");
        });
      });
    }
  );
  // context(
  //   "To Verify Private Reward Gets Created and Validate Reward Created Successfully",
  //   () => {
  //     it("navigate to Rewards Menu and click on create new button", () => {
  //       po.rewardsMenu().click();
  //       po.createNew().click();
  //     });
  //     it("create new reward and validate created reward", () => {
  //       po.checkPrivate().click();
  //       po.enterRewardName().type("test_Reward_Creation");
  //       po.nextButton().click();
  //       po.openStartDateCalendar().click();
  //       po.startDate().click();
  //       po.openEndDateCalendar().click();
  //       po.endDate().click();
  //       po.nextButton().click();

  //       po.validateTags().should("not.exist");
  //       po.validatecatalog().should("not.exist");
  //       po.validatecategories().should("not.exist");
  //       po.saveButton().click();
  //       cy.wait(4000);
  //       po.validateTags().should("not.exist");
  //       po.validatecatalog().should("not.exist");
  //       po.validatecategories().should("not.exist");
  //     });
  //   }
  // );
});
