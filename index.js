sub = document.getElementById("submit");
inp = document.getElementById("input");
out = document.getElementById("output");
var text;
var lat, lon;
var msg;
var voices;

apikey = "309fbf4d24ee6e2250d2b188c4f7983a";

let data;

window.setTimeout(function () {
  var time = new Date().getHours();
  resp =
    "Good " + (time < 12 ? "Morning" : time < 18 ? "Afternoon" : "Evening");

  user = prompt("Hi user What Should I call You..?");
  // resp = ` ${user}! `;
  inp = document.getElementById("input").value;
  d = new Date();
  msg = document.createElement("div");
  msg.classList.add("container");
  msg.innerHTML = `
         <img src="bot2.webp" alt="Avatar" style="width:100%;">
         <p>${resp} ${user}</p>
         <span class="time-right">${d.getHours() + ":" + d.getMinutes()}</span>
         `;
  document.getElementById("messages").appendChild(msg);
  out = document.getElementById("output");
  out.innerHTML = `${resp}   ${user}`;

  var lag = setInterval(function () {
    voices = speechSynthesis.getVoices();

    if (voices.length !== 0) {
      msg = new SpeechSynthesisUtterance();
      msg.voice = voices[4];
      console.log(voices);
      msg.lang = "en-US";
      speechSynthesis.speak(msg);
      clearInterval(lag);
      msg.text = resp + user;
      speechSynthesis.speak(msg);
    }
  }, 200);
  lag;
}, 2000);

input = document.getElementById("input");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (input.value == null || input.value == "") {
      alert("Enter some Text");
    } else {
      usermsg();
      setTimeout(clear, 1000);
    }
  }
});
function clear() {
  input.value = " ";
}

function usermsg() {
  inp = document.getElementById("input").value;
  d = new Date();
  msg = document.createElement("div");
  msg.classList.add("darker");
  msg.classList.add("container");
  msg.innerHTML = `
         <img src="user.jpg" alt="Avatar" class="right" style="width:100%;">
         <p>${inp}</p>
         <span class="time-left">${d.getHours() + ":" + d.getMinutes()}</span>
    `;
  setTimeout(response, 1000);
  document.getElementById("messages").appendChild(msg);
  console.log("done");
}

function response() {
  resp = "How can i help u?";
  inp = document.getElementById("input").value.toLowerCase();
  d = new Date();
  msg = document.createElement("div");
  msg.classList.add("container");
  msg.innerHTML = `
         <img src="bot2.webp" alt="Avatar" style="width:100%;">
         <p>${resp}</p>
         <span class="time-left">${d.getHours() + ":" + d.getMinutes()}</span>
    `;
  document.getElementById("messages").appendChild(msg);
  out = document.getElementById("output");

  out.innerHTML = resp;

  console.log(inp);

  if (
    inp.includes("hi") ||
    inp.includes("hii") ||
    inp.includes("hello") ||
    inp.includes("hey")
  ) {
    resp = `Hi ${user}! How can I help you..?`;
    msg.innerHTML = `
         <img src="bot2.webp" alt="Avatar" style="width:100%;">
         <p>${resp}</p>
         <span class="time-left">${d.getHours() + ":" + d.getMinutes()}</span>
         `;
    out.innerHTML = resp;
    speak();
  } else if (inp.includes("who are you")) {
    resp = "I am ASUNA.. the AI bot";
    msg.innerHTML = `
         <img src="bot2.webp" alt="Avatar" style="width:100%;">
         <p>${resp}</p>
         <span class="time-left">${d.getHours() + ":" + d.getMinutes()}</span>
    `;
    speak();
  } else if (inp.includes("time")) {
    resp = "The Time is : ";
    abc = `${d.getHours() + ":" + d.getMinutes()};`;
    msg.innerHTML = `
         <img src="bot2.webp" alt="Avatar" style="width:100%;">
         <p>${resp}  ${abc} </p>
         <span class="time-left">${abc}</span>
    `;
    speak();
  } else if (inp.includes("date")) {
    resp = "sorry i have a headache";
    msg.innerHTML = `
         <img src="bot2.webp" alt="Avatar" style="width:100%;">
         <p>${resp}</p>
         <span class="time-left">${d.getHours() + ":" + d.getMinutes()}</span>
    `;
    speak();
  } else if (inp.includes("joke")) {
    jokes();
  } else if (inp.includes("are u single")) {
    resp = "I am in relationship with my wifi";
    msg.innerHTML = `
         <img src="bot2.webp" alt="Avatar" style="width:100%;">
         <p>${resp}</p>
         <span class="time-left">${d.getHours() + ":" + d.getMinutes()}</span>
    `;
    speak();
    // } else if (inp.includes("weather")) {
    //   getdata();
    //   inp.value = " ";
  } else if (inp.includes("bye")) {
    resp = `Bye ${user}.. Have a Good Day !!`;
    msg.innerHTML = `
         <img src="bot2.webp" alt="Avatar" style="width:100%;">
         <p>${resp}</p>
         <span class="time-left">${d.getHours() + ":" + d.getMinutes()}</span>
    `;
    speak();
  } else if (inp.includes("play")) {
    Name = document.getElementById("input").value;
    Name = Name.slice(5, Name.length);
    resp = `playing ${Name} on youtube`;
    msg.innerHTML = `
         <img src="bot2.webp" alt="Avatar" style="width:100%;">
         <p>${resp}</p>
         <span class="time-left">${d.getHours() + ":" + d.getMinutes()}</span>
    `;
    speak();
    location.assign("https://www.youtube.com/results?search_query=" + Name);
  } else if (inp.includes("who") || "where" || "what") {
    search();
  } else {
    resp = "I don't get it can You repeat again ";
    msg.innerHTML = `
         <img src="bot2.webp" alt="Avatar" style="width:100%;">
         <p>${resp}</p>
         <span class="time-left">${d.getHours() + ":" + d.getMinutes()}</span>
    `;
    out.innerHTML = resp;
    speak();
  }
}

