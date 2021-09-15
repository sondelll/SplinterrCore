'use strict';

var sensorIP = "100.80.241.155";
var sensorAddress = "http://" + sensorIP +"/graph1.html";

class CoReed {
  
  constructor() {
    
    if (!(this instanceof CoReed)) {
      return new CoReed();
    };
  
  };

  read() {
    
    async function fromChannel(){
      const Puppeteer = require('puppeteer');
      const browser = await Puppeteer.launch();
      const page = await browser.newPage();
    
      var reading;

      await page.goto(sensorAddress);

      reading = (await page.$eval("#vs1", (el) => el.textContent));
      try{
        return reading;
      } finally {
      await browser.close();

      };
    };

    return fromChannel();

  };
}
module.exports = CoReed;
module.exports.CoReed = CoReed;
