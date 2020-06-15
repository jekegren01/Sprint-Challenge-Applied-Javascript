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


function createCard({authorName, authorPhoto, headline}){
    //create all elements
    const card = document.createElement("div");
    const headlineContainer = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("span");
    
    //add Styling
    card.classList.add("card");
    headlineContainer.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    
    //update content
    headlineContainer.textContent = headline;
    img.src = authorPhoto;
    name.textContent = `By ${authorName}`;
    
    //appending
    imgContainer.appendChild(img);
    author.append(imgContainer, name);
    card.append(headlineContainer, author);
    
    
    
    
    
    return card;
} 

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