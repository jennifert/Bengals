import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = [
  { name: "Home", path: "/" },
  { name: "Facts", path: "/facts" },
  { name: "Rescue", path: "/rescue" },
  { name: "About", path: "/about" },
];

for (const route of pages) {
  test(`${route.name} page accessibility`, async ({ page }) => {
    await page.goto(route.path);

    // Verify the main content is present.
    await expect(page.getByRole("main")).toBeVisible();

    // Scan for common WCAG A and AA violations.
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(results.violations).toEqual([]);
  });
}
