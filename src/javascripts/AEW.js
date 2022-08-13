let initial_cards =[
    
    {
      Promotion: "AEW",
      description: "CM Punk is the current Champion of AEW even though he has an injury, he is still considered champion. They recently had a match to crown an interim champion",
      description2: "Here we have CM Punk and FTR who are tag team champions in every other promotion except AEW. They have started to team together over their love of wrestling.",

      
   
      poster: "https://static.wixstatic.com/media/94b54e_fceb0a663923495b95931ad6bfd6908f~mv2.jpg/v1/fill/w_2304,h_1536,al_c,q_90/94b54e_fceb0a663923495b95931ad6bfd6908f~mv2.webp",
      link:"https://www.allelitewrestling.com/",
      vid: "https://www.youtube.com/embed/SPJgMgHjCUY",

      poster2: "https://static.wixstatic.com/media/94b54e_c454ecdeb19642d09976745d9f400fb1~mv2.jpg/v1/fill/w_2304,h_1535,al_c,q_90/94b54e_c454ecdeb19642d09976745d9f400fb1~mv2.webp"
      
    }, 
    {
        Promotion: "AEW",
        description: "AEW is a newer company they have started to grow into other markets. they recently have announced a video game is in development by yukes who are mostly known for making wrestling games.",
        description2: "They are very open to working with other companies, that did not used be common until recently, even companies from other countries.Riho is a japanse talent who worked in tjpw now work at AEW fulltime.",

       
        poster: "https://www.sescoops.com/wp-content/uploads/2022/08/aew-fight-forever-1-1068x580.jpg.optimal.jpg",
        link:"https://www.allelitewrestling.com/",


        poster2:"https://www.f4wonline.com/.image/t_share/MTg3MDg4ODI4ODMyNDI0OTcx/e9ef71e6-66e3-4c59-b65f-796cc19462b3.jpg"
      }, 
      {
        Promotion: "AEW",
        description: "This is Thunder Rosa the current women's champion, she won it against Brit Baker in a cage match.",
      description2: "AEW has some great wrestlers though one of the issues that many fans have brought against the company is that even they have some of the best female talent they don't really tend to show case them.",
     
        poster: "https://static.wixstatic.com/media/94b54e_bba2d98ff2624ffcacf96bdd1b7a1bc0~mv2.jpg/v1/fill/w_2304,h_1536,al_c,q_90/94b54e_bba2d98ff2624ffcacf96bdd1b7a1bc0~mv2.webp",
        link:"https://www.allelitewrestling.com/",

        poster2:"https://static.wixstatic.com/media/94b54e_a72e1c3c16624a5a9c605438d6481fba~mv2.jpg/v1/fill/w_2304,h_1536,al_c,q_90/94b54e_a72e1c3c16624a5a9c605438d6481fba~mv2.webp"

      
      },
    
  
  
  ]
  let initial_card2=[
    {
        Promotion: "loremalk; falsff lasdfas f",
        description:"AEW is still a newer company this video does a great job at explaining how it came to be.",
        vid: "https://www.youtube.com/embed/SPJgMgHjCUY"  
    },
    {
      Promotion: "loremalk; falsff lasdfas f",
      description:"This video talks about how AEW promotes and writes their wrestler compared to WWE",
      vid: "https://www.youtube.com/embed/IeCiaYoGUCE" 
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
        <p class="card-text">${c.description}</p>
        <img src="${c.poster2}" class="card-img-top">
        <p class="card-text">${c.description2}</p>
        
        
        <div class="card-body">
          <h5 class="card-title">${c.Promotion}</h5>
          <p class="card-text">Check out their website.</p>
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
    <iframe width="480" height="360" src="${c.vid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  </div>
  
  
        `
        ndx ++ 
    }
    document.querySelector("#card2").innerHTML=card2_html
    
    
  }



  displayCard2()