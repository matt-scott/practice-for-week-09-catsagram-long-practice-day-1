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

    // create new cat button
    const newCatButton = document.createElement('button');
    newCatButton.id = ('new-cat-button');
    newCatButton.className = ('new-cat-button');
    newCatButton.innerText = ('GET NEW CAT!');

    // create vote button div
    const voteButtonDiv = document.createElement('div');
    voteButtonDiv.className = ('vote-button-div');

    // create upvote button
    const upvoteButton = document.createElement('button');
    upvoteButton.id = ('upvote-button');
    upvoteButton.className = ('button');
    upvoteButton.innerText = ('Upvote');

    // create downvote button
    const downvoteButton = document.createElement('button');
    downvoteButton.id = ('downvote-button');
    downvoteButton.className = ('button');
    downvoteButton.innerText = ('Downvote');

    // create upvote/downvote score text
    const voteScoreText = document.createElement('p');
    voteScoreText.innerText = ('Popularity Score: ');
    voteScoreText.className = ('score-text');

    // create upvote/downvote score count
    const voteScoreCount = document.createElement('p');
    voteScoreCount.innerText = ('0');
    voteScoreCount.className = ('score-text');
    voteScoreCount.id = ('score-count');

    // append header
    pageBody.appendChild(header);

    // append image div
    pageBody.appendChild(imgDiv);

    // append cat image
    getNewCat(catImage);
    imgDiv.appendChild(catImage);

    // append new cat button
    pageBody.appendChild(newCatButton);

    // append upvote/downvote score text
    pageBody.appendChild(voteScoreText);

    // append upvote/downvote score
    voteScoreText.appendChild(voteScoreCount);

    // append vote button div
    pageBody.appendChild(voteButtonDiv);

    // append upvote button
    voteButtonDiv.appendChild(upvoteButton);

    // append downvote button
    voteButtonDiv.appendChild(downvoteButton);

};

// fetch random cat from TheCatAPI
// https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
export const getNewCat = (catImage) => {
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
};