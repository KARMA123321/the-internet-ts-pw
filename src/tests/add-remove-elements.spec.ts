import { test } from "../fixtures";

test.describe("Add/remove elements page tests", { tag: "@add-remove-elements" }, () => {
  test("Add elements", async ({ addRemoveElementsPage }) => {
    const elementsCount = 3;

    await addRemoveElementsPage.goto();

    await addRemoveElementsPage.addButtons(elementsCount);

    await addRemoveElementsPage.checkButtonsAmountEqualTo(elementsCount);
  });
  test("Remove elements", async ({ addRemoveElementsPage }) => {
    await addRemoveElementsPage.goto();

    await addRemoveElementsPage.addButtons(3);

    await addRemoveElementsPage.deleteAllButtons();

    await addRemoveElementsPage.checkButtonsAmountEqualTo(0);
  });
});
