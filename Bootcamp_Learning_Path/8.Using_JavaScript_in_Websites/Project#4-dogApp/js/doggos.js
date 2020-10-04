const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

function addDoggo() {
    fetch(BREEDS_URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const breedsObject = data.message;
            const breedsArray = Object.keys(breedsObject);
            const select = document.querySelector('.breeds');

            for (let i = 0; i < breedsArray.length; i++) {
                const option = document.createElement('option');
                option.value = breedsArray[i];
                option.innerText = breedsArray[i];
                select.appendChild(option);
            }
        })

}

document.querySelector('.add-doggo').addEventListener('click', addDoggo);