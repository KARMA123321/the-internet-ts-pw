import { Locator } from "@playwright/test";

export default class ColumnsBlock {
  constructor(readonly locator: Locator) {}

  get columns() {
    return this.locator.locator(".column").all();
  }

  async getAmount() {
    return (await this.columns).length;
  }
}
