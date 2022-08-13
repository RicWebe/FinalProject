import "bootstrap"


let initial_cards =[
  
  {
    Promotion: "Stardom",
    description: " Stardom is a Japanese joshi puroresu or women's professional wrestling promotion founded in 2010, now a brief history of Japanese wrestling in japan if you have a wrestling promotion it's either a promotion that only showcases men or women. A company named Bushiroad who owns NJPW recently bought Stardom and wanted to expand into the western market They even announced a joint event with njpw. One of their biggest tournament was one originally won by Toni Storm now with AEW.",
    poster: "https://static.wixstatic.com/media/94b54e_093a33645af64b6eb3b8a4aed881361e~mv2.jpg/v1/fill/w_2304,h_1536,al_c,q_90/94b54e_093a33645af64b6eb3b8a4aed881361e~mv2.webp",
    link:"https://www.stardom-world.com/"
  

  },
  {
    Promotion: "Stardom",
    description: "This has some of the main roster with the top players and leaders currently in stardom. There are currently seven factions in stardom. Queen's Quest, Stars, Donna Del Mondo, Cosmic Angels, Oedo Tai, and Gods Eye. ",
    poster: "https://pbs.twimg.com/media/FZStZJ0aMAAZ67E.jpg",
    link:"https://www.stardom-world.com/"
  

  },
  {
    Promotion: "Stardom",
    description: "The main belt is called the World of Stardom Championship but fans mostly refer to the belt as the red belt which we see held by Syuri leader of God's Eye.",
    poster: "https://64.media.tumblr.com/813304d1a85b6b5f717ca5bc94679694/a9502c900b74cc47-29/s540x810/d36250fae4b3fa17d2cc1c2e991c8807d693d0b0.jpg",
    link:"https://www.stardom-world.com/",
    
  

  },
  

]

let initial_card2=[
  {
      Promotion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dignissimos fugiat aperiam, doloribus eius deleniti dicta labore repellendus, eaque odit ut nam? Id autem est voluptatem, dicta dolores voluptates nisi.",
      description: "This video is a beginners guide to Stardom it is a couple of years old though it still does a good job of things explain on how things work better than I ever could.",
      vid: "https://www.youtube.com/embed/KK2kpa501Dk"  
  },
 
]



function displayCards(){
    let cards = initial_cards
    let cards_html = ''
    let ndx = 0
    for(let c of cards){
        cards_html += `
        
        <div class="card mb-3" data-ndx="${ndx}">
        <img src="${c.poster}" class="card-img-top" alt="${c.Promotion}">
        <div class="card-body">
          <h5 class="card-title">${c.Promotion}</h5>
          <p class="card-text">${c.description}</p>
          <a href="${c.link}" class="btn btn-primary">More Info</a>
        </div>
      </div>
      
  
  
        `
        ndx ++   
    }
    document.querySelector("#cards").innerHTML=cards_html
    
    
  }
  
  displayCards()

 

  function displayCard2(){
    let card2 = initial_card2
    let card2_html = ''
    let ndx = 0
    for(let c of card2){
        card2_html += `
  </div>
      
  <div class="card2">
    <div class="card-body text-bg-dark"data-ndx="${ndx}">
    <p class="card-text">${c.description}</p>
    <iframe width="560" height="315" src="${c.vid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    </div>
  </div>
  
  
        `
        ndx ++ 
    }
    document.querySelector("#card2").innerHTML=card2_html
    
    
  }



  displayCard2()