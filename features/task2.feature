Feature: WEB Automation

   Navigate to
   validate that u are on the table
   click Add user
   add user with following details

Scenario Outline: open url

Given I navigate to "<site>" site
When I click on "<add_user>" button
Then I add the following deatils "<firstname>" "<lastname>" "<username>" "<password>" "<customer>" "<role>" "<email>" "<cellphone>"

Examples:
|site|add_user|firstname|lastname|username|password|customer|role|email|cellphone|
|http://www.way2automation.com/angularjs-protractor/webtables/|Add user|FName1|LName1|User1|Pass1|AAA|Admin|admin@mail.com|082555|
|http://www.way2automation.com/angularjs-protractor/webtables/|Add user|FName2|LName2|User2|Pass2|BBB|Customer|customer@mail.com|083444|