// Create main page content
export const createMainContent = () => {

    /* ------------------------------------------------- */
    /* ---------- HTML Element Initialization ---------- */
    /* ------------------------------------------------- */

    // create outer div for centering all page content
    const pageBody = document.createElement('div');
    pageBody.className = ('page-body');
    pageBody.id = ('page-body');

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
    newCatButton.className = ('button button-new-cat');
    newCatButton.innerText = ('GET NEW CAT!');

    // create vote button div
    const voteButtonDiv = document.createElement('div');
    voteButtonDiv.className = ('vote-button-div');

    // create upvote button
    const upvoteButton = document.createElement('button');
    upvoteButton.id = ('upvote-button');
    upvoteButton.className = ('button button-upvote');
    upvoteButton.innerText = ('Upvote');

    // create downvote button
    const downvoteButton = document.createElement('button');
    downvoteButton.id = ('downvote-button');
    downvoteButton.className = ('button button-downvote');
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

    // create comment submission div
    const commentSubmissionDiv = document.createElement('div');
    commentSubmissionDiv.className = ('comment-submission-div');

    // create comment input field
    const commentInputField = document.createElement('input');
    commentInputField.id = ('comment-input');
    commentInputField.className = ('comment-input');
    commentInputField.type = ('text');
    commentInputField.placeholder = ('Add a comment...');

    // create comment input field label
    const commentInputFieldLabel = document.createElement("label");
    commentInputFieldLabel.setAttribute("for",'comment-input');
    commentInputFieldLabel.innerText = ("Comment:");

    // create comment submit button
    const commentSubmitButton = document.createElement('button');
    commentSubmitButton.id = ('comment-submit-button');
    commentSubmitButton.className = ('button button-submit');
    commentSubmitButton.innerText = ('Submit');

    // create comment display box
    const commentDisplayBox = document.createElement('div');
    commentDisplayBox.id = ('comment-display-box');
    commentDisplayBox.className = ('comment-display-box');


    /* ----------------------------------------------- */
    /* ---------- HTML Element Construction ---------- */
    /* ----------------------------------------------- */

    // append top level div
    document.body.appendChild(pageBody);

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

    // append comment submission div
    pageBody.appendChild(commentSubmissionDiv);

    // append comment input field text
    commentSubmissionDiv.appendChild(commentInputFieldLabel);

    // append comment input field
    commentSubmissionDiv.appendChild(commentInputField);

    // append comment submit button
    commentSubmissionDiv.appendChild(commentSubmitButton);

    // append comment display box
    pageBody.appendChild(commentDisplayBox);

};

/* ------------------------------------------- */
/* ---------- New Cat Fetch Request ---------- */
/* ------------------------------------------- */

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

/* ------------------------------------ */
/* ---------- Create Comment ---------- */
/* ------------------------------------ */
export const createComment = (inputField) => {
    if (inputField !== undefined) {
        const commentBox = document.querySelector('#comment-display-box');

        let dateTime = new Date();
        dateTime = dateTime.toLocaleString();


        const date = document.createElement('p');
        date.innerText = (`- - - ${dateTime} - - -`);
        commentBox.appendChild(date);

        const comment = document.createElement('p');
        comment.innerText = (`${inputField}`);
        commentBox.appendChild(comment);

        const commentInputField = document.querySelector('#comment-input');
        commentInputField.value = ('');
    }
}