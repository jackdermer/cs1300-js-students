var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN
var apiToken = "?token=UCMTQzsFZDIu06ceeNeT76j1j-Y0uXzYPIbA47wt2LU";

// CORS stands for "cross origin resource sharing" -- you'll be making http requests in order
// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

// Example promise that executes the GET request above and waits for it to finish before resolving
const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
       url: "https://trefle.io/api/v1/plants" + apiToken,
    });
    resolve(request);
  });

// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!
corsPromise().then(
  (request) =>
    (request.onload = request.onerror = function () {
      // TODO: ADD FUNCTION, ETC. FOR WHATEVER YOU WANT TO DO ONCE THE DATA IS RECEIVED
        let data = JSON.parse(request.response);
        console.log(data);
        addToPage = "";
        data.data.forEach(function(plant) {
            addToPage += '<h1>' + plant.common_name + '</h1>' + '<img src=' + plant.image_url + ' width=10%' + '>'
        })
        document.getElementById("body").innerHTML = addToPage;
    })
);

//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////
