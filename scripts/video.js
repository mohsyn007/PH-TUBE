console.log("video scripts added");
// 1. Fetch ,load and catagories on html
//create load catagories
const loadCategories = () => {
    
    // fetch data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories))
    .catch((error)=>console.log(error))


}

loadCategories();
//create display catagories
const displayCategories = () => {
    console.log("categories create");

}
