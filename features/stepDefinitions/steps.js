const {Given, When, Then } = require('@cucumber/cucumber')
const{PageObjectMO} = require('../../PageObjects/PageObjectMO');
const{expect} = require('@playwright/test');
const {chromium} = require('playwright');;



Given('Login with credentials {string} and {string}',{timeout : 100*1000}, async function(doctorNo, Otp){

    const browser = await chromium.launch({headless:false});  
    const context = await browser.newContext();
    const page = await context.newPage();

    this.poManager = new PageObjectMO (page);

    this.doctorLogin = this.poManager.getLoginpage();
    await this.doctorLogin.goto();
    await this.doctorLogin.ValidLogin(doctorNo);
    await this.doctorLogin.OtpSignin(Otp);

});

When('Add the New patient Name {string} {string} {string} {string}', {timeout : 100*1000}, async function(patientfirstname, patientlastname, patmob, DOB){

    this.dashBoard = this.poManager.getDashboardPage();
    await this.dashBoard.countAndSession();
    await this.dashBoard.tabPatient(patientfirstname, patientlastname, patmob, DOB);
    
});

Then('Verify the patient is created by searching with {string} to add label {string}',{timeout : 100*1000}, async function(patmob, fillLabel){

    this.dashBoard = this.poManager.getDashboardPage();
    await this.dashBoard.viewPatient(patmob, fillLabel);

});

When ('Click the Plus Icon to add Second Label {string}', {timeout : 100*1000},async function(fillnewlabel){

    this.dashBoard = this.poManager.getDashboardPage();
    await this.dashBoard.newSecLabel(fillnewlabel);

});

Then ('Click edit icon to edit patient details {string} {string} {string} {string} {string}', {timeout : 100*1000}, async function(patientMail, patCountry, patState, patCity, patZipcode){
   
    this.dashBoard = this.poManager.getDashboardPage();
    await this.dashBoard.editPatient(patientMail,patCountry,patState,patCity,patZipcode);
    
});

When ('Delete the Added Patient', {timeout : 100*1000},async function(){

    this.dashBoard = this.poManager.getDashboardPage();
    await this.dashBoard.deletePatient();

});



