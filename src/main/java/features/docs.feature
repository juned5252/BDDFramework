Feature: Free CRM Login Feature

  Scenario: Free CRM Login Test Scenario

  # Data Driven login with 'Example' keyword
  Scenario Outline: Free CRM Create Doc Scenario
    Given user is already on login page
    When title of login page is Free CRM
    Then  user enters "<username>" and "<password>"
    Then  user clicks on login button
    Then  user is on home page
    Then  user goes to the form page
    Then  user enters title and page and email and desc and message1 and message2
      | my doc  | 3 | me@aol.com  | a test | hello  | world |
    Then  user goes and clicks save
    Then  broswer gets closed

    Examples:
      | username  | password |
      | juned5252 | selenium |
