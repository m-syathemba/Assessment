import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import { WebTableHome } from "../pageObjects/webtable.po";

const webtable = new WebTableHome;

 Given('I navigate to {string} site', async function (string) {
    await browser.get(string); 
  });

  When('I click on {string} button', async function (string) {
    if(string === 'Add user')
    {
    await webtable.addUserButton.click();
    }
    await browser.sleep(2000);  
  });
  Then('I add the following deatils {string} {string} {string} {string} {string} {string} {string} {string}', async function (string, string2, string3, string4, string5, string6, string7, string8) {
    
     await webtable.firstname.sendKeys(string);
     await webtable.lastname.sendKeys(string2);
     await webtable.username.sendKeys(string3);
     await webtable.password.sendKeys(string4);
     await browser.sleep(2000);
     if(string5 === 'AAA')
     {
       await webtable.customerAAA.click();
       await browser.sleep(2000);
     }
     if(string5 === 'BBB')
     {
       await webtable.customerBBB.click();
       await browser.sleep(2000);
     }
     if(string6 === 'Admin')
     {
       await webtable.roleAdmin.click();
       await browser.sleep(2000);
     }
     if(string6 === 'Customer')
     {
       await webtable.roleCust.click();
       await browser.sleep(2000);
     }
     await webtable.email.sendKeys(string7);
     await browser.sleep(2000);
     await webtable.cellphone.sendKeys(string8);
     await browser.sleep(2000);
     await webtable.saveButton.click();
     await browser.sleep(5000);
  });