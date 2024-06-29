import { test } from "../fixtures";

test.describe("Drag and drop page tests", { tag: "@drag-and-drop" }, async () => {
  test("Check columns swap", async ({ dragAndDropPage }) => {
    await dragAndDropPage.swapColumns();
  });
});
