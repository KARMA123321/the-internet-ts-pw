import { test as base } from "@playwright/test";
import AddRemoveElementsPage from "./pages/add-remove-elements-page";
import BrokenImagesPage from "./pages/broken-images-page";
import DragAndDropPage from "./pages/drag-and-drop-page";

type Pages = {
  addRemoveElementsPage: AddRemoveElementsPage;
  brokenImagesPage: BrokenImagesPage;
  dragAndDropPage: DragAndDropPage;
};

export const test = base.extend<Pages>({
  addRemoveElementsPage: async ( { page}, use ) => {
    const addRemoveElementsPage = new AddRemoveElementsPage(page);

    await addRemoveElementsPage.goto();

    await use(addRemoveElementsPage);
  },
  brokenImagesPage: async ( { page }, use ) => {
    const brokenImagesPage = new BrokenImagesPage(page);

    await brokenImagesPage.goto();

    await use(brokenImagesPage);
  },
  dragAndDropPage: async ( { page }, use ) => {
    const dragAndDropPage = new DragAndDropPage(page);

    await dragAndDropPage.goto();

    await dragAndDropPage.checkColumnsAmountEqualTo(2);

    await use(dragAndDropPage);
  },
});

export { expect } from "@playwright/test";
