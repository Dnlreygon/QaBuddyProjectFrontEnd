# qaBuddyProject
QA Buddy Project for Daniel Reyes

Precondition: Open Browser


Test Cases

Positive TC - Login successfull

   Given Navigate to https://todoist.com/users/showLogin
   When  Set correct email and password.
   AND   Click submit button.
   Then  Validate that we are in the final page.
   
   
Negative TC - Invalid Email

   Given Navigate to https://todoist.com/users/showLogin
   When  Set invalid email and password.
   AND   Click submit button.
   Then  Validate that invalid email message is displayed.
   
Negative TC -  Incorrect Password

   Given Navigate to https://todoist.com/users/showLogin
   When  Set email and incorrect password.
   AND   Click submit button.
   Then  Validate that wrong password message is displayed.
   
Negative TC -  Empty Password

   Given Navigate to https://todoist.com/users/showLogin
   When  Set email
   AND   Click submit button.
   Then  Validate that empty password message is displayed.
