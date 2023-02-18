const rating = document.getElementById("rating");
const rangevalue = document.getElementById("r");

function displayRatingValue() {
  rating.innerHTML = rangevalue.value;
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);


// Confirm username submissions
const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
  if (kp1.value !== kp2.value) {
    message.textContent = "Key Phrases DO NOT MATCH!";
    message.style.display = "block";
    message.style.backgroundColor = "red";
    message.style.color = "white";
    kp2.style.backgroundColor = "red";
    kp2.style.color = "#fff";
    kp2.focus();
    kp2.value = "";
  } else {
    message.style.display = "none";
    kp2.style.backgroundColor = "#fff";
    kp2.style.color = "#000";
  }
}

//output table
let form = document.getElementById("formSubmission");

let table = document.getElementById('data');
form.addEventListener("submit", (e) => {
  e.preventDefault();
  submit();
})


const submit = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let rating = document.getElementById("r").value;
  let username = document.getElementById("keyphrase").value

  let newArray = [name, email, rating, username];
  newArray.forEach((item) => {
    var li = document.createElement("span");
    var text = document.createTextNode(item);
    li.appendChild(text);
    li.style.color = "blue";
    table.appendChild(li);
  })
  form.reset();
}
