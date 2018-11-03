Feature: Free CRM Login Feature

Scenario: Free CRM Login Test Scenario

  Given user is already on login page
  When title of login page is Free CRM
  Then  user enters "juned5252" and "selenium"
  Then  user clicks on login button
  Then  user is on home page
  Then  broswer gets closed

  # Data Driven login with 'Example' keyword
  Scenario Outline: Free CRM Login Test Scenario
  Given user is already on login page
  When title of login page is Free CRM
  Then  user enters "<username>" and "<password>"
  Then  user clicks on login button
  Then  user is on home page
  Then  broswer gets closed

    Examples:
       | username  | password |
       | juned5252 | selenium |

