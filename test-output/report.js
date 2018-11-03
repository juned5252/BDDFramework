$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/junedalam/Documents/FreeCrmBDDFramework/src/main/java/features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM create contacts",
  "description": "",
  "id": "freecrm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "# Data Driven login with \u0027Example\u0027 keyword"
    }
  ],
  "line": 5,
  "name": "Free CRM Create a new Contact Scenerio",
  "description": "",
  "id": "freecrm-create-contacts;free-crm-create-a-new-contact-scenerio",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters contacts \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "broswer gets closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "freecrm-create-contacts;free-crm-create-a-new-contact-scenerio;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 16,
      "id": "freecrm-create-contacts;free-crm-create-a-new-contact-scenerio;;1"
    },
    {
      "cells": [
        "juned5252",
        "selenium",
        "jon",
        "snow",
        "king of the north"
      ],
      "line": 17,
      "id": "freecrm-create-contacts;free-crm-create-a-new-contact-scenerio;;2"
    },
    {
      "cells": [
        "juned5252",
        "selenium",
        "homer",
        "simpson",
        "safety inspector"
      ],
      "line": 18,
      "id": "freecrm-create-contacts;free-crm-create-a-new-contact-scenerio;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Create a new Contact Scenerio",
  "description": "",
  "id": "freecrm-create-contacts;free-crm-create-a-new-contact-scenerio;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"juned5252\" and \"selenium\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters contacts \"jon\" and \"snow\" and \"king of the north\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "broswer gets closed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 5068960501,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 47242172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "juned5252",
      "offset": 13
    },
    {
      "val": "selenium",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_pasword(String,String)"
});
formatter.result({
  "duration": 624421210,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3069720192,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 18957670,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 2578843801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jon",
      "offset": 22
    },
    {
      "val": "snow",
      "offset": 32
    },
    {
      "val": "king of the north",
      "offset": 43
    }
  ],
  "location": "LoginStepDefinition.user_enters_contact_details(String,String,String)"
});
formatter.result({
  "duration": 1386526934,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.broswer_gets_closed()"
});
formatter.result({
  "duration": 113715540,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM Create a new Contact Scenerio",
  "description": "",
  "id": "freecrm-create-contacts;free-crm-create-a-new-contact-scenerio;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"juned5252\" and \"selenium\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters contacts \"homer\" and \"simpson\" and \"safety inspector\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "broswer gets closed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 3132507071,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 17424568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "juned5252",
      "offset": 13
    },
    {
      "val": "selenium",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_pasword(String,String)"
});
formatter.result({
  "duration": 664525453,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1395979354,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 78709646,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 1390977861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "homer",
      "offset": 22
    },
    {
      "val": "simpson",
      "offset": 34
    },
    {
      "val": "safety inspector",
      "offset": 48
    }
  ],
  "location": "LoginStepDefinition.user_enters_contact_details(String,String,String)"
});
formatter.result({
  "duration": 1484408263,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.broswer_gets_closed()"
});
formatter.result({
  "duration": 105796600,
  "status": "passed"
});
});