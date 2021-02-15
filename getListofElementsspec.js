describe('get list of elements', function()
{
   // this is for http://juliemr.github.io/protractor-demo/ website with multiple results in history section
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model("second"));
    var goButton = element(by.id("gobutton"));
    var result = element(by.className('ng-binding'));
    var history = element.all(by.repeater('result in memory'));
    //beforeEach will be exceuted before every 'it' block
    beforeEach(function(){
      browser.get('http://juliemr.github.io/protractor-demo/');
      });
     
     function add(a,b)
     {
         firstNumber.sendKeys(a);
         secondNumber.sendKeys(b);
         goButton.click();

     }
     it('check the history', function(){
         
        add(2,3);
        add(4,1);
        add(5,4);
        expect(history.count()).toEqual(3);
        add(1,6);
        add(3,4);
        expect(history.count()).toEqual(5);

});
});