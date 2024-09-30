const {  test, expect } = require('@playwright/test');
const { Dashboard } = require('../PageObjects/Dashboard');


test('Dashboard Page', async({page}) =>
    {

// Patient Count & Session Count

// To Add new Patient 
const patientfirstname = "Saravanan";
const patientlastname = "New Patient Demo";
const patmob = "19841501234";
const DOB = "02/01/1996"; //SVG 

// View patient and Label (Adding and Editing and Deleting)
const fillLabel = "New First Label is Added";


// To add another Label
const fillnewlabel = "New Second Label is Added";


// To Edit Patient details

const patientMail = "newmail@gmail.com";
const patCountry = "India";
const patState = "TamilNadu";
const patCity = "Chennai";
const patZipcode = "6060606";



const dashBoard = new Dashboard(page);

await dashBoard.countAndSession();
await dashBoard.tabPatient(patientfirstname,patientlastname,patmob,DOB);
await dashBoard.viewPatient(fillLabel);
await dashBoard.newSecLabel(fillnewlabel);
await dashBoard.editPatient(patientMail,patCountry,patState,patCity,patZipcode);
await dashBoard.deletePatient();



});







