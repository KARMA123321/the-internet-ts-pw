import ButtonsBlock from "./buttons-block";
import { Locator } from "@playwright/test";

export default class DeleteButtonsBlock extends ButtonsBlock {
  constructor(readonly locator: Locator) {
    super(locator);
  }

  async deleteButtons(count: number) {
    for (let i = 0; i < count; i++) {
      await (await this.buttons)[0].click();
    }
  }

  async deleteAllButtons() {
    await this.deleteButtons(await this.getAmount());
  }
}
