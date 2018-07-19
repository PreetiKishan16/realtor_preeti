var callPageObjects = require('../page_elements/RealtorPageObjects.json');
var callURLObject = require('../url/urldata.json');
var search_countresult;
var price_beforeViewDetails;
var price_afterViewDetails;
var input = element(By.xpath(callPageObjects.realtor.home.searchbox));

describe('Navigate to Realtor and Search:', function() {
	browser.get(callURLObject.realtor_url);
	
	it('Enter search field value in home page', function() {
		//focus on the search box, enter value and press enter
		input.click();
		browser.sleep(2000);
		input.sendKeys("Morgantown, WV");
		browser.sleep(1000);
		input.sendKeys(protractor.Key.ENTER);
		browser.sleep(4000);

	});

	it('verify number N is greater than 0', function() {
		
        //Survery feedback ads are displayed on search results page - Dismiss Ads
        browser.getCurrentUrl().then(function(url) {
       browser.navigate().refresh().catch(function() {
           return browser.switchTo().alert().then(function (alert) {
               alert.dismiss();
               return browser.get(url);
           });
       });

   });

		
		//1st tile version 
		/*Get the search count element, extract only the number and compare it to be greater than 0. */
		element(By.id(callPageObjects.realtor.home.searchcountresult)).getText().then(
				//2nd list version
	           //element(By.xpath(callPageObjects.realtor.home.searchcountresult2)).getText().then(
						function(text) {							
							search_countresult = String(text).replace(/[^0-9]/g, '');
							console.log(' *** Number of Homes = :  ' + search_countresult);								
							expect(search_countresult).toBeGreaterThan(0);
						});

	});

	it(
			'Click Address of second result',
			function() {

				// get value of price from Search Results page
				// tile version
				element
				.all(By.className(callPageObjects.realtor.home.pricebeforeDetails))
				.get(1)
				.getText()
				.then(
						function(text) {
							console
							.log('  Price on Search Result Page:  '
									+ text);
							price_beforeViewDetails = text;
							element(By.id('2')).click();
							element(
									By
									.xpath(callPageObjects.realtor.home.priceafterDetails))
									.getText()
									.then(
											function(text) {
												console
												.log(' Price on View Details Page: '
														+ text);
												price_afterViewDetails = text;
												expect(
														price_beforeViewDetails)
														.toEqual(
																price_afterViewDetails);

											});
							browser.sleep(3000)
						});

			});

});
