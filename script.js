
const dog_result = document.getElementById("dog_result")
const dog_btn = document.getElementById("dog_btn")

dog_btn.addEventListener("click",getData)

function getData() {
  const url = "https://random.dog/woof.json";
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
    dog_result.innerHTML = `<img src="${data.url}" alt="Press Again">`
  });
}
getData()