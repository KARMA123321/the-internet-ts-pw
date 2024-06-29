import BasePage from "./base-page";
import { expect, Locator, Page, test } from "@playwright/test";
import DeleteButtonsBlock from "../elements/buttons/delete-buttons-block";

const URL = "./add_remove_elements/";

export default class AddRemoveElementsPage extends BasePage {
  private readonly addButton: Locator;
  private readonly addedButtons: DeleteButtonsBlock;

  constructor(page: Page) {
    super(page, URL);
    this.addButton = this.page.getByRole("button", { name: "Add element" });
    this.addedButtons = new DeleteButtonsBlock(this.page.locator("#elements")); //.added-manually
  }

  async addButtons(count: number) {
    await test.step(`Add ${count} buttons`, async () => {
      await this.addButton.click({ clickCount: count });
    });
  }

  async deleteButtons(count: number) {
    const actualAmount = await this.addedButtons.getAmount();

    await test.step(`Delete ${count} buttons out of ${actualAmount}`, async () => {
      await this.addedButtons.deleteButtons(count);
    });
  }

  async deleteAllButtons() {
    const actualAmount = await this.addedButtons.getAmount();

    await test.step(`Delete all ${actualAmount} buttons`, async () => {
      await this.addedButtons.deleteAllButtons();
    });
  }

  async checkButtonsAmountEqualTo(expected: number) {
    const actual = await this.addedButtons.getAmount();

    await test.step(`Buttons amount ${actual} should be ${expected}`, async () => {
      expect(actual).toEqual(expected);
    });
  }
}
