import { Locator } from "@playwright/test";

export default class ButtonsBlock {
  constructor(readonly locator: Locator) {}

  get buttons(): Promise<Locator[]> {
    return this.locator.getByRole("button").all();
  }

  async getAmount() {
    return (await this.buttons).length;
  }
}
