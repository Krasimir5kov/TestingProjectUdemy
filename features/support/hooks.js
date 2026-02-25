//import { POManager } from "../../PageObjects/POManager";
const {POManager} = require('../../PageObjects/POManager.js')
const { After, Before,BeforeStep,AfterStep ,Status} =require("@cucumber/cucumber");
const playwright = require('@playwright/test');
const path = require('node:path');

Before(async function () {
    const browser = await playwright.chromium.launch({ headless: false });
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
    
    this.poManager = new POManager(this.page);
   
});
BeforeStep(async function(){
    console.log('Before STEP');

});
AfterStep(async function({result}) {
    
    if (result.status === Status.FAILED){
        this.page.screenshot({path: 'TestAfterStepFail.png'});
    }
})

After(async function () {
    console.log('last command after AFTER')
    //return this.browser.close()
})