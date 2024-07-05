let URL = "https://cat-fact.herokuapp.com/facts";
let factspara = document.querySelector(".facts");
let btn = document.querySelector(".btn");
console.log("Facts: ", factspara);


if (factspara.innerHTML.trim() === '') {
    factspara.style.display = "none";
  }


const getFacts = async () => {
    console.log("Fetching facts...");
    let response = await fetch(URL);
    console.log("Response: ", response.status);
    let data = await response.json();
    console.log("Data: ", data[0].text);
    let idx = Math.floor(Math.random() * data.length);
    factspara.innerText = data[idx].text;
    factspara.style.display = "block";
}

btn.addEventListener("click", getFacts);