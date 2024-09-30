const{test,expect} = require('@playwright/test');
const{PageObjectMO} = require('../PageObjects/PageObjectMO');
const { json } = require('stream/consumers');

//const{DoctorLogin} = require('../PageObjects/DoctorLogin');
//const{Dashboard} = require ('../PageObjects/Dashboard');

//Json -> String -> Js Obj
const dataset = JSON.parse(JSON.stringify(require("../utils/PatientTestData.json")))

for(const data of dataset)

test (`'Login And Dashboard for ${data.patientfirstname}'`, async({page}) =>
{

const poManager = new PageObjectMO (page);

    const doctorNo = "19490062021";
    const Otp= "654321";
    
    const doctorLogin = poManager.getLoginpage();
//const doctorLogin = new DoctorLogin(page);
    await doctorLogin.goto();
    await doctorLogin.ValidLogin(doctorNo);
    await doctorLogin.OtpSignin(Otp);



    // const patientfirstname = "Saravanan";
    // const patientlastname = "New Patient Demo";
    const patmob = "19841501234";
    // const DOB = "01/01/1990";

    const fillLabel = "New First Label is Added";
    const fillnewlabel = "New Second Label is Added";

    const patientMail = "newmail@gmail.com";
    const patCountry = "India";
    const patState = "TamilNadu";
    const patCity = "Chennai";
    const patZipcode = "6060606";

//    const dashBoard = new Dashboard(page);
const dashBoard = poManager.getDashboardPage();

    await dashBoard.countAndSession();
    await dashBoard.tabPatient(data.patientfirstname, data.patientlastname,data.patmob,data.DOB);
    await dashBoard.viewPatient(fillLabel,data.patmob);
    await dashBoard.newSecLabel(fillnewlabel);
    await dashBoard.editPatient(patientMail,patCountry,patState,patCity,patZipcode);
    await dashBoard.deletePatient();



});




