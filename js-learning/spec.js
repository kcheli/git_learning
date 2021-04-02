const { browser, $, element } = require("protractor");

browser.waitForAngularEnabled(false);

// spec.js
describe('Protractor Demo App', function() {
  // beforeEach(() => {
    
  // })

  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    element(by.model('first')).sendKeys(4)
    element(by.model('second')).sendKeys(5)

    $('#gobutton').click()
    
    
    browser.sleep(5000)
    
    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});