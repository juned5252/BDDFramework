Feature: Free CRM Login Feature

Scenario: Free CRM Login Test Scenario

Given user is already on login page
When title of login page is Free CRM
  Then  user enters username and pasword
  Then  user clicks on login button
  Then  user is on home page
  Then  broswer gets closed
