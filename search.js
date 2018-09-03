const searchEndpointUrl = 'https://newsapi.org/v2/everything';
let pageNumber = 1;

$(window).trigger('resize');
function searchNewsData(event){
  event.preventDefault();
  let headlineSearch = $('.searchBar');
  let searchHeadlines = headlineSearch.val();
  let data = {
    q: searchHeadlines,
    sortBy: 'publishedAt',
    apiKey:'b26e94d45d1e41c6b845747d5ec42253',
    page: pageNumber
  }
  $.getJSON(searchEndpointUrl, data, searchNewsDataFromApi)
    .fail(function(err) { 
       $('.topHeadlines').html(`<h1> no results found.  please try another search </h1>`);
    });
}

function searchNews () {
  $('.searchButton').on('click', function(event){
    pageNumber = 1;
    searchNewsData(event);
  });
}

function searchNewsDataFromApi(data) {
  $('.topHeadlines').html('');
  let results= data.totalResults;
  if (results === 0) {
    $('.topHeadlines').append(`<h1> no results found.  please try another search </h1>`);
    $('.page').hide();
    console.log('`error message`');
  }
  else if (results <= 20) {
    $('.topHeadlines').append(`<h1>There are ${results} results related to your search. </h1>`);
    $('.page').html('');
    $('.page').hide();
  }
  else {
    $('.topHeadlines').append(`<h1>There are ${results} results related to your search. </h1><p>`);
    $('.page').html('');
    $('.page').show();
  }
  for (let i=0; i<data.articles.length; i++) {
    let headline= data.articles[i].title;
    let headlineImage = data.articles[i].urlToImage;
    let headlineDescription= data.articles[i].description;
    let headlineUrl= data.articles[i].url;

    /*No picture to load*/
      if (headlineImage === null) {
        $('.topHeadlines').append(`<h1> <a href='${headlineUrl}' target="_blank" > ${headline}</a> </h1> <img src='https://chezsoi.org/lucas/wwcb/photos/404-Dead_Link.jpg' alt="Picture not available"> <p> I'm sorry, no description was found </p>`);
      }
      else {
        $('.topHeadlines').append(`<h1> <a href='${headlineUrl}' target="_blank"> ${headline}</a> </h1> <a href='${headlineUrl}' target="_blank" > <img src='${headlineImage}' alt="Image related to ${headline}"></a> <p>${headlineDescription}</p>`);
        console.log('`searchFunction ran`');
          };
    }

  /*for large screens*/
  if ( $(window).width() < 739) {
    $(window).trigger('resize');
    if (pageNumber > 1) {
      $('.page').append(`<button class="pageButton" id="prevPage"> <  </button></div>`);
    }
    $('.page').append(`<h2>page ${pageNumber}</h2>`)
    $('.page').append(`<button class="pageButton" id="nextPage">  > </button>`);       
    $("html").animate({ scrollTop: 0 });
  } 
  /*for small screens*/
  else {
    if (pageNumber > 1) {
      $(window).trigger('resize');
      $('.page').append(`<button class="pageButton" id="prevPage"> < previous </button></div>`);
    }
    $('.page').append(`<h2>page ${pageNumber}</h2>`)
    $('.page').append(`<button class="pageButton" id="nextPage">  next > </button>`);    
    $("html").animate({ scrollTop: 0 });
  }
}

function pageHandlers(){
  $('.page').on('click', '#nextPage', function(event){
    pageNumber ++;
    $('.page').html('');
    searchNewsData(event);
  });

  $('.page').on('click', '#prevPage', function(event){
    $('.page').html('');
    pageNumber --;

    if (pageNumber < 1){
      pageNumber = 1;
    }
    searchNewsData(event);
  });
}
$(window).trigger('resize');

$(searchNews);
$(pageHandlers);
$(window);
