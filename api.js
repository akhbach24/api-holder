let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.responseType = "json";
request.send();
request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    let users = request.response;
    document.querySelector(".users").innerHTML = "";

    for (user of users) {
      let users = `<div class="user">
               <h3 id="name">${user.name}</3>
               <h5 id="email">${user.email}</h5>
             </div>`;

      document.querySelector(".users").innerHTML += users;
    }
  }
};

let request1 = new XMLHttpRequest();
request1.open("GET", "https://jsonplaceholder.typicode.com/posts");
request1.responseType = "json";
request1.send();
request1.onload = function () {
  if (request1.status >= 200 && request1.status < 400) {
    let posts = request1.response;
    document.querySelector(".posts").innerHTML = "";

    for (post of posts) {
      let posts = `<div class="post">
               <h3 id="title1">${post.title}</h3>   
               <h6 id="description">${post.body}</h6>
             </div>`;

      document.querySelector(".posts").innerHTML += posts;
    }
  }
};
