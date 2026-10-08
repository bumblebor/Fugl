import puppeteer from "puppeteer"
const getFuelCost = async() =>{
//Here we will use Puppeteer to scrape the web
//We want to get the price of plane fuel, which can be used for our calculations
const browser = await puppeteer.launch({
    headless: true,
    defaultViewport:null
});
/*This creates the browser page for the scraper
This scraped will use data from airlines.org to determine the cost of fuel
*/
const page = await browser.newPage()
//This goes to the page which we will get our data from
await page.goto("https://www.airlines.org/dataset/argus-us-jet-fuel-index/")
//This lambda will get the price (as a float)
const priceRaw = await page.evaluate(() => {
    //We're searching for something in the document labeled ".args-chart-subtitle". This will take the subtitle of the chart (which contains the current fuel price)
    const priceText = document.querySelector(".args-chart-subtitle")
    //The price is processed into a string (price) and the string is processed into a float (priceNum) using RegEx. 
    var price = String(priceText.innerText);
    let priceNum = parseFloat(price.match(/\d*\.\d\d/)[0])
    return priceNum
});
console.log(priceRaw);
await browser.close();
}

//Start scraper
getFuelCost()