async function jokes() {
  respdata = await fetch(`https://v2.jokeapi.dev/joke/Any?type=single`);
  data = await respdata.json();
  resp = data.joke;
  msg.innerHTML = `
         <img src="bot2.webp" alt="Avatar" style="width:100%;">
         <p>${resp}</p>
         <span class="time-left">${d.getHours() + ":" + d.getMinutes()}</span>
    `;
  speak();
}
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }
// function showPosition(position) {
//   // x.innerHTML = "Latitude: " + position.coords.latitude +
//   // "<br>Longitude: " + position.coords.longitude;
//   lat = position.coords.latitude;
//   lon = position.coords.longitude;

//   lat = lat;
//   lon = lon;

//   getdata();
// }
// getLocation();

// async function getdata() {
//   let response2 = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?&lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
//   );
//   data = await response2.json();
//   resp = `Today's weather of City : ${data.name} is  ${data.main.temp}°C`;
//   msg = document.createElement("div");
//   msg.classList.add("container");
//   d = new Date();
//   msg.innerHTML = `
//          <img src="bot2.webp" alt="Avatar" style="width:100%;">
//          <p>${resp}</p>
//          <span class="time-left">${d.getHours() + ":" + d.getMinutes()}</span>
//     `;

//   // lag;
// }

// location.assign("https://www.youtube.com/results?search_query=" + name);

function speak() {
  var lag = setInterval(function () {
    voices = speechSynthesis.getVoices();

    if (voices.length !== 0) {
      msg = new SpeechSynthesisUtterance();
      msg.voice = voices[4];
      msg.lang = "en-US";
      speechSynthesis.speak(msg);
      clearInterval(lag);
      msg.text = resp;
      speechSynthesis.speak(msg);
    }
  }, 200);
  lag;
  console.log("speakingggg");
}

function search() {
  searchTerm = $("#input").val();
  // searchTerm = "python";
  let surl =
    "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=1&gsrsearch=" +
    searchTerm;
  $.ajax({
    url: surl,
    header: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    method: "GET",
    dataType: "jsonp",
    data: "",
    success: function (data) {
      console.log(data.query.pages);
      dataNum = Object.keys(data.query.pages)[0];
      // $("#resultArea").empty();
      // let newTitle =
      //   '<h1 class="alert alert-info text-center"><strong>' +
      //   data.query.pages[dataNum].title +
      //   "</strong></h1>";
      // $("#resultArea").html(
      //   `${newTitle}<div>${data.query.pages[dataNum].extract}</div>`
      // );
      resp = `${data.query.pages[dataNum].extract.slice(0, 100)}`;
      resp.replace(/<[^>]*>?/gm, "");
      msg.innerHTML = `
           <img src="bot2.webp" alt="Avatar" style="width:100%;">
           <p>${resp}</p>
           <span class="time-left"></span>
      `;
      speak();
      console.log(data);
    },
  });
}
// search();
