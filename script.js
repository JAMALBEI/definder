const input = document.getElementsByClassName("input")[0];
const btn = document.getElementsByTagName("button")[0];
const h3 = document.getElementById("satauri");
const paragraph = document.getElementById("paragraph");
const join = document.getElementById("join");
const user_name = document.getElementById("saxeli");
const bio = document.getElementById("bio");
const repo = document.getElementById("Repos");
const repo_count = document.getElementById("repo_count");
const followers = document.getElementById("Followers");
const followers_count = document.getElementById("followers_count");
const following = document.getElementById("Following");
const following_count = document.getElementById("following_count");

btn.addEventListener("click", () => {
  let input_value = input.value;
  console.log(input_value);

  fetch(`https://api.github.com/users/${input.value}`)
    .then((Bruh) => Bruh.json())
    .then((data) => {
        user_name.innerText = data.name
        bio.innerText = data.bio;
        // repo.innerText = 
        repo_count.innerText = data.
        followers.innerText = data.
        followers_count.innerText = data.
        following.innerText = data.
        following_count.innerText = data.
      console.log(data);
    });
});
