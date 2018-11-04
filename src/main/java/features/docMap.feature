Feature: Free CRM Login Feature

  Scenario: Free CRM Login Test Scenario

    Given user is already on login page
    When title of login page is Free CRM
    Then  user enters "juned5252" and "selenium"
    Then  user clicks on login button
    Then  user is on home page
    Then  user goes to the form page
    Then  user enters title and page and email and desc and messageone and messagetwo mapex
      | title  | page | email  | desc | mess1  | mess2 |
      | my doc1  | 3 | me@aol.com  | a test1 | hello1  | world1 |
      | my doc  | 3 | me@aol.com  | a test | hello  | world |
      | my doc2  | 3 | me@aol.com  | a test2 | hello2  | world2 |
    Then  broswer gets closed
