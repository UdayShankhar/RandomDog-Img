document.body.innerHTML=` <div class="results">
       <div id="dog_result" class="result">
       <p>Random Dog Placeholder</p>
    </div>
   </div>
   <div class="buttons">
   <button id="dog_btn" type="button" onclick="getData()" >Get Dog</button></div>`

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
