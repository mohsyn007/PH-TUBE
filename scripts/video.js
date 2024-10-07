console.log("video scripts added");
// 1. Fetch ,load and catagories on html
//create load catagories
const loadCategories = () => {

    // fetch data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch((error) => console.log(error))


}
const loadVideos = () => {

    // fetch data
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch((error) => console.log(error))


};
const cardDemo=
    {
        "category_id": "1001",
        "video_id": "aaah",
        "thumbnail": "https://i.ibb.co/hY496Db/coloer-of-the-wind.jpg",
        "title": "Colors of the Wind",
        "authors": [
            {
                "profile_picture": "https://i.ibb.co/6r4cx4P/ethen-clack.png",
                "profile_name": "Ethan Clark",
                "verified": true
            }
        ],
        "others": {
            "views": "233K",
            "posted_date": "16090"
        },
        "description": "Ethan Clark's 'Colors of the Wind' is a vibrant musical exploration that captivates listeners with its rich, expressive melodies and uplifting rhythm. With 233K views, this song is a celebration of nature's beauty and human connection, offering a soothing and enriching experience for fans of heartfelt, nature-inspired music."
    }


displayVideos = (videos) => {
    
    const videoContainer = document.getElementById("videos");
    videos.forEach((video) => {
        console.log(video);
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML =
            `
         <figure>
    <img
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>`;
        videoContainer.append(card);
    });


}

// {category_id: '1001', category: 'Music'}
// category
// : 
// "Music"
// category_id
// : 
// "1001"


//create display catagories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");
    categories.forEach((item) => {
        console.log(item);
        // create button
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;
        // add button to category container
        categoryContainer.append(button);
    })

}
loadCategories();
loadVideos();
