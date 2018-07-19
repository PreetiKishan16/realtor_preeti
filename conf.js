exports.config = {
		framework : 'jasmine2',
	specs : [ './src/test_specs/realtor.js' ],
	
jasmineNodeOpts : {
	// onComplete will be called just before the driver quits.
	onComplete : null,
	// If true, display spec names.
	isVerbose : true,
	// If true, print colors to the terminal.
	showColors : true,
	// If true, include stack traces in failures.
	includeStackTrace : true,
	// Default time to wait in ms before a test fails.
	defaultTimeoutInterval : 600000
	},
	

	//Multiple Web Browsers capability
	multiCapabilities : [
	{ browserName: 'chrome' },
	{ browserName : 'firefox' }
	
//	{ browserName: 'internet explorer' }
	  
	],
	
	//autoDismissAlerts = true,
	
	//capabilities.SetCapability("autoDismissAlerts", true);

	onPrepare : function() {

	browser.ignoreSynchronization = true;
	//maximize the test window
	browser.driver.manage().window().maximize();

	// Override the timeout for webdriver.
	browser.driver.manage().timeouts().implicitlyWait(30000);

	}
};