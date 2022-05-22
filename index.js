let category = "science";
let APIKEY = "f6a0a140a28f481bbd74adc0359102f1";
let newsrow3 = document.getElementById("newsrow2");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;

    let newsrow2 = "";

    articles.forEach(function (element) {
      let news2 = `<div class="lg:w-1/3 md:w-1/2 w-full p-4">
            <div class="p-8 rounded-xl shadow cw"><img class="mb-4 shadow-md mx-auto h-auto w-full" alt="Image not found" src="${element["urlToImage"]}">
                <h4 class="mb-2 text-lg font-semibold"> ${element["title"]} </h4>
                <p class="text-base"> ${element["content"]}</p>
                <div class="d-flex justify-content-between install mt-3"><span>${element["author"]}</span><span class="text-primary"><a href="${element["url"]}" target="_blank" >Read More</a> &nbsp;<i class="fa fa-angle-right"></i></span></div>
            </div>
        </div>`;
      newsrow2 += news2;
    });
    newsrow3.innerHTML = newsrow2;
  } else {
    console.log("Some error occured");
  }
};
xhr.send();
