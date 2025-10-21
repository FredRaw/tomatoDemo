Goal - Demonstrate a modified CI(Using an existing webpage hence no "new code to check in") with the use of github, testomaton, playwright, github actions and github pages

Case:

- You are developing a webpage and want to test that your page does not contain any bugs. Your page has dropdown menus and other selections. Thus making the
page suitable for model based and combinatorial testing. You need to either find a testing tool that is modelbased, handles constraints and provides you with valid combinations automatically or you have to make the valid combinations manually. Then you want to use a testing framework that uses the created testdata as input for executing the tests on the webpage in development. You want the report to be published at a specific site available to all and to run these tests daily or after each change. 


Suggested flow

1. Assume that model is premade and use the terminal to have tomato generate combinations
2. Use playwright to run test with the combinations generated from tomato
3. Use GA pages to display test report

Dev environment 

- Install tomaton (pip install testomaton (version 0.4.2 used in this demo))
- Install playwright (npm init playwright@latest) to project folder - install with TS and github actions workflow, rest default
- Install csv-parse (npm install csv-parse)

Things to do

- Make a testomaton model.yaml file of the site you want to test
- $ tomato model.yaml > tomato_combinations.csv (To generate the testdata and print them to a .CSV file)
- Run the playwright tests: npx playwright test tests/firstTest.spec.ts
- 