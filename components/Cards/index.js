// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(res=>{
     const cardsContainer = document.querySelector(".cards-container");
     const articles = res.data.articles;
     for(key in articles){
         articles[key].forEach(article=>{
             const card = createCard(article);
             cardsContainer.appendChild(card);
         });
     }
 }).catch(err=>{
     console.log(err);
 });

 function createCard({authorName, authorPhoto, headline}){
     const card = document.createElement("div");
     card.classList.add("card");

     const headlineContainer = document.createElement("div");
     headlineContainer.classList.add("headline");
     headlineContainer.textContent = headline;

     const author = document.createElement("div");
     author.classList.add("author");

     const imgContainer = document.createElement("div");
     imgContainer.classList.add("img-container");

     const img = document.createElement("img");
     img.src = authorPhoto;

     imgContainer.appendChild(img);

     const name = document.createElement("span");
     name.textContent = `By ${authorName}`;

     author.append(imgContainer, name);

     card.append(headlineContainer, author);
     return card;
 } 