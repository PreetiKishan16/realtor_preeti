# realtor_preeti
Contains realtor.com testing project by Preeti Kishan

**Build and execute the project **

After the project has been imported to eclipse, or any other ide,

-- Click Run As -> External Tools Configurations, select "Launch new configuration".

-- In the new configuration window, give a configuration name. In my case, it was "realtor_protractor".

-- Under the main tab, the location field should be the current batch file location: runner.bat file.
   In my case, it is: ${workspace_loc:/realtor_gui/runner.bat}
   
-- The Working Directory field should be the current working folder.
   In my case, it is: ${workspace_loc:/realtor_gui}
   
 Click Apply and then click 'Run' to run the program to execute test scripts.
 
 Note: This script will run in both Firefox and Chrome simultaneously (configured in conf.js file under multiCapabilities).
       

---------------------------------------------------------------------------
**Files**

1. runner.bat
This file contains protractor command to call configuration file conf.js which in-turn will call the test scripts.
 
2. conf.js
This file contains configuration settings for browser, driver and calls the test scripts file realtor.js. Browser is configured to run in Chrome and Firefox. Make sure you have latest version of firefox.

3. realtor.js 
This file contains functions to test the realtor.com page elements and execute the test scripts. This file is under src/test_specs folder

4. RealtorPageObjects.json
This file contains Page Objects like xpath and id values which are called by page elements in realtor.js file. This file is contained under src/page_elements folder.

5. urldata.json
This file contains URL information which driver will navigate to. This file is contained under src/url folder.

