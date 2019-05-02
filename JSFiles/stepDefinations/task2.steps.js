"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const webtable_po_1 = require("../pageObjects/webtable.po");
const webtable = new webtable_po_1.WebTableHome;
cucumber_1.Given('I navigate to {string} site', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(string);
    });
});
cucumber_1.When('I click on {string} button', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        if (string === 'Add user') {
            yield webtable.addUserButton.click();
        }
        yield protractor_1.browser.sleep(2000);
    });
});
cucumber_1.Then('I add the following deatils {string} {string} {string} {string} {string} {string} {string} {string}', function (string, string2, string3, string4, string5, string6, string7, string8) {
    return __awaiter(this, void 0, void 0, function* () {
        yield webtable.firstname.sendKeys(string);
        yield webtable.lastname.sendKeys(string2);
        yield webtable.username.sendKeys(string3);
        yield webtable.password.sendKeys(string4);
        yield protractor_1.browser.sleep(2000);
        if (string5 === 'AAA') {
            yield webtable.customerAAA.click();
            yield protractor_1.browser.sleep(2000);
        }
        if (string5 === 'BBB') {
            yield webtable.customerBBB.click();
            yield protractor_1.browser.sleep(2000);
        }
        if (string6 === 'Admin') {
            yield webtable.roleAdmin.click();
            yield protractor_1.browser.sleep(2000);
        }
        if (string6 === 'Customer') {
            yield webtable.roleCust.click();
            yield protractor_1.browser.sleep(2000);
        }
        yield webtable.email.sendKeys(string7);
        yield protractor_1.browser.sleep(2000);
        yield webtable.cellphone.sendKeys(string8);
        yield protractor_1.browser.sleep(2000);
        yield webtable.saveButton.click();
        yield protractor_1.browser.sleep(5000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzazIuc3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvdGFzazIuc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywyQ0FBcUM7QUFDckMsNERBQTBEO0FBRTFELE1BQU0sUUFBUSxHQUFHLElBQUksMEJBQVksQ0FBQztBQUVqQyxnQkFBSyxDQUFDLDZCQUE2QixFQUFFLFVBQWdCLE1BQU07O1FBQ3hELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw0QkFBNEIsRUFBRSxVQUFnQixNQUFNOztRQUN2RCxJQUFHLE1BQU0sS0FBSyxVQUFVLEVBQ3hCO1lBQ0EsTUFBTSxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3BDO1FBQ0QsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLHFHQUFxRyxFQUFFLFVBQWdCLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPOztRQUU5TCxNQUFNLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLE1BQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsTUFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxNQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBRyxPQUFPLEtBQUssS0FBSyxFQUNwQjtZQUNFLE1BQU0sUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBRyxPQUFPLEtBQUssS0FBSyxFQUNwQjtZQUNFLE1BQU0sUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBRyxPQUFPLEtBQUssT0FBTyxFQUN0QjtZQUNFLE1BQU0sUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBRyxPQUFPLEtBQUssVUFBVSxFQUN6QjtZQUNFLE1BQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=