const {  test, expect } = require('@playwright/test');

test('Home Page Login', async({page}) =>
    {
// Login to Doctor Page
    
    await page.goto("https://testing.dr-eye.net/#/");
    console.log(await page.title());
    await expect(page).toHaveTitle("EYECAM");
    
// Step 2: Enter mobile number and submit to send OTP   
    // Type or Fill (Both are same)
    await page.locator("[name='mobile']").fill("19490062021");
    await page.locator("[type='submit']").click();

// to extract the text from warning content
//  console.log(await page.locator('text=Please enter valid mobile number').textContent());

// This checks the "Please" word in the below mentioned locator
//  await expect(page.locator('text=Please enter valid mobile number')).toContainText('Please')

// Optionally, check the next page or confirmation message
//  await expect(page.locator('text=OTP verified successfully')).toBeVisible();


// await page.click('[type="button"]');

// Step 2: Enter mobile number and send OTP
//   await page.fill('.MuiInputBase-input', '19490062022');
//  await page.click('.MuiButtonBase-root'); // Assuming this is the "Send OTP" button

    // Step 3: Enter OTP in the OTP fields (assuming the OTP is entered in reverse order)
    for (let i = 1; i <= 6; i++) {
      const digit = 7 - i; // Reversing the loop to type digits in descending order
      await page.fill(`[aria-label="Please enter OTP character ${i}"]`, digit.toString());
    }

    // Step 4: Submit the OTP by clicking the confirmation button
    await page.click('.MuiDialogContent-root > .MuiButton-contained'); // Assuming this is the "Submit" button

    // Step 5: Verify if the login was successful by checking for a success message
    const successMessage = await page.locator('.Toastify__toast-body > :nth-child(2)').textContent();

    if (successMessage && successMessage.includes('Verification Success')) {
      console.log('User logged in successfully with valid Mobile and OTP');
    } else {
      console.log('Test Failed - User not able to log in');
    }

    // Optionally, you can also assert the presence of the success message
    await expect(page.locator('.Toastify__toast-body > :nth-child(2)')).toContainText('Verification Success');

    });

     


    

