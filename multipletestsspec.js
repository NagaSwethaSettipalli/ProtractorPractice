describe('multiple scenarios', function(){
    //global variables
   var firstNumber = element(by.model('first'));
   var secondNumber = element(by.model("second"));
   var goButton = element(by.id("gobutton"));
   var result = element(by.className('ng-binding'));

   //beforeEach will be exceuted before every 'it' block
   beforeEach(function(){
     browser.get('http://juliemr.github.io/protractor-demo/');
     browser.driver.manage().window().maximize;
    });

  //tc1
   it('should have  title', function()
   {
    expect(browser.getTitle()).toEqual('Super Calculator');
   });

   //tc2
   it('Should add 2 numbers', function(){
       firstNumber.sendKeys(4);
       secondNumber.sendKeys(3);
       goButton.click();
       expect(result.getText()).toEqual('7');
   });
   //tc2
   it('Should add 4 and 3', function(){
       firstNumber.sendKeys(4);
       secondNumber.sendKeys(3);
       goButton.click();
       expect(result.getText()).toEqual('7');
   });
    //tc3
    it('Should add 6 and 4', function(){
        firstNumber.sendKeys(6);
        secondNumber.sendKeys(4);
        goButton.click();
        expect(result.getText()).not.toEqual('7');
    });
    //tc4
    it('Should read the value from an input', function(){
        firstNumber.sendKeys(6);
        expect(firstNumber.getAttribute('value')).toEqual('6');

    });
});