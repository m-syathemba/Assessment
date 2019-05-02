"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class WebTableHome {
    constructor() {
        this.addUserButton = protractor_1.element(protractor_1.by.css('button[class="btn btn-link pull-right"]'));
        this.firstname = protractor_1.element(protractor_1.by.css('input[name="FirstName"]'));
        this.lastname = protractor_1.element(protractor_1.by.css('input[name="LastName"]'));
        this.username = protractor_1.element(protractor_1.by.css('input[name="UserName"]'));
        this.password = protractor_1.element(protractor_1.by.css('input[name="Password"]'));
        this.customerAAA = protractor_1.element.all(protractor_1.by.css('input[name="optionsRadios"]')).first();
        this.customerBBB = protractor_1.element.all(protractor_1.by.css('input[name="optionsRadios"]')).last();
        this.roleCust = protractor_1.element(protractor_1.by.css('select[name="RoleId"]')).element(protractor_1.by.css('option[value="1"]'));
        this.roleAdmin = protractor_1.element(protractor_1.by.css('select[name="RoleId"]')).element(protractor_1.by.css('option[value="2"]'));
        this.email = protractor_1.element(protractor_1.by.css('input[name="Email"]'));
        this.cellphone = protractor_1.element(protractor_1.by.css('input[name="Mobilephone"]'));
        this.saveButton = protractor_1.element(protractor_1.by.buttonText('Save'));
    }
}
exports.WebTableHome = WebTableHome;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VidGFibGUucG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy93ZWJ0YWJsZS5wby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFzRDtBQUV0RCxNQUFhLFlBQVk7SUFlekI7UUFHSSxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3RSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLEtBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRXJELENBQUM7Q0FNQTtBQXJDRCxvQ0FxQ0MifQ==