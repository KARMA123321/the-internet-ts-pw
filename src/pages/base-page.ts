import { Page, expect, test, BrowserContext } from "@playwright/test";

export default abstract class BasePage {
  protected context: BrowserContext;

  protected constructor(
    protected readonly page: Page,
    protected readonly url: string
  ) {
    this.context = page.context();
  }

  async goto() {
    await test.step(`Go to ${this.url}`, async () => {
      await this.page.goto(this.url);
    });
  }

  async checkUrl() {
    await test.step(`Check that current page url is ${this.url}`, async () => {
      await expect(this.page).toHaveURL(this.url);
    });
  }
}
