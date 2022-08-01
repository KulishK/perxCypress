/// <reference types="cypress"/>

const objectrepo = require("../fixtures/locators.json");
export default class RewardCreateElement {
  loginUserName() {
    return cy.get(objectrepo.RewardCreation.loginUserName);
  }

  loginPassword() {
    return cy.get(objectrepo.RewardCreation.loginPassword);
  }

  loginSignupBtn() {
    return cy.get(objectrepo.RewardCreation.Login);
  }

  createNew() {
    return cy.get(objectrepo.RewardCreation.CreateNewButton);
  }

  enterRewardName() {
    return cy.get(objectrepo.RewardCreation.RewardName);
  }

  nextButton() {
    return cy.contains(objectrepo.RewardCreation.NextButton);
  }

  startDate() {
    return cy.get(objectrepo.RewardCreation.ValidatyPeriodStartDate);
  }

  endDate() {
    return cy.get(objectrepo.RewardCreation.ValidityPeriodEndDate).last();
  }

  saveButton() {
    return cy.get(objectrepo.RewardCreation.SaveButton);
  }

  rewardsMenu() {
    return cy.get(objectrepo.RewardCreation.RewardsMenu);
  }

  searchBox() {
    return cy.get(objectrepo.RewardCreation.RewardSearchBox);
  }

  validateCreatedReward() {
    return cy.get(objectrepo.RewardCreation.SearchedRewardText);
  }

  openStartDateCalendar() {
    return cy.get(objectrepo.RewardCreation.opendatecalendar).first();
  }

  openEndDateCalendar() {
    return cy.get(objectrepo.RewardCreation.opendatecalendar).last();
  }

  checkPrivate() {
    return cy.get(objectrepo.RewardCreation.typePrivate);
  }

  validateTags() {
    return cy.get(objectrepo.RewardCreation.tags);
  }

  validatecatalog() {
    return cy.get(objectrepo.RewardCreation.catalog);
  }

  validatecategories() {
    return cy.get(objectrepo.RewardCreation.categories);
  }

  bulkActions() {
    return cy.get(objectrepo.RewardCreation.bulkActionlink);
  }

  uploadButton() {
    return cy.get(objectrepo.RewardCreation.Upload_Button);
  }

  clickToUpload() {
    return cy.get(objectrepo.RewardCreation.Bulk_Upload_popUp);
  }

  fileUpload() {
    return cy.get('input[type="file"]');
  }
  clickordragfile() {
    return cy.get(objectrepo.RewardCreation.clickDragfile);
  }
}
