import * as fs from 'fs'
import { parse } from 'csv-parse/sync'
import {test} from '@playwright/test'


test.beforeEach(async({page}) => {
    await page.goto('https://demoqa.com/automation-practice-form')
})

const csvData = fs.readFileSync('pageModel/tomato_combinations.csv', 'utf-8')
const records = parse(csvData, {
    columns: true,
    skip_empty_lines: true
})

test('checking records', async ({ page }) => {
    console.log(records)
})
