document.getElementById("get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  e.preventDefault();
  const numJokes = document.getElementById("num-jokes").value;
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://api.icndb.com/jokes/random/${numJokes}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
    }
  };
  xhr.send();
}
