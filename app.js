const business = document.querySelector('.business')
let showData = document.querySelector('.show-data');
let businessData = document.querySelector('.business-data')
const home = document.querySelector('.home');
const global = document.querySelector('.global');
let globalData = document.querySelector('.global-data');


const API_KEY = "2e37e836c4374bf7830601f04c4d7ab6"


 const newsData = () => {
        
    
    fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
         
        data.articles.map(news => {

            showData.innerHTML += `
                                <div class='card-container'>
                                <div class='card'>
                                 <img  class='card-image' src=${news.urlToImage} alt=${news.title}>
                                <h3>${news.title}</h3>
                                <p class='author'>By ${news.author}</p>
                                <h6 class='published'><ion-icon name="calendar-outline"></ion-icon> ${news.publishedAt}</h6>
                                <a  class='news-url'href=${news.url}>Read More</a>
                                </div>
                                
                                </div>
                                    `
        })       
    })
 }

newsData()

  business.addEventListener('click',()=>{
    if(business){ 
        business.style.borderBottom = '2px solid red';
        global.style.borderBottom = '';

        function bussData() {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
         
        data.articles.map(businessNews => {
            
            businessData.innerHTML += `
                                <div class='card-container'>
                                <div class='card'>
                                 <img  class='card-image' src=${businessNews.urlToImage}>
                                <h3>${businessNews.title}</h3>
                                <p class='author'>${businessNews.author}</p>
                                <h6 class='published'><ion-icon name="calendar-outline"></ion-icon> ${businessNews.publishedAt}</h6>
                                <a  class='news-url' href=${businessNews.url}>Read More</a>
                                </div>
                                
                                </div>
                                    `
        })       
    })
}
    showData.remove();
    bussData();
}
  })

  global.addEventListener('click', ()=> {
    

    if(global) {
    
        business.style.borderBottom = '';
        global.style.borderBottom = '2px solid red';
        
     function gloData() {
    fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
         
        data.articles.map(globalNews => {

            globalData.innerHTML += `
                                <div class='card-container'>
                                <div class='card'>
                                 <img  class='card-image' src=${globalNews.urlToImage}>
                                <h3>${globalNews.title}</h3>
                                <p class='author'>${globalNews.author}</p>
                                <h6 class='published'><ion-icon name="calendar-outline"></ion-icon> ${globalNews.publishedAt}</h6>
                                <a  class='news-url' href=${globalNews.url}>Read More</a>
                                </div>
                                
                                </div>
                                    `
        });     
    });
};
  
    businessData.remove();
    showData.remove();
    gloData();
    };
});
 


