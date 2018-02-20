
var btn = document.querySelector("#btn");
var userImageDisplay = document.querySelector("#userImage");
var fullNameDisplay = document.querySelector("#fullname");
var userNameDisplay = document.querySelector("#username");
var emailDisplay = document.querySelector(".email");
var cityDisplay = document.querySelector(".city");

btn.addEventListener("click",function() {
    var url = "https://randomuser.me/api";
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError);
});
function handleErrors(res) {
    if(!res.ok) {
        throw Error(res.status);
    }
    return res;
}

function parseJSON(res) {
    return res.json()
    .then(function(parsedData) {
        return parsedData.results[0];
    });
}

function updateProfile(data) {
    var userImage = data.picture.medium;
    var fullName = data.name.first + " " + data.name.last;
    var userName = data.login.username;
    var email = data.email;
    var city = data.location.city;
    userImageDisplay.src = userImage;
    fullNameDisplay.innerText = fullName;
    userNameDisplay.innerText = userName;
    emailDisplay.innerText = email;
    cityDisplay.innerText = city;
}

function printError(err) {
    console.log(err);
}
