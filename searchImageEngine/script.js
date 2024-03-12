const accesskey="tH6Ib5lI7CqE9kX5uRWuNR3yVyHPplF0ghqT22Ugilk";
const search=document.getElementById("search")
const searchBox=document.getElementById("searchbox")
const searchresult=document.getElementById("search-result")
const showmore=document.getElementById("showmore")

 
let keyword=""
let page=1;
async function searchImages(){
    keyword=searchBox.value;
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`

    const response=await fetch(url)
    const data=await response.json();

  const results=data.results;
  if(page===1){
    searchresult.innerHTML=" "
  }
  results.map((result)=>{
    const image=document.createElement("img")
    image.src=result.urls.small;
    const imagelink=document.createElement("a")
    imagelink.href=result.links.html;
    imagelink.target="_blank"
    imagelink.appendChild(image)
    searchresult.appendChild(imagelink)
  })
  showmore.style.display="block"
}
search.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})
showmore.addEventListener("click",()=>{
    page++;
    searchImages()
})