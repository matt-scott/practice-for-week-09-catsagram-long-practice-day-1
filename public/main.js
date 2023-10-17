// Create main page content
export const createMainContent = (pageBody) => {
    // create header
    const header = document.createElement('h1');
    header.innerText = ('Catstagram');

    // create image
    const catImage = document.createElement('img');
    catImage.id = ('cat-image');

    // create image div
    const imgDiv = document.createElement('div');
    imgDiv.className = ('cat-img-div');

    // append header
    pageBody.appendChild(header);

    // append image div
    pageBody.appendChild(imgDiv);

    // append cat image
    getNewCat(catImage);
    imgDiv.appendChild(catImage);
};

// fetch random cat from TheCatAPI
// https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
const getNewCat = (catImage) => {
    const url = ('https://api.thecatapi.com/v1/images/search');
    try {
        fetch(url)
        .then (response => response.json())
        .then (data => {
            let dataObject = data[0];
            return dataObject;
        })
        .then (dataObject => {
            catImage.src = (dataObject.url);
        });
    }
    catch (error) {
        console.log('Failed to retrieve cat image', e);
    }
}