import { expect } from "chai";
import puppeteer, { Browser, Page } from "puppeteer";

describe("Switch Component", () => {
  let browser: Browser;
  let page: Page;

  before(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("should change state on click", async () => {
    await page.goto("http://localhost:8080", {
      waitUntil: "networkidle2",
    });
    await page.waitForSelector(".Switch");

    const switchElement = await page.$(".Switch");
    const checkboxElement = await page.$(".Switch input[type=checkbox]");

    const checkedBefore = await checkboxElement
      ?.getProperty("checked")
      .then((checked) => checked?.jsonValue());
    expect(checkedBefore).to.be.false;

    await switchElement?.click();

    const checkedAfter = await checkboxElement
      ?.getProperty("checked")
      .then((checked) => checked?.jsonValue());

    expect(checkedAfter).to.be.true;
  }).timeout(10000);

  it("should not change state when disabled", async () => {
    await page.goto("http://localhost:8080?disabled=true", {
      waitUntil: "networkidle2",
    });
    await page.waitForSelector(".Switch");

    const checkboxElement = await page.$(".Switch input[type=checkbox]");
    const switchElement = await page.$(".Switch");

    const checkedBefore = await checkboxElement
      ?.getProperty("checked")
      .then((checked) => checked?.jsonValue());
    expect(checkedBefore).to.be.false;

    await switchElement?.click();

    const checkedAfter = await checkboxElement
      ?.getProperty("checked")
      .then((checked) => checked?.jsonValue());

    expect(checkedAfter).to.be.false;
  });

  after(async () => {
    await browser.close();
  });
});
