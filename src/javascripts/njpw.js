import "bootstrap"


let initial_cards =[
  {
    Promotion: "NJPW (New Japan Pro Wrestling)", 
    description: "This is Kazuchika Okada basically the face of NJPW. He is New Japan's most popular wrestler who many consider being one of the greatest wrestlers of all time. Leader of the group known as chaos.",
    description2: "Tanahashi was the face of the company before okada, he is a company man and will do a lot for the company putting over the younger wrestlers and working with other promotions",

    
    
    poster: "https://static.wixstatic.com/media/94b54e_27539cb0ee7b45baa61c5d8e6fcffad6~mv2.jpg/v1/fill/w_2304,h_1536,al_c,q_90/94b54e_27539cb0ee7b45baa61c5d8e6fcffad6~mv2.webp",

    poster2:"https://static.wixstatic.com/media/94b54e_59da3e81fb78418ba35bc357b95ad1e8~mv2.jpg/v1/fill/w_2304,h_1536,al_c,q_90/94b54e_59da3e81fb78418ba35bc357b95ad1e8~mv2.webp",
      
      link:"https://njpwworld.com/"
    
    


  },
  {
  Promotion: "NJPW (New Japan Pro Wreslting)", 
  description: "Jay White is the current IWGP HeavyWieght Champion which is the companys most important belt. He is very popular in japan and even has some fans in the west .",
  description2: "LJay white is the leader of the bullet club who bascally a group a wrestler that laugh at traditons of japanse wreslting. one compalit may have is that the company has too many stables",
  
  poster: "https://static.wixstatic.com/media/94b54e_333c58fb67674a9cba9efe803b308798~mv2.jpg/v1/fill/w_2304,h_1536,al_c,q_90/94b54e_333c58fb67674a9cba9efe803b308798~mv2.webp",
  poster2:"https://static.wixstatic.com/media/94b54e_a246743538544d1a825ad377eeef6020~mv2.jpg/v1/fill/w_2148,h_1432,al_c,q_90/94b54e_a246743538544d1a825ad377eeef6020~mv2.webp",
    
    link:"https://njpwworld.com/"
  
},
{
Promotion: "NJPW (New Japan Pro Wreslting)", 
description: "Will Ospreay and Aussie open the are part of the stable known as uniited empire Will Ospreay(The Middle Wrestler) is the leader of group. Group is very similar to bullet club expect they consist more of foreing wreslter who do whatever it takes to win.",
description2: "The current IWGP heavywieht tag champs are the Great O'kahn and Jeff Cobb. They are muscle of group. ",
poster: "https://static.wixstatic.com/media/94b54e_d0602096a6074986b77d9e0aeb7307a9~mv2.jpg/v1/fill/w_2304,h_1536,al_c,q_90/94b54e_d0602096a6074986b77d9e0aeb7307a9~mv2.webp",

poster2:"https://static.wixstatic.com/media/94b54e_16d98beb448344a3987ffe35376432d0~mv2.jpg/v1/fill/w_2304,h_1536,al_c,q_90/94b54e_16d98beb448344a3987ffe35376432d0~mv2.webp",
  poster3:"https://static.wixstatic.com/media/94b54e_803eaad604434595b9f5e9341cab4285~mv2.jpg/v1/fill/w_2304,h_1536,al_c,q_90/94b54e_803eaad604434595b9f5e9341cab4285~mv2.webp",
  link:"https://njpwworld.com/"
}

]

let initial_card2=[
  {
      Promotion: "loremalk; falsff lasdfas f",
      description:"Watch if you want more inforamtion on the wrestlers",
      vid: "https://www.youtube.com/embed/O7bcrdNGuE4"
  },
  {
    Promotion: "loremalk; falsff lasdfas f",
    description:"This video summarysis the one of their most popular storylines that drew the atteiton of foreingers",
    vid: "https://www.youtube.com/embed/MmOH2Asi8QE"
  },
  {
    Promotion: "loremalk; falsff lasdfas f",
    description:"This is my faovoerte papyer per veiw that they did it was the one that got me into wrestling.",
    vid: "https://www.youtube.com/embed/smZ2Fk5S3ps"
  }
]






function displayCards(){
  let cards = initial_cards
  let cards_html = ''
  let ndx = 0
  for(let c of cards){
      cards_html += `
      
      <div class="card mb-3" data-ndx="${ndx}">
        <img src="${c.poster}" class="card-img-top" alt="${c.Promotion}">
        <p class="card-text">${c.description}</p>
        <img src="${c.poster2}" class="card-img-top">
        <p class="card-text">${c.description2}</p>
        
        
      <div class="card-body">
        <h5 class="card-title">${c.Promotion}</h5>
        <p class="card-text">Check out Njpw on NJPW World they have all their matches and even do live events on their for  $9.99 a month</p>
        <a href="${c.link}" class="btn btn-primary">Watch Now</a>
      </div>
    </div>
    


      `
      ndx ++   
  }
  document.querySelector("#cards").innerHTML=cards_html
  
  
}

displayCards()

displayCards()
function displayCard2(){
  let card2 = initial_card2
  let card2_html = ''
  let ndx = 0
  for(let c of card2){
      card2_html += `
      
      <div class="card2">
<div class="card-body"data-ndx="${ndx}">
  
  


<iframe width="480" height="360" src="${c.vid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<<p class="card-text">${c.description}</p>
</div>
</div>
    


      `
      ndx ++ 
  }
  document.querySelector("#card2").innerHTML=card2_html
  
  
}



displayCard2()