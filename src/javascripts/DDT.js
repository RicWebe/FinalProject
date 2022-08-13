import "bootstrap"


let initial_cards =[
  {
    Promotion: "Tokyo Joshi Pro-Wrestling",
    description: "Tokyo Joshi Pro-Wrestling abbreviated to TJPW, is a Japanese Joshi puroresu or women's professional wrestling promotion founded in 2012 as a sister promotion of DDT Pro Wrestling. It originally ran alongside other shows like live music and other idol performances, it became its own promotion starting on February 28, 2015. ",
    description2: "TJPW works with other promotions a lot more than stardom they tend to work a lot with AEW they don't really have factions not compared to Njpw and Stardom",
    Dvid: "This is a guide to a live event talking about the wrestler and their storylines heading into a match.",
    Dvid2: "This gives a great job retelling the story of Maki Itoh one TJPW's most popular wrestlers",

    poster: "https://411mania.com/wp-content/uploads/2019/01/Joshi-Pro.jpg",
    link:"https://www.wrestle-universe.com/tjpw",
    poster2:"https://www.f4wonline.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwODI4MTM1ODA4MjQ3Mzc3/fxac6ubusae50we.jpg",
    vid:"https://www.youtube.com/embed/xGvvJtHfdyA",
    vid2:"https://www.youtube.com/embed/f5ZuITjMO14"

  },
  {
    Promotion: "Pro Wrestling NOAH",
    description: "Pro Wrestling NOAH is a Japanese professional wrestling promotion, founded in 2000 by former All Japan Pro Wrestling (AJPW) ace Mitsuharu Misawa after he had led a mass exodus in which 24 of AJPW's 26 contracted wrestlers left the promotion to form Noah. Consider to be one of the biggest Japanse wrestling companies behind NJPW",
    description2: "Pro-wrestling NOAH and Njpw had a joint event for charity, which excited fans since NJPW did not tend to collaborate in recent years",
    Dvid:"I could not find any videos about NOAH that I liked  but I did find a good match that I liked.",
    Dvid2: "This match had a lot of wrestling fans interested in NOAH since it was very unique, They give a rundown  on the match but be warned they use a lot of salty language so if you are not into that don't watch",

    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/NOAH2021.svg/1200px-NOAH2021.svg.png",
    link:"https://www.wrestle-universe.com/noah",
    poster2:"https://www.f4wonline.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTg2NDc1MjIwMjc2NzUwMDE5/imgnjpwnoahcardpng.png",
    vid:"https://www.youtube.com/embed/Z4Cd_daxh7g",
    vid2:"https://www.youtube.com/embed/soO5JlPhZwI"

  },
  {
    Promotion: "DDT Pro-Wrestling",
    description: "DDT Pro-Wrestling is a Japanese professional wrestling promotion based in Tokyo. Its name stands for Dramatic Dream Team, which was the promotion's official name from 1997 to 2004. Founded in March 1997 by Shintaro Muto, the promotion was eventually bought and managed in 2017, DDT was sold to CyberAgent. ",
    description2: "DDT became one of the top promotions in Japanese independent wrestling by creating a unique sports entertainment style, often parodying WWE. They also tend to work AEW, Konosuke Takeshita had a short run in aew which garnered him a lot of popularity",
    Dvid: "This video gives a guide to DDT their top stars how things are run there.",
    Dvid2:"A YouTuber based in Japan Trained for a day with wrestler watch and got to interview the top stars even the head of DDT",
    poster: "https://www.postwrestling.com/wp-content/uploads/2020/02/ogp.png",
    link:"https://www.wrestle-universe.com/ddt",
    poster2:"https://static.wixstatic.com/media/94b54e_1c211d98254345e996df2dfd6015f399~mv2.jpg/v1/fill/w_2304,h_1536,al_c,q_90/94b54e_1c211d98254345e996df2dfd6015f399~mv2.webp",
    vid:"https://www.youtube.com/embed/aEhfFHrodqg",
    vid2:"https://www.youtube.com/embed/OvjZd4ZuwRI"

  }
  


]









function displayCards(){
    let cards = initial_cards
    let cards_html = ''
    let ndx = 0
    for(let c of cards){
        cards_html += `
        
        <div class="card mb-3" data-ndx="${ndx}">
        <h5 class="card-title">${c.Promotion}</h5>
        <img src="${c.poster}" class="card-img-top" alt="${c.Promotion}">
        <p class="card-text">${c.description}</p>
        <img src="${c.poster2}" class="card-img-top">
        <p class="card-text">${c.description2}</p>
        <iframe width="480" height="360"" src="${c.vid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p class="card-text">${c.Dvid}</p>
        <iframe width="480" height="360" src="${c.vid2}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p class="card-text">${c.Dvid2}</p>
        <div class="card-body">
          
          <p class="card-text">TCheck out their website.</p>
          <a href="${c.link}" class="btn btn-primary">More Info</a>
        </div>
      </div>
      
  
  
        `
        ndx ++   
    }
    document.querySelector("#cards").innerHTML=cards_html
    
    
  }
  
  displayCards()