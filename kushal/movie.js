let movies_info_array = [
    {
        src: "movies/(1.1) Iron_Man 2008.jpg",
        link: "https://www.primevideo.com/detail/amzn1.dv.gti.beba3846-32a0-e21e-f56d-b8879a4073f2",
        name: "Iron Man",
        "movie name": "Iron_Man 2008",
        desc: "After surviving an unexpected attack in enemy territory, jet-setting industrialist Tony Stark builds a high-tech suit of armor and vows to protect the world as Iron Man.",
    },
    {
        src: "movies/(1.2) The Incredible Hulk (2008).jpg",
        link: "https://www.primevideo.com/detail/amzn1.dv.gti.c2b41cbb-ccb9-4bec-91a3-68c79fb87156",
        name: "Hulk",
        "movie name": "The Incredible Hulk (2008)",
        desc: "Edward Norton leads an all-star cast in this explosive, special effects-packed epic that delivers a mind-blowing final showdown that can only be summed up with one word...INCREDIBLE!",
    },
    {
        src: "movies/(1.3) Iron Man 2 (2010).jpg",
        link: "https://www.primevideo.com/detail/amzn1.dv.gti.b8ba2add-c034-64ee-93a7-873e33f163b2",
        name: "Iron Man",
        "movie name": "Iron Man 2 (2010)",
        desc: "In the follow-up, Stark is pitted against his Russian arch nemesis, Whiplash (Mickey Rourke), and corporate rival Justin Hammer (Sam Rockwell).",
    },
    {
        src: "movies/(1.4) Thor (2011).jpg",
        link: "https://www.primevideo.com/detail/amzn1.dv.gti.1eb82f72-612c-6922-9754-f86d0dacc986",
        name: "Thor",
        "movie name": "Thor (2011)",
        desc: "The powerful but arrogant warrior Thor is cast out of the fantastic realm of Asgard and sent to live amongst humans on Earth, where he soon becomes one of their finest defenders.",
    },
    {
        src: "movies/(1.5) Captain America_The First Avenger (2011).jpg",
        link: "https://www.primevideo.com/detail/amzn1.dv.gti.54ba2afc-b5cb-240c-b7cd-905d4ac1daf2",
        name: "Captain America",
        "movie name": "Captain America_The First Avenger (2011)",
        desc: "After being deemed unfit for military service, Steve Rogers volunteers for a top secret research project that turns him into Captain America.",
    },
    {
        src: "movies/(1.6) The Avengers (2012).jpg",
        link: "https://www.primevideo.com/detail/amzn1.dv.gti.36b83cba-cf6f-6299-298a-2360e7c6a31a",
        name: "Iron Man, Hulk, Thor, Captain America, Black Widow, Hawkeye",
        "movie name": "The Avengers (2012)",
        desc: "Marvel makes cinematic history as the Super Hero team of a lifetime assemble for the first time ever in this action-packed blockbuster! Packed with spectacular visual effects, Marvel's The Avengers will blow your mind!",
    },
    {
        src: "movies/(2.1) Iron Man 3 (2013).jpg",
        link: "https://www.hotstar.com/in/movies/iron-man-3/1660000042",
        name: "Iron Man",
        "movie name": "Iron Man 3 (2013)",
        desc: "Tony Stark encounters a formidable foe called the Mandarin, and after failing to him, he embarks on a journey with relentless consequences.",
    },
    {
        src: "movies/(2.2) Thor_The Dark World (2013).jpg",
        link: "https://www.primevideo.com/detail/amzn1.dv.gti.64ba2be1-b4cb-c69c-bb25-2e50cecdbe5b",
        name: "Thor",
        "movie name": "Thor_The Dark World (2013)",
        desc: "In the aftermath of Marvels Thor and Marvel The Avengers, Thor fights to restore order across the cosmos...but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness.",
    },
    {
        src: "movies/(2.3) Captain America_The Winter Soldier (2014).jpg",
        link: "https://www.primevideo.com/detail/amzn1.dv.gti.94ba2a94-5239-67ef-fcfd-970babc1fdbf",
        name: "Captain America, Black Widow",
        "movie name": "Captain America_The Winter Soldier (2014)",
        desc: "In Marvel's Captain America: The Winter Soldier, Steve Rogers (Chris Evans) teams up with Natasha Romanoff (Scarlett Johansson), aka Black Widow, to battle a powerful yet shadowy enemy in present-day Washington, D.C.",
    },
    {
        src: "movies/(2.4) Guardians of the Galaxy (2014).jpg",
        link: "https://www.hotstar.com/in/movies/marvels-avengers-age-of-ultron/1260018315",
        name: "NaN",
        "movie name": "Guardians of the Galaxy (2014)",
        desc: "A man must unite a team of aliens against a cosmic threat.",
    },
    {
        src: "movies/(2.5) Avengers_Age of Ultron (2015).jpg",
        link: "https://www.hotstar.com/in/movies/ant-man/1260018141",
        name: "Captain America, Iron Man, Thor, Hulk, Black Widow, Hawkeye, Silver, Scarlet Witch",
        "movie name": "Avengers_Age of Ultron (2015)",
        desc: "Tony Stark builds an AI system named Ultron, and when things go wrong, it's up to Earth's mightiest heroes to stop the villain from enacting his terrible plan.",
    },
    {
        src: "movies/(2.6) Ant-Man (2015).jpg",
        link: "https://www.hotstar.com/in/movies/captain-america-civil-war/1260016768",
        name: "Ant Man",
        "movie name": "Ant-Man (2015)",
        desc: "Cat burglar Scott Lang must embrace his inner-hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
    },
    {
        src: "movies/(3.1).jpg",
        link: "https://www.hotstar.com/in/movies/captain-america-civil-war/1260016768",
        name: "Captain America, Iron Man, Black Widow, Hawkeye, Scarlet Witch, SpiderMan",
        "movie name": "Captain America_Civil War (2016)",
        desc: "The government's decision to push a Hero Registration Act to regulate heroes creates a rift among the Avengers and other heroes.",
    },
    {
        src: "movies/(3.2).jpg",
        link: "https://www.hotstar.com/in/movies/doctor-strange/1260018179",
        name: "Doctor Strange",
        "movie name": "Doctor Strange (2016)",
        desc: "Dr. Strange faces a difficult choice of whether to return to his life of luxury or to protect the world as the most powerful sorcerer in existence.",
    },
    {
        src: "movies/(3.3).jpg",
        link: "https://www.hotstar.com/in/movies/guardians-of-the-galaxy-vol-2/1260018295",
        name: "NAN",
        "movie name": "Guardians of the Galaxy 2 (2017)",
        desc: "The Sovereign attacks the Guardians when Rocket steals the batteries. Peter's father rescues the Guardians, and they set out to discover Peter's true parentage.",
    },
    {
        src: "movies/(3.4).jpg",
        link: "https://www.primevideo.com/detail/amzn1.dv.gti.1ffec8c6-cf45-4b9c-b5f2-c7b924726c47",
        name: "SpiderMan, Iron Man",
        "movie name": "Spider-Man: Homecoming (2017)",
        desc: "Peter Parker tries to live his life as a high school student while fighting the Vulture.",
    },
    {
        src: "movies/(3.5).jpg",
        link: "https://www.hotstar.com/in/movies/thor-ragnarok/1660010577",
        name: "Thor ,Hulk",
        "movie name": "Thor: Ragnarok (2017)",
        desc: "Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.",
    },
    {
        src: "movies/(3.6).jpg",
        link: "https://www.hotstar.com/in/movies/black-panther/1660010672",
        name: "Black Panther",
        "movie name": "Black Panther (2017)",
        desc: "T'Challa, heir to the hidden kingdom of Wakanda, must lead his people into a new future and confront a challenger from his country's past.",
    },
    {
        src: "movies/(3.7).jpg",
        link: "https://www.hotstar.com/in/movies/avengers-infinity-war/1660010677",
        name: "SpiderMan,hulk,Black Widow,Thor,Captain America,Iron Man, Scarlet Witch, Dr. Strange",
        "movie name": "Avengers: Infinity War (2018)",
        desc: "With the powerful Thanos on the verge of raining destruction upon the universe, the Avengers will have to risk everything to stop him.",
    },
    {
        src: "movies/(3.8).jpg",
        link: "https://www.hotstar.com/in/movies/ant-man-and-the-wasp/1660010696",
        name: "Ant Man",
        "movie name": "Ant-Man and the Wasp (2018)",
        desc: "Accompanied by Hope van Dyne and Dr. Hank Pym, Scott Lang must once again don the Ant-Man suit and fight alongside the Wasp.",
    },
    {
        src: "movies/(3.9).jpg",
        link: "https://www.hotstar.com/in/movies/captain-marvel/1260014878",
        name: "Captain Marvel",
        "movie name": "Captain Marvel (2019)",
        desc: "Carol Danvers becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
    },
    {
        src: "movies/(3.10).jpg",
        link: "https://www.hotstar.com/in/movies/avengers-endgame/1260013556",
        name: "ALL",
        "movie name": "Avengers: Endgame (2019)",
        desc: "After the devastating events of the Infinity War, the Avengers assemble once more to reverse Thano's actions and restore balance to the universe.",
    },
    {
        src: "movies/(3.11).jpg",
        link: "https://www.primevideo.com/detail/amzn1.dv.gti.e4b85f95-60b7-b172-232b-3a7f3ffd78c4",
        name: "SpiderMan",
        "movie name": "Spider-Man: Far From Home (2019)",
        desc: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
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
            value.name.toLowerCase().includes(tosearch.toLowerCase())
        ) {
            toshowHtml +=
                `<div class="card">
                <i class="heart bi bi-heart-fill" onclick="changecolor(this)"></i>
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
function changecolor(ele){
    ele.style.color = ele.style.color==="red"?ele.style.color="white":"red";
}

let searchhero = document.getElementById("searchhero");
let searchherobtn = document.getElementById("searchherobtn");

searchhero.addEventListener('input', function () {
    let tosearch = searchhero.value;
    if (tosearch == "") {
        display_movie('');
    } else {
        display_movie(tosearch);
    }
});
searchhero.addEventListener('keydown', function () {
    if(event.keyCode === 13){
    let tosearch = searchhero.value;
    if (tosearch == "") {
        display_movie('');
    } else {
        display_movie(tosearch);
    }}
    searchhero.value="";
});


display_movie('');

