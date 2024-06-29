import { test } from "../fixtures";
import BrokenImagesPage from "../pages/broken-images-page";
import RouteHelper from "../helpers/route-helper";


test.describe("Broken images page tests", {tag: "@broken-images"}, async () => {
  test("All images load successfully", async ( { page } ) => {
    await RouteHelper.CheckImagesLoadSuccessfully(page);

    await new BrokenImagesPage(page).goto();
  });
});