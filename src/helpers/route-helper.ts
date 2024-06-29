import { test } from "../fixtures";
import { expect, Page } from "@playwright/test";

export default class RouteHelper {
  static async CheckImagesLoadSuccessfully(page: Page) {
    await page.route(/\.jpg|png$/, async (route) => {
      const response = await route.fetch();

      await test.step(`Image loads successfully`, () => {
        expect.soft(response?.status()).toEqual(200);
      });

      await route.continue();
    });
  }
}
