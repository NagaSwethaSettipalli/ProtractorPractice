const { browser, element } = require("protractor");

describe('Protractor Demo', function()
{
    it('should have a title', function()
    {
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.driver.manage().window().maximize();
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});

describe('Enter name in textbox', function()
{
     it('Should enter name as Swetha', function()
     {
         browser.get('https://angularjs.org/');
         browser.driver.manage().window().maximize();
         element(by.model('yourName')).sendKeys('Swetha');
         var text = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
         expect(text.getText()).toEqual('Hello Swetha!');
     });
});

describe('multiple elements',function()
{
    it('should add 2 numbers', function()
    {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(2);
        element(by.model("second")).sendKeys(5);

        element(by.id("gobutton")).click();

        expect(element(by.className('ng-binding')).getText()).toEqual('7');

    });
});