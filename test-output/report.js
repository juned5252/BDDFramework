$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/junedalam/Documents/FreeCrmBDDFramework/src/main/java/features/docMap.feature");
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
  "name": "user goes to the form page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters title and page and email and desc and messageone and messagetwo mapex",
  "rows": [
    {
      "cells": [
        "title",
        "page",
        "email",
        "desc",
        "mess1",
        "mess2"
      ],
      "line": 12
    },
    {
      "cells": [
        "my doc1",
        "3",
        "me@aol.com",
        "a test1",
        "hello1",
        "world1"
      ],
      "line": 13
    },
    {
      "cells": [
        "my doc",
        "3",
        "me@aol.com",
        "a test",
        "hello",
        "world"
      ],
      "line": 14
    },
    {
      "cells": [
        "my doc2",
        "3",
        "me@aol.com",
        "a test2",
        "hello2",
        "world2"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "broswer gets closed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 5836672289,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 48499800,
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
  "duration": 599577183,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3905343597,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 16615060,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_goes_to_the_form_page()"
});
formatter.result({
  "duration": 1026634019,
  "status": "passed"
});
formatter.match({
  "location": "DocWithMapDefinition.user_enters_title_and_page_and_email_and_desc_and_message_and_message_map(DataTable)"
});
formatter.result({
  "duration": 1439649236,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"title\"}\n  (Session info: chrome\u003d70.0.3538.77)\n  (Driver info: chromedriver\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform\u003dMac OS X 10.14.0 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 21 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027juneds-MBP.home\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:65535}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db), userDataDir\u003d/var/folders/hn/f7wb9_d13yz0m_34h8b1r1w80000gn/T/.org.chromium.Chromium.VTtHze}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d70.0.3538.77, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: a1402bdfafa985e599ffad3803d206ee\n*** Element info: {Using\u003did, value\u003dtitle}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\n\tat stepDefinition.DocWithMapDefinition.user_enters_title_and_page_and_email_and_desc_and_message_and_message_map(DocWithMapDefinition.java:25)\n\tat ✽.Then user enters title and page and email and desc and messageone and messagetwo mapex(/Users/junedalam/Documents/FreeCrmBDDFramework/src/main/java/features/docMap.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.broswer_gets_closed()"
});
formatter.result({
  "status": "skipped"
});
});