class DoctorLogin{

constructor(page){
 
   this.page = page;
   this.DoctorNo = page.locator("[name='mobile']");
   this.clickBtn = page.locator("[type='submit']");
  
}

async goto(){
    
    await this.page.goto("https://testing.dr-eye.net/#/");
}

async ValidLogin(doctorNo){

    await this.DoctorNo.fill(doctorNo);
    await this.clickBtn.click();
}
 
async OtpSignin(Otp){ 
   
   
    for (let i = 1; i <= 6; i++) {
        const digit = Otp[i -1]; // Reversing the loop to type digits in descending order
       
       
        if (digit === undefined) {
            throw new Error(`Missing digit in OTP at position ${i}`);
          }
       
       
        await this.page.fill(`[aria-label="Please enter OTP character ${i}"]`, digit.toString());
      }

      await this.page.click('.MuiDialogContent-root > .MuiButton-contained'); // Assuming this is the "Submit" button

}
}

module.exports = {DoctorLogin};



