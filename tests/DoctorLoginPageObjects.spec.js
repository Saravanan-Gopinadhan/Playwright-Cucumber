const {  test, expect } = require('@playwright/test');
const { DoctorLogin } = require('../PageObjects/DoctorLogin');



test('Home Page Login', async({page}) =>
    {
  
    const doctorNo = "19490062021";
    const Otp= "654321";
   
 
//    const doctorLogin = new DoctorLogin(page);

const doctorLogin = new DoctorLogin(page);

   await doctorLogin.goto();
   await doctorLogin.ValidLogin(doctorNo);
   await doctorLogin.OtpSignin(Otp);



  });

 

    

