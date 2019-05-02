import { ElementFinder,element,by } from "protractor";

export class WebTableHome
{
addUserButton:ElementFinder;
firstname:ElementFinder;
lastname:ElementFinder;
username:ElementFinder;
password:ElementFinder;
customerAAA:ElementFinder;
customerBBB:ElementFinder;
roleAdmin:ElementFinder;
roleCust:ElementFinder;
email:ElementFinder;
cellphone:ElementFinder;
saveButton:ElementFinder;

constructor()
{

    this.addUserButton = element(by.css('button[class="btn btn-link pull-right"]'));
    this.firstname = element(by.css('input[name="FirstName"]'));
    this.lastname = element(by.css('input[name="LastName"]'));
    this.username = element(by.css('input[name="UserName"]'));
    this.password = element(by.css('input[name="Password"]'));
    this.customerAAA = element.all(by.css('input[name="optionsRadios"]')).first();
    this.customerBBB = element.all(by.css('input[name="optionsRadios"]')).last();
    this.roleCust = element(by.css('select[name="RoleId"]')).element(by.css('option[value="1"]'));
    this.roleAdmin = element(by.css('select[name="RoleId"]')).element(by.css('option[value="2"]'));
    this.email = element(by.css('input[name="Email"]'));
    this.cellphone = element(by.css('input[name="Mobilephone"]'));
    this.saveButton = element(by.buttonText('Save'));

}





}