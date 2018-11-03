$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/junedalam/Documents/FreeCrmBDDFramework/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"juned5252\" and \"selenium\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "broswer gets closed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 4910942754,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 26188354,
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
  "duration": 596755778,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2333473737,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 24879348,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.broswer_gets_closed()"
});
formatter.result({
  "duration": 148698048,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 12,
      "value": "# Data Driven login with \u0027Example\u0027 keyword"
    }
  ],
  "line": 13,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "broswer gets closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "juned5252",
        "selenium"
      ],
      "line": 23,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters \"juned5252\" and \"selenium\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "broswer gets closed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 3066215257,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 8109578,
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
  "duration": 614617678,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1418733015,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 11746268,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.broswer_gets_closed()"
});
formatter.result({
  "duration": 158566747,
  "status": "passed"
});
});