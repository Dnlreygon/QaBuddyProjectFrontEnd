# Setup
- Clone the repositry
- Execute npm install

# Run Login Tests & Task Test
- Execute: ``` npm test ```

# Run Backend Tests
- Execute:``` npm test```

#Static Analyst
-Once our frontend finish, use the following command: ```allure generate ./allure-results && allure open```

# CI
- It runs in GitHub Actions once we do a ```commit``` & ```push```to our branch.

# INFO.

This framework uses an .env file to read the test data you need to create an .env file and fill it with your data, you can find a .env-info as an example. Run source/pathto.envfile to load the file. Please add secrets to avoid use sensitive information as public like passwords or tokens.
