class Dashboard{

constructor(page) {

this.page = page;

// Dashboard
this.patientCount = page.locator("//h6[text()='Patients']/following-sibling::h1");
this.sessionCount = page.locator("//h6[text()='Examination sessions']/following-sibling::h1");

// New Patient
this.patientTab = page.locator("//a[text()='Patient']");
this.addPatient = page.locator( "//*[@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium filter addicon me-0 css-vubbuv' and @data-testid='AddCircleOutlineIcon']"); 
// svg element plus icon

// Enter the Patient details
this.firstName = page.locator("[name='firstName']");
this.lastName = page.locator("[name='lastName']");
this.patMob = page.locator("[name='mobile']");
this.selectGender = page.locator("[value='male']");
this.patDob = page.locator("//input[@placeholder='DD/MM/YYYY']")// DOB in calender is SVG
this.adduserPat = page.locator("//button[text()='Add user']");

// View patient and Label (Adding and Editing and Deleting)
this.searchpat = page.locator("//input[@name='search']");
this.viewPat = page.locator("(//span[text()='View']/preceding-sibling::*)[1]"); // SVG Element view icon

this.addlabelicon = page.locator("//*[@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv' and @data-testid='LocalOfferIcon']");// SVG element label icon
this.enterlabelname = page.locator("//input[@name='labelName']");
this.clickAddlabel = page.locator("//*[@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-white ps-1 css-vubbuv' and @data-testid='AddIcon']");//SVG element

// To Add another Label
this.addnewLabel = page.locator("//*[@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-white css-vubbuv' and @data-testid='AddIcon']"); // SVG add icon in the tag

// Below two steps are repated again from the view patient
//this.enterlabelname = page.locator("//input[@name='labelName']");
//this.clickAddlabel = page.locator();//SVG element


// To delete a label
this.deleteLabel = page.locator("//*[@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv' and @data-testid='CloseIcon']").nth(1); //SVG delete icon


// To Edit Patient details

this.clickEditIcon = page.locator("//*[@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv' and @data-testid='EditIcon']"); // SVG edit icon
this.enterMail = page.locator("//input[@name='email']");
this.enterCountry = page.locator("//input[@name='country']");
this.enterState = page.locator("//input[@name='state']");
this.enterCity = page.locator("//input[@name='city']");
this.enterZipcode  = page.locator("//input[@name='zipcode']");
this.clickSave = page.locator("//button[text()='SAVE & CHANGES']");

this.clickBack =page.locator("//*[@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv' and @data-testid='ArrowBackIcon']"); // SVG back button


// To delete the Patient

this.clickDelete = page.locator("//*[@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-s6jlyw' and @data-testid='DeleteIcon']"); // SVG delete icon
this.clickYes = page.locator("//button[text()='Yes']");
this.clickNo = page.locator("//button[text()=''No]");



}

async countAndSession(){
    const patientCountText = await this.patientCount.textContent();  // Get the text content
    const sessionCountText = await this.sessionCount.textContent();  // Get the text content
    
    console.log(`Patient Count: ${patientCountText}`);
    console.log(`Session Count: ${sessionCountText}`);

} 




async tabPatient(patientfirstname,patientlastname,patmob,DOB){
// To Add a Ptient
    await this.patientTab.click();
    await this.addPatient.click();// SVG

    await this.firstName.fill(patientfirstname);
    await this.lastName.fill(patientlastname);
    await this.patMob.fill(patmob);
    await this.selectGender.click();
    await this.patDob.fill(DOB); // Calender
    await this.adduserPat.waitFor({ state: 'visible' , timeout: 60000 });
    await this.adduserPat.click({ timeout: 60000 });

}

async viewPatient(patmob, fillLabel){
// To view and Add label to the Patient

    await this.searchpat.fill(patmob);

    await this.page.waitForSelector('.spinner-container', { state: 'detached' });

    // Wait for the search result container to become visible
    await this.viewPat.waitFor({ state: 'visible', timeout: 60000 }) 

    // Wait for the view button to be visible
    const isViewPatVisible = await this.viewPat.isVisible({ timeout: 60000 });
    
    if (!isViewPatVisible) {
        console.error('View button not found for patient:', patmob);
        return; // Handle this case as needed
    }

    await this.viewPat.click();

// Add label steps
    await this.addlabelicon.click(); // SVG
    await this.enterlabelname.fill(fillLabel);
    await this.clickAddlabel.click(); //SVG

}

async newSecLabel(fillnewlabel){
// To add another Label

await this.addnewLabel.click(); //SVG
await this.enterlabelname.fill(fillnewlabel);
await this.clickAddlabel.click();

//To delete a label
await this.deleteLabel.click(); // SVG

}



async editPatient(patientMail,patCountry,patState,patCity,patZipcode){

await this.clickEditIcon.click(); // SVG
await this.enterMail.fill(patientMail);
await this.enterCountry.fill(patCountry);
await this.enterState.fill(patState);
await this.enterCity.fill(patCity);
await this.enterZipcode.fill(patZipcode);
await this.clickSave.click();

await this.clickBack.click();

}

async deletePatient(){

await this.clickDelete.click();    
await this.clickYes.click();

}


}

module.exports = {Dashboard};



