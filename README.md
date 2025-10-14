Demo of test tool tomato..... This is WIP!

1. Goal - Demonstrate a complete CI with the use of github, Tomato, playwright, github actions and github pages

Suggested flow

1. Trigger a workflow defined in GA daily
2. Workflow 
    2.1 Use a integrated runner 
    2.2 Check out git repo
    2.3 Assume that model is premade and use the terminal to have tomato generate combinations
    2.4 Use playwright to run test in index.html with the combinations generated from tomato
    2.5 Use GA pages to display test report

Dev environment 

- Install tomaton  (pip install testomaton)
- Install playwright (npm init playwright@latest) to project folder - install with TS and github actions workflow, rest default
- Install csv-parse (npm install csv-parse)


Things to do

- Make a testomaton model.yaml file of the site you want to test
- $ tomato model.yaml > tomato_combinations.csv (To generate the testdata and print them to a .CSV file)
- Run the playwright tests: npx playwright test tests/firstTest.spec.ts
- 