fetch("https://gateway.marvel.com:443/v1/public/characters?name=Iron%20Man&apikey=f99ff0ebd9b29727ddc4d22f632170a4")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log("Error fetching data:", error);
    });