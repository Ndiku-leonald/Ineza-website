import { test, expect } from "@playwright/test";
test("landing page sections and media render", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "dignified life",
  );
  await expect(
    page.getByRole("navigation", { name: "Primary" }).getByRole("link", {
      name: "Home",
      exact: true,
    }),
  ).toBeVisible();
  for (const id of [
    "about",
    "programmes",
    "accountability",
    "get-involved",
    "contact",
  ])
    await expect(page.locator(`#${id}`)).toBeAttached();
  await expect(page.locator(".programme-story")).toHaveCount(4);
  expect(errors.filter((x) => !x.includes("media/"))).toEqual([]);
});
test("desktop navigation scrolls to programmes", async ({ page, isMobile }) => {
  test.skip(isMobile);
  await page.goto("/");
  await page
    .getByRole("navigation", { name: "Primary" })
    .getByRole("link", { name: "Programmes", exact: true })
    .click();
  await expect(page).toHaveURL(/\/programmes$/);
});
test("staff button is visible and links to Zoho Mail", async ({ page }) => {
  await page.goto("/");
  const staffLink = page
    .getByRole("navigation", { name: "Primary" })
    .getByRole("link", { name: /Staff(?: Mail)?/, exact: true })
    .filter({ visible: true })
    .first();
  await expect(staffLink).toBeVisible();
  await expect(staffLink).toHaveAttribute(
    "href",
    "https://accounts.zoho.com/signin?servicename=VirtualOffice&signupurl=https://www.zoho.com/mail/signup.html&serviceurl=https://mail.zoho.com",
  );
});
for (const route of [
  "/about",
  "/programmes",
  "/our-approach",
  "/get-involved",
  "/contact",
  "/donate",
  "/reports",
])
  test(`${route} renders as a distinct page`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator(".interior-header h1")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
  });
test("mobile menu opens, closes on Escape and restores focus", async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile);
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Open menu" });
  await menu.click();
  await expect(page.locator("#mobile-menu")).toHaveClass(/is-open/);
  await page.keyboard.press("Escape");
  await expect(page.locator("#mobile-menu")).not.toHaveClass(/is-open/);
  await expect(menu).toBeFocused();
});
for (const width of [320, 375, 768, 1024, 1280, 1440])
  test(`no overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth <=
          document.documentElement.clientWidth,
      ),
    ).toBe(true);
    if ([320, 768, 1440].includes(width))
      await page.screenshot({
        path: `test-results/landing-${width}.png`,
        fullPage: true,
      });
  });
test("reduced motion disables smooth scrolling", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
});
