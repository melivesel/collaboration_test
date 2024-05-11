fetch("https://gateway.marvel.com:443/v1/public/characters?name=Iron%20Man&apikey=f99ff0ebd9b29727ddc4d22f632170a4")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        const characterid = data.data.results[0].id;
        fetch('https://gateway.marvel.com:443/v1/public/characters/' + characterid + '/comics?limit=25&apikey=f99ff0ebd9b29727ddc4d22f632170a4')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                const issueName = data.data.results[0].title;
                console.log(issueName);
                const comicTitleElement = document.createElement('h2');
                comicTitleElement.textContent = issueName; // Set the text content, not the src attribute
                const searchResultDiv = document.getElementById('comicsuggestion');
                searchResultDiv.innerHTML = ''; // Clear existing content
                searchResultDiv.appendChild(comicTitleElement);

            })
            .catch(function(error) {
                console.log("Error fetching data:", error);
            });
    })
    .catch(function(error) {
        console.log("Error fetching data:", error);
    });