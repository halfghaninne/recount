
const axios = require('axios');
const cheerio = require('cheerio');

async function fetchData(url){
  console.log("Crawling data...")
  // make http call to url
  let response = await axios(url).catch((err) => console.log(err));
  if(response.status !== 200){
      console.log("Error occurred while fetching data");
      return;
  }
  return response;
};

const webcrawler = async (url) => {

  const res = await fetchData(url);
  const html = res.data;
  const $ = cheerio.load(html);
  const linkObjects = $('a');
  const paragraphObjects =$('p');
  // this is a mass object, not an array

  // Collect the "href" and "title" of each link and add them to an array
  const links = [];
  if (linkObjects) {
    linkObjects.each((index, element) => {
      links.push({
        href: $(element).attr('href'), // get the href attribute
      });
    });
  }
  const paragraphTexts = [];
  if (paragraphObjects){
    paragraphObjects.each((index, element) => {
      paragraphTexts.push({
        //
      })
    })
  }
  
  console.log(links);
  
  // if res.data includes links, recursively crawl them!
  // if (links.length > 0) { // normally would use lodash util
  //   links.forEach((link) => {
  //     webcrawler(url+link) // this doesn't work because urls are not consistent!
  //   })
  // }

  // if res.data includes numbers, push em into an array!
  const numberRE = new RegExp('^[1-9]\d{2}-\d{3}-\d{4}');


  return '';
};



module.exports.webcrawler = webcrawler;