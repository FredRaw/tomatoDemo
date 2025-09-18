import {test} from '@playwright/test'

test('first test', async ({page}) => {
    await page.goto('https://demoqa.com/automation-practice-form')

})