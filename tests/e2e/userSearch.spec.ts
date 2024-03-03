import { testIds } from '@/lib/constants';
import { expect, test } from '@playwright/test';

const exampleSearchTerm = 'kentcdodds';

test('can successfully search for a defined user and open a repo', async ({
  page,
}) => {
  // Open the app
  await page.goto('localhost:3000');

  // Input a username and search for it
  await page.getByTestId(testIds.SEARCH_INPUT).fill(exampleSearchTerm);
  await page.getByTestId(testIds.SEARCH_BUTTON).click();

  await page.waitForResponse(new RegExp('^http://localhost:3000.*'));
  await page.waitForTimeout(500);

  // Check if at least the example user is available and the limit of 5 items is respected
  const userAccordionItemsAmount = await page
    .getByTestId(testIds.USER_ACCORDION_ITEM)
    .count();
  expect(userAccordionItemsAmount).toBeGreaterThanOrEqual(1);
  expect(userAccordionItemsAmount).toBeLessThanOrEqual(5);

  // Get the example user accordion item
  const searchedUserAccordionItem = page
    .getByTestId(testIds.USER_ACCORDION_ITEM)
    .filter({ has: page.getByText(exampleSearchTerm, { exact: true }) });
  expect(searchedUserAccordionItem).toBeDefined();

  // Check if link to repo works
  await searchedUserAccordionItem
    .getByRole('button')
    .getByText(exampleSearchTerm)
    .click();
  await searchedUserAccordionItem
    .getByRole('button')
    .getByText('Open')
    .first()
    .click();
  await page.waitForURL(new RegExp('^https://github.com/.*'));
});

test('can search for a user and reset the search', async ({ page }) => {
  // Ope the app
  page.goto('localhost:3000');

  // Input a username
  const searchInput = page.getByTestId(testIds.SEARCH_INPUT);
  await searchInput.fill(exampleSearchTerm);
  await searchInput.blur();

  // Click the clear button nd check input is empty
  await page.getByTestId(testIds.CLEAR_SEARCH_BUTTON).click();
  expect(await searchInput.getAttribute('value')).toBe('');
});
