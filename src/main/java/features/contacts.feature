Feature: FreeCRM create contacts


  # Data Driven login with 'Example' keyword
  Scenario Outline: Free CRM Create a new Contact Scenerio
    Given user is already on login page
    When title of login page is Free CRM
    Then  user enters "<username>" and "<password>"
    Then  user clicks on login button
    Then  user is on home page
    Then  user moves to new contact page
    Then  user enters contacts "<firstname>" and "<lastname>" and "<position>"
    Then  broswer gets closed

    Examples:
      | username  | password | firstname | lastname | position          |
      | juned5252 | selenium |  jon      | snow     | king of the north |
      | juned5252 | selenium |  homer    | simpson  | safety inspector  |