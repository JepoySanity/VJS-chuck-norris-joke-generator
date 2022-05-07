document.getElementById("get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  e.preventDefault();
  const numJokes = document.getElementById("num-jokes").value;
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://api.icndb.com/jokes/random/${numJokes}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      //check for api response type
      if (response.type === "success") {
        let output = "";
        response.value.forEach(function (joke) {
          output += `
          <div class="card mb-2">
            <div class="card-header">
              <h6>JOKE #${joke.id}</h6>
            </div>
            <div class="card-body">
              <h6>
                ${joke.joke}
              </h6>
            </div>
          </div>
          `;
        });
        document.getElementById("jokes").innerHTML = output;
        console.log(output);
      } else {
        console.log("something went wrong");
      }
    }
  };
  xhr.send();
}
