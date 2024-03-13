let data_array = [
  {
    hero: "Spiderman",
    name: "Peter Benjamin Parker",
    src: "images/spdmaninterior.png",
    desc: "Spider-Man, alter ego of Peter Parker, is a masked superhero known for his agility, quick wit, and web-slinging prowess, dedicated to protecting the streets of New York City from crime and injustice.",
    superpowers:
      "Superhuman agility, strength, and reflexes, Ability to cling to walls and surfaces, Spider-sense - an extrasensory ability that warns him of impending danger.",
  },
  {
    hero: "Captain Marvel",
    name: "Carol Danvers",
    src: "images/cptmarvel.png",
    desc: "Captain Marvel, also known as Carol Danvers, is a powerful superhero with cosmic abilities derived from her connection to the Kree alien race.",
    superpowers:
      "Superhuman strength, durability, agility, Flight at supersonic speeds, Energy projection and absorption, Photonic blasts from her hands.",
  },
  {
    hero: "HULK",
    name: "Robert Bruce Banner",
    desc: "Hulk, alter ego of Bruce Banner, is a colossal green-skinned superhero known for his immense strength and uncontrollable rage.",
    superpowers:
      "Superhuman strength, increasing with anger, Near-invulnerability due to his highly durable skin and rapid healing factor.",
  },
  {
    hero: "Black Widow",
    name: "Natalia 'Natasha' Alianovna Romanova",
    src: "images/blkwidow.png",
    desc: "Black Widow, also known as Natasha Romanoff, is a skilled and deadly spy and assassin, known for her expertise in hand-to-hand combat and espionage.",
    superpowers:
      "Master martial artist and hand-to-hand combatant, Exceptional agility, reflexes, and marksmanship.",
  },
  {
    hero: "Captain America",
    name: "Steven Rogers",
    src: "images/cptamerica.png",
    desc: "Captain America, also known as Steve Rogers, is a symbol of heroism and patriotism, wielding his iconic shield as he fights for justice and freedom.",
    superpowers:
      "Peak human physical condition due to the Super-Soldier Serum, Master tactician and strategist, proficient in hand-to-hand combat and shield throwing.",
  },
  {
    hero: "Iron Man",
    name: "Anthony Edward 'Tony' Stark",
    src: "images/ironmaninterior.png",
    desc: "Iron Man, also known as Tony Stark, is a brilliant inventor and billionaire playboy who dons a high-tech suit of armor to fight against threats to humanity.",
    superpowers:
      "Powered armored suit granting flight, enhanced strength, durability, Equipped with an array of advanced weapons and gadgets, including repulsor blasts and missiles.",
  },
  {
    hero: "Thor",
    name: "Thor Odinson",
    desc: "Thor, the God of Thunder and prince of Asgard, wields the mighty hammer Mjolnir and protects the realms from cosmic threats.",
    superpowers:
      "Superhuman strength, endurance, longevity, Mastery over lightning and weather manipulation, and the ability to fly with Mjolnir.",
  },
];

