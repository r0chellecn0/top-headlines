const headlineEndpointUrl='https://newsapi.org/v2/top-headlines';

function headlineDataFromApi () {
  let data = {
    category: ['business', 'general', 'health', 'science', 'technology', 'sports'],
    pageSize: '10',
    country: 'us',
    apiKey: 'b26e94d45d1e41c6b845747d5ec42253',
  };
  $.getJSON(headlineEndpointUrl, data, returnTopHeadlines,);
    $("html").animate({ scrollTop: 0 });
}

function topHeadlines() {
  $('.topHeadlinesButton').on('click', headlineDataFromApi,);
  console.log('`topHeadlines ran`');
}

function returnTopHeadlines(data) {
  results=[];
  $('.topHeadlines').html('');
  for (let i=0; i<data.articles.length; i++) {
    let headline= data.articles[i].title;
    let headlineImage = data.articles[i].urlToImage;
    let headlineDescription= data.articles[i].description;
    let headlineUrl= data.articles[i].url;
     /*no picture to load*/
    if (data.articles[i].urlToImage === null) {
        $('.topHeadlines').append(`<h1> <a href='${headlineUrl}' target="_blank"> ${headline} </a> </h1> <img src='https://chezsoi.org/lucas/wwcb/photos/404-Dead_Link.jpg' alt="Picture unavailable" target="_blank"> <p> I'm sorry, there is no description for this news article.</p>`);
    }
    else {
    $('.topHeadlines').append(`<h1> <a href='${headlineUrl}' target="_blank"> ${headline} </a> </h1> <a href='${headlineUrl}' target="_blank"> <img src='${headlineImage}' alt="Image related to ${headline}"></a> <p>${headlineDescription}</p>`);
    }
  }
}

/*business*/
function businessHeadlines(){
  $('.business').on('click', businessDataFromApi,);
  console.log('`businessHeadlines ran`');
}

function businessDataFromApi() {
  let data= {
    category: 'business',
    pageSize: '10',
    country: 'us',
    apiKey: 'b26e94d45d1e41c6b845747d5ec42253',
  };
  $.getJSON(headlineEndpointUrl, data, returnTopHeadlines);
  $('.page').html('');
  $('.page').hide();
  $("html").animate({ scrollTop: 0 });
}

/*entertainment*/
function entertainmentHeadlines(){
  $('.entertainment').on('click', entertainmentDataFromApi,);
  console.log('`entertainmentHeadlines ran`');
}

function entertainmentDataFromApi() {
  let data= {
    category: 'entertainment',
    pageSize: '10',
    country: 'us',
    apiKey: 'b26e94d45d1e41c6b845747d5ec42253',
  };
  $.getJSON(headlineEndpointUrl, data, returnTopHeadlines);
  $('.page').html('');
  $('.page').hide();
  $("html").animate({ scrollTop: 0 });
}

/*health*/
function healthHeadlines(){
  $('.health').on('click', healthDataFromApi,);
  console.log('`healthHeadlines ran`');
}

function healthDataFromApi() {
  let data= {
    category: 'health',
    pageSize: '10',
    country: 'us',
    apiKey: 'b26e94d45d1e41c6b845747d5ec42253',
  };
  $.getJSON(headlineEndpointUrl, data, returnTopHeadlines);
  $('.page').html('');
  $('.page').hide();
  $("html").animate({ scrollTop: 0 });
}

/*science*/
function scienceHeadlines(){
  $('.science').on('click', scienceDataFromApi,);
  console.log('`scienceHeadlines ran`');
}

function scienceDataFromApi() {
  let data= {
    category: 'science',
    pageSize: '10',
    country: 'us',
    apiKey: 'b26e94d45d1e41c6b845747d5ec42253',
  };
  $.getJSON(headlineEndpointUrl, data, returnTopHeadlines);
  $('.page').html('');
  $('.page').hide();
  $("html").animate({ scrollTop: 0 });
}

/*sports*/
function sportsHeadlines(){
  $('.sports').on('click', sportsDataFromApi,);
  console.log('`sportsHeadlines ran`');
}

function sportsDataFromApi() {
  let data= {
    category: 'sports',
    pageSize: '10',
    country: 'us',
    apiKey: 'b26e94d45d1e41c6b845747d5ec42253',
  };
  $.getJSON(headlineEndpointUrl, data, returnTopHeadlines);
  $('.page').html('');
  $('.page').hide();
  $("html").animate({ scrollTop: 0 });
}
/*technology*/
function technologyHeadlines(){
  $('.technology').on('click', technologyDataFromApi,);
  console.log('`technologyHeadlines ran`');
}

function technologyDataFromApi() {
  let data= {
    category: 'technology',
    pageSize: '10',
    country: 'us',
    apiKey: 'b26e94d45d1e41c6b845747d5ec42253',
  };
  $.getJSON(headlineEndpointUrl, data, returnTopHeadlines);
  $('.page').html('');
  $('.page').hide();
  $("html").animate({ scrollTop: 0 });
}


$(headlineDataFromApi);
$(topHeadlines);
$(businessHeadlines);
$(entertainmentHeadlines);
$(healthHeadlines);
$(scienceHeadlines);
$(sportsHeadlines);
$(technologyHeadlines);
