import {test} from '@playwright/test'
import * as fs from 'fs'
import { parse } from 'csv-parse/sync'
import { nameSplitter, genderSelector, hobbiesSelector } from '../utils/helpers/helperFunctions'

test.beforeEach(async({page}) => {

    await page.goto('https://demoqa.com/automation-practice-form')
})

// Define the structure of your CSV data
interface UserData {

    name: string,
    email: string,
    gender: string,
    mobile: string,
    birthdate: string,
    subjects: string,
    hobbies: string,
    current_address: string,
    state: string,
    city: string
    
}


// Read and parse the CSV file
const records: UserData[] = parse(

    fs.readFileSync('pageModel/tomato_combinations.csv', 'utf-8'),
    {
        columns: true,
        skip_empty_lines: true
    }
    
)

// Counter to have uniq test case titles
let counter: number = 0

// Iterate over the records
for (const record of records) {
    counter++

    test('Test case: ' + counter, async ({page}) => {

        const [firstName, lastName] = nameSplitter(record.name)

        await page.locator('#firstName').fill(firstName)

        await page.locator('#lastName').fill(lastName)

        await page.locator('#userEmail').fill(record.email)

        //  -1 for male, -2 for female and -3 for other
        const gender = genderSelector(record.gender)

        await page.locator(gender).check()

        await page.locator('#userNumber').fill(record.mobile)

        await page.locator('#dateOfBirthInput').fill(record.birthdate)

        // expand to multiple find multiple inputs..
        await page.fill('input[id="subjectsInput"]', record.subjects)

        await page.waitForSelector('.subjects-auto-complete__menu')

        // await page.getByText(record.subjects).last().click()
        await page.locator('#subjectsContainer > div.subjects-auto-complete__menu.css-26l3qy-menu').click()
        
        // -1 for sports, -2 for Reading, -3 for Music
        const hobbies = hobbiesSelector(record.hobbies)

        await page.locator(hobbies).check()

        await page.locator('#currentAddress').fill(record.current_address)

        // find select state
        await page.getByText('Select State').click()

        await page.waitForSelector('#state > div.css-26l3qy-menu')

        await page.getByText(record.state).last().click()

        // find select City
        await page.getByText('Select City').click()

        await page.waitForSelector('#city > div.css-26l3qy-menu')

        await page.getByText(record.city).last().click()

        // finaly click the Submit button
        await page.getByText('Submit').click()

        // wait for overlay to be displayed!

        await page.waitForSelector('.modal-open')

        await page.waitForTimeout(1000)
        
        await page.mouse.click(10,10)

    })
}