let movies_info_array = [
  {
    src: "movies/(1.1) Iron_Man 2008.jpg",
    link: "https://www.primevideo.com/detail/amzn1.dv.gti.beba3846-32a0-e21e-f56d-b8879a4073f2",
    name: "Iron Man",
    "movie name": "Iron_Man 2008",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(1.2) The Incredible Hulk (2008).jpg",
    link: "https://www.primevideo.com/detail/amzn1.dv.gti.c2b41cbb-ccb9-4bec-91a3-68c79fb87156",
    name: "Hulk",
    "movie name": "The Incredible Hulk (2008)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(1.3) Iron Man 2 (2010).jpg",
    link: "https://www.primevideo.com/detail/amzn1.dv.gti.b8ba2add-c034-64ee-93a7-873e33f163b2",
    name: "Iron Man",
    "movie name": "Iron Man 2 (2010)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(1.4) Thor (2011).jpg",
    link: "https://www.primevideo.com/detail/amzn1.dv.gti.1eb82f72-612c-6922-9754-f86d0dacc986",
    name: "Thor",
    "movie name": "Thor (2011)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(1.5) Captain America_The First Avenger (2011).jpg",
    link: "https://www.primevideo.com/detail/amzn1.dv.gti.54ba2afc-b5cb-240c-b7cd-905d4ac1daf2",
    name: "Captain America",
    "movie name": "Captain America_The First Avenger (2011)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(1.6) The Avengers (2012).jpg",
    link: "https://www.primevideo.com/detail/amzn1.dv.gti.36b83cba-cf6f-6299-298a-2360e7c6a31a",
    name: "Iron Man, Hulk, Thor, Captain America, Black Widow, Hawkeye",
    "movie name": "The Avengers (2012)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(2.1) Iron Man 3 (2013).jpg",
    link: "https://www.hotstar.com/in/movies/iron-man-3/1660000042",
    name: "Iron Man",
    "movie name": "Iron Man 3 (2013)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(2.2) Thor_The Dark World (2013).jpg",
    link: "https://www.primevideo.com/detail/amzn1.dv.gti.64ba2be1-b4cb-c69c-bb25-2e50cecdbe5b",
    name: "Thor",
    "movie name": "Thor_The Dark World (2013)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(2.3) Captain America_The Winter Soldier (2014).jpg",
    link: "https://www.primevideo.com/detail/amzn1.dv.gti.94ba2a94-5239-67ef-fcfd-970babc1fdbf",
    name: "Captain America, Black Widow",
    "movie name": "Captain America_The Winter Soldier (2014)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(2.4) Guardians of the Galaxy (2014).jpg",
    link: "https://www.hotstar.com/in/movies/marvels-avengers-age-of-ultron/1260018315",
    name: "NaN",
    "movie name": "Guardians of the Galaxy (2014)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(2.5) Avengers_Age of Ultron (2015).jpg",
    link: "https://www.hotstar.com/in/movies/ant-man/1260018141",
    name: "Captain America, Iron Man, Thor, Hulk, Black Widow, Hawkeye, Silver, Scarlet Witch",
    "movie name": "Avengers_Age of Ultron (2015)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(2.6) Ant-Man (2015).jpg",
    link: "https://www.hotstar.com/in/movies/captain-america-civil-war/1260016768",
    name: "Ant Man",
    "movie name": "Ant-Man (2015)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(3.1).jpg",
    link: "https://www.hotstar.com/in/movies/captain-america-civil-war/1260016768",
    name: "Captain America, Iron Man, Black Widow, Hawkeye, Scarlet Witch, SpiderMan",
    "movie name": "Captain America_Civil War (2016)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(3.2).jpg",
    link: "https://www.hotstar.com/in/movies/doctor-strange/1260018179",
    name: "Doctor Strange",
    "movie name": "Doctor Strange (2016)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(3.3).jpg",
    link: "https://www.hotstar.com/in/movies/guardians-of-the-galaxy-vol-2/1260018295",
    name: "NAN",
    "movie name": "Guardians of the Galaxy 2 (2017)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(3.4).jpg",
    link: "https://www.primevideo.com/detail/amzn1.dv.gti.1ffec8c6-cf45-4b9c-b5f2-c7b924726c47",
    name: "SpiderMan, Iron Man",
    "movie name": "Spider-Man: Homecoming (2017)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(3.5).jpg",
    link: "https://www.hotstar.com/in/movies/thor-ragnarok/1660010577",
    name: "Thor ,Hulk",
    "movie name": "Thor: Ragnarok (2017)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(3.6).jpg",
    link: "https://www.hotstar.com/in/movies/black-panther/1660010672",
    name: "Black Panther",
    "movie name": "Black Panther (2017)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(3.7).jpg",
    link: "https://www.hotstar.com/in/movies/avengers-infinity-war/1660010677",
    name: "SpiderMan,hulk,Black Widow,Thor,Captain America,Iron Man, Scarlet Witch, Dr. Strange",
    "movie name": "Avengers: Infinity War (2018)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(3.8).jpg",
    link: "https://www.hotstar.com/in/movies/ant-man-and-the-wasp/1660010696",
    name: "Ant Man",
    "movie name": "Ant-Man and the Wasp (2018)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(3.9).jpg",
    link: "https://www.hotstar.com/in/movies/captain-marvel/1260014878",
    name: "Captain Marvel",
    "movie name": "Captain Marvel (2019)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(3.10).jpg",
    link: "https://www.hotstar.com/in/movies/avengers-endgame/1260013556",
    name: "ALL",
    "movie name": "Avengers: Endgame (2019)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
  {
    src: "movies/(3.11).jpg",
    link: "https://www.primevideo.com/detail/amzn1.dv.gti.e4b85f95-60b7-b172-232b-3a7f3ffd78c4",
    name: "SpiderMan",
    "movie name": "Spider-Man: Far From Home (2019)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi!",
  },
];

let movies = document.getElementsByClassName("movies")[0];

function display_movie(tosearch) {
  let toshowHtml = "";
  // Clear previous content
  movies.innerHTML = "";
  movies_info_array.forEach(function (value) {
    // Check if the name property exists and contains the search term
    if (
      value.name != null &&
      value.name.toLowerCase().includes(tosearch.toLowerCase())
    ) {
      toshowHtml += 
      // `<div class="mymovie">
      //       <div class="before_hover">
      //       <a href="${value.link}">
      //       <div class="movieimg">
      //           <img src="${value.src}" alt="">
      //       </div>
      //       <div class="moviename">
      //           <p id="year"> Cast - ${value.name}</p>
      //       </div>
      //       </a>
      //   </div>
      //   <div class="after_hover">
      //       <p>${value.desc}</p>
      //   </div>
      //   </div>`;


        `<div class="card">
        <a href="${value.link}">
        <div class="card-inner">
            <div class="card-front">
                <img id="myimage" src="${value.src}" alt="">
                <p id="para">Cast - ${value.name}</p>
            </div>
            <div class="card-back">
                <p>${value.desc}</p>
            </div>
        </div>
      </a>
    </div>`
    }
  });
  movies.innerHTML = toshowHtml;
}

let heroImage = document.getElementById("image_hero");
let heroname = document.getElementById("imagename");
let heroRealName = document.getElementById("herorealname");
let heroSuperpower = document.getElementById("heroSuperpower");
let herodesc = document.getElementById("herodesc");
let cont = document.getElementsByClassName("cont")[0];
let searchherobtn = document.getElementById("searchherobtn");
let searchhero = document.getElementById("searchhero");

function display_info(tosearch) {
  data_array.forEach(function (value) {
    if (value.hero.toLowerCase() == tosearch.toLowerCase()) {
      cont.innerHTML =
       `<div class="left">
            <div class="image">
                <img  id="backgrd" src="images/background.png" alt="">
                <img id="frontimage" src=${value.src} alt="">
            </div>
            <div class="bot">
                <p>${value.name}   ---    ${value.hero}</p>
                <p>bot</p>
                <p>bot image</p>
            </div>
        </div>

        <div class="right">
            <div class="super">${value.superpowers}
            </div>
            <div class="desc">${value.desc}
            </div>
        </div>`;

        
    }
  });
}

searchherobtn.addEventListener("click", function () {
  let tosearch = searchhero.value;
  if (tosearch == "") {
    display_info(data_array[0].hero);
    display_movie(data_array[0].hero);
  } else {
    display_info(tosearch);
    display_movie(tosearch);
  }
});

display_info(data_array[0].hero);
display_movie(data_array[0].hero);
