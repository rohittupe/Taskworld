Taskworld Assignment - Test Automation
========

Create a test automation to create project, tasklist, task and mark the task as complete.

## Prerequsites
1. The node and npm needs to be installed. Please find the required version details below-
* Node : version >= 10.*
* NPM : version >= 6.*

## Usage

* The Web test can be executed in following modes - 
	1. `npm run test:headless`  => Use this mode to execute the tests in headless mode i.e. user would not be able to see the execution and the browser would be hidden
	2. `npm run test:chrome`  => Use this mode to execute the tests in headed/chrome mode i.e. user would be able to see the execution and the browser would be chrome
	3. `npm run test:dashboardRecorded`  => Use this mode to execute the tests in headed/chrome mode i.e. user would be able to see the execution and the browser would be chrome. Also the results of execution would be recorded in the dasboard.

* The user can modify the data as per there needs by opening the fixture file `fixtures/userdata.json`

## Preparing for Execution

To perform execution follow below steps:

1. Clone repository: `git clone https://github.com/rohittupe/Taskworld.git taskworld`
2. `cd` into the directory `taskworld`
3. Update the test data(if needed) 
4. Update the fields `email` & `password` which would be used to login into taskworld(user-specific credentials). Also update the `workspace` field with name of the user workspace. 
5. Run test in required mode(modes mentioned above in usage)
6. Upon test run complete, the report will be generated under `mochawesome-report` folder
7. Open `mochawesome.html` file in a browser to view the execution report
8. If the test is ran in `test:dashboardRecorded` mode, open the dabboard `https://dashboard.cypress.io/projects/43dt3z/runs` to view the latest as well all runs
