//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"


let initial_cards =[
  {
    Promotion: "NJPW (New Japan Pro Wreslting)", 
    description: "It is a Japanese wrestling promotion that's based in Tokyo it was founded on January 13 by Antonio Inoki. It is the biggest promotion in japan at the moment they sell out more tickets and have bigger venues than any other promotion that is based in japan", 
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/New_Japan_Pro_Wrestling_Logo_2.svg/1200px-New_Japan_Pro_Wrestling_Logo_2.svg.png",
    link:"./Njpw.html"
  }, 
  {
    Promotion: "Stardom(World Wonder Ring Stardom)",
    description: "World Wonder Ring Stardom they are mostly referred to as just stardom it is based in Tokyo, it was founded in September 2010. Is probably to most known and popular Joshi Puroresu promotion at the moment",
    poster: "https://www.spike-chunsoft.com/wp-content/uploads/Stardom_Logo.png",
    link:"./Stardom.html"
  }, 
  {
    Promotion: "AEW",
    description: "AEW is an American wrestling promotion,it was founded in Jacksonville, Florida. It is considered  the second biggest promotion in the WWE",
    poster: "https://ca-times.brightspotcdn.com/dims4/default/e4c47c6/2147483647/strip/true/crop/737x387+0+14/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7f%2F78%2F5b2d933d4c65a57a775306e4284d%2Faew-logo-2.jpg",
    link:"./AEW.html"
  }, 
  {
    Promotion: "Wrestle Universe",
    description: "It is a wrestling streaming service owned by CyberAgent's subsidiary CyberFight. It was called DDT universe and was just a streaming service for one wrestling company, now it showcases many other different promotions in japan",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Wrestle_Universe_Logo.svg/1200px-Wrestle_Universe_Logo.svg.png",
    link:"./DDT.html"

  }
  


]

let initial_card2=[
  {
      Promotion: "Why I love Wrestling",
      description:"Its a 30 mintue videeo, I feel just the first ten mintues will give anyone a good understanding about why people like wrestling",
      vid: "https://www.youtube.com/embed/BQCPj-bGYro"
  },
 
]





function displayCards(){
  let cards = initial_cards
  let cards_html = ''
  let ndx = 0
  for(let c of cards){
      cards_html += `
      <div class="card  col mb-3" data-ndx="${ndx}">
          <div class="row g-0">
              <div class="col-md-4">
                  <img src="${c.poster}" class="img-fluid rounded-start" alt="${c.Promotion}">
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <h5 class="card-title">${c.Promotion}</h5>
                      <p class="card-text">${c.description}</p>
                      <a href="${c.link}" class="btn btn-primary">More Info</a>
                      

                  </div>
              </div>
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
  <h5 class="card-title">${c.Promotion}</h5>
  <p class="card-text">${c.description}</p>
  <iframe width="1080" height="720" src="${c.vid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>


      `
      ndx ++ 
  }
  document.querySelector("#card2").innerHTML=card2_html
  
  
}



displayCard2()