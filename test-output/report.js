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
  "duration": 7198530826,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 28120016,
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
  "duration": 483135367,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2496295397,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 29498400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.broswer_gets_closed()"
});
formatter.result({
  "duration": 181608032,
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
        "selenium8"
      ],
      "line": 23,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "juned5252",
        "selenium"
      ],
      "line": 24,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
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
  "name": "user enters \"juned5252\" and \"selenium8\"",
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
  "duration": 4772045220,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 14863773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "juned5252",
      "offset": 13
    },
    {
      "val": "selenium8",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_pasword(String,String)"
});
formatter.result({
  "duration": 889679142,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 746666393,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 26203208,
  "error_message": "java.lang.AssertionError: expected [CRMPRO] but found [#1 Free CRM software in the cloud for sales and service]\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\n\tat org.testng.Assert.assertEquals(Assert.java:116)\n\tat org.testng.Assert.assertEquals(Assert.java:190)\n\tat org.testng.Assert.assertEquals(Assert.java:200)\n\tat stepDefinition.LoginStepDefinition.user_is_on_home_page(LoginStepDefinition.java:54)\n\tat ✽.Then user is on home page(/Users/junedalam/Documents/FreeCrmBDDFramework/src/main/java/features/login.feature:18)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.broswer_gets_closed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
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
  "duration": 4298101477,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 20356200,
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
  "duration": 581120210,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1980669067,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 13623879,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.broswer_gets_closed()"
});
formatter.result({
  "duration": 146479149,
  "status": "passed"
});
});