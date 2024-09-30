
Feature: Doctor Login

  Scenario: Login with Doctor Credentials
   
    Given Login with credentials "19490062021" and "654321"
    When Add the New patient Name "Saravanan" "New Patient Demo" "19841501234" "01/01/1990"
    Then Verify the patient is created by searching with "19841501234" to add label "New First Label is Added"
    When Click the Plus Icon to add Second Label "New Second Label is Added"
    Then Click edit icon to edit patient details "newmail@gmail.com" "India" "TamilNadu" "Chennai" "6060606"
    When Delete the Added Patient



