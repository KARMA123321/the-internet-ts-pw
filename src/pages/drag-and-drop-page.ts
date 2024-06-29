import BasePage from "./base-page";
import { expect, Page, test } from "@playwright/test";
import ColumnsBlock from "../elements/columns-block";
import { header } from "../constants/elements-names";
import { draggable } from "../constants/js-properties-names";

const URL = "./drag_and_drop";

export default class DragAndDropPage extends BasePage {
  private draggableColumns: ColumnsBlock;

  constructor(page: Page) {
    super(page, URL);
    this.draggableColumns = new ColumnsBlock(page.locator("#columns"));
  }

  async checkColumnsAmountEqualTo(count: number) {
    const amount = await this.draggableColumns.getAmount();

    await test.step(`Columns amount ${amount} equal to ${count}`, async () => {
      expect(amount).toEqual(count);
    });
  }

  async swapColumns() {
    const column1 = (await this.draggableColumns.columns)[0];
    const column1Value = await column1.locator(header).textContent();

    const column2 = (await this.draggableColumns.columns)[1];
    const column2Value = await column2.locator(header).textContent();

    await test.step(`Check columns can be swapped`, async () => {
      await expect(column1).toHaveJSProperty(draggable, true);
      await expect(column2).toHaveJSProperty(draggable, true);
    });

    await test.step(`Swap column ${column1Value} with column ${column2Value}`, async () => {
      await column1.dragTo(column2);
    });

    await test.step(`Columns were swapped successfully`, async () => {
      expect(column1Value).not.toBeNull();
      expect(column2Value).not.toBeNull();
      await expect.soft(column1.locator(header)).toHaveText(column2Value as string);
      await expect.soft(column2.locator(header)).toHaveText(column1Value as string);
    });
  }


}
