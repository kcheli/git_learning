const { browser, $, element, ExpectedConditions } = require("protractor");

let EC = ExpectedConditions;
browser.waitForAngularEnabled(false);

describe('Protractor Demo', function() {
  beforeEach(() => {
    browser.get('http://www.google.com/');
  })

  it('Elvin Jones search', async () => {
    let inputField = element(by.name('q'));
    browser.wait(EC.presenceOf(inputField), 2000);
    inputField.sendKeys("elvin jones");

    let searchButton = element(by.css('input[value="Google Search"]'));
    browser.wait(EC.elementToBeClickable(searchButton), 2000);
    searchButton.click();

    let wikipediaLink = element(by.css('a[href="https://en.wikipedia.org/wiki/Elvin_Jones"]'));
    browser.wait(EC.elementToBeClickable(wikipediaLink), 2000);
    wikipediaLink.click();

    let articleHeader = $('#firstHeading')
    browser.wait(EC.presenceOf(articleHeader), 5000);
    let browserTitle = browser.getTitle()
    expect(browserTitle).toBe("Elvin Jones - Wikipedia")
  });

  it('Tony Williams search', async () => {
    let inputField = element(by.name('q'));
    browser.wait(EC.presenceOf(inputField), 2000);
    inputField.sendKeys("tony williams");

    let searchButton = element(by.css('input[value="Google Search"]'));
    browser.wait(EC.elementToBeClickable(searchButton), 2000);
    searchButton.click();

    let wikipediaLink = element(by.css('a[href="https://en.wikipedia.org/wiki/Tony_Williams_(drummer)"]'));
    browser.wait(EC.elementToBeClickable(wikipediaLink), 2000);
    wikipediaLink.click();

    let articleHeader = $('#firstHeading');
    browser.wait(EC.presenceOf(articleHeader), 5000);
    let browserTitle = browser.getTitle();
    expect(browserTitle).toBe("Tony Williams (drummer) - Wikipedia");
  });
});