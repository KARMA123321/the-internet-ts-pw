import BasePage from "./base-page";
import { Page } from "@playwright/test";

const URL = "./broken_images";

export default class BrokenImagesPage extends BasePage {
  constructor(locator: Page) {
    super(locator, URL);
  }
}
