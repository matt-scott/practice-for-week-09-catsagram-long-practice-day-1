import { createMainContent, getNewCat, createComment } from './main.js';

window.onload = () => {
    /* ----------------------------------------------- */
    /* ---------- HTML Content Construction ---------- */
    /* ----------------------------------------------- */

    // create inner content, with reference to outer div
    createMainContent();

    /* ---------------------------------------------- */
    /* ---------- Event Listener Functions ---------- */
    /* ---------------------------------------------- */

    // new cat listener function
    const newCatButtonListener = () => {
        const catImageElement = document.querySelector('#cat-image');
        getNewCat(catImageElement);

        // update score count in html to 0
        const voteScoreCount = document.querySelector('#score-count');
        voteScoreCount.innerText = ('0');
        // update score count in session memory to 0
        sessionStorage.setItem("score-count", 0);
    };

    // upvote button listener function
    const upvoteButtonListener = () => {
        const voteScoreCount = document.querySelector('#score-count');
        let count = sessionStorage.getItem('score-count');
        count++;
        sessionStorage.setItem('score-count', count);
        voteScoreCount.innerText = (count);
    };

    // downvote button listener function
    const downvoteButtonListener = () => {
        const voteScoreCount = document.querySelector('#score-count');
        let count = sessionStorage.getItem('score-count');
        count--;
        sessionStorage.setItem('score-count', count);
        voteScoreCount.innerText = (count);
    };

    // comment input field save function
    let inputField;
    const commentInputFieldListener = (event) => {
        inputField = event.target.value;
    };


    // comment submit listener function
    const commentSubmitListener = () => {
        createComment(inputField);
    };

    /* --------------------------------------------- */
    /* ---------- Event Listener Creation ---------- */
    /* --------------------------------------------- */

    // create listener for new cat button click
    const newCatButton = document.querySelector('#new-cat-button');
    newCatButton.addEventListener("click", newCatButtonListener);

    // create listener for upvote button click
    const upvoteButton = document.querySelector('#upvote-button');
    upvoteButton.addEventListener("click", upvoteButtonListener);

    // create listener for downvote button click
    const downvoteButton = document.querySelector('#downvote-button');
    downvoteButton.addEventListener("click", downvoteButtonListener);

    // create listener to save text in comment input field
    const commentInputField = document.querySelector('#comment-input');
    commentInputField.addEventListener("input", commentInputFieldListener);

    // create listener for comment submit button
    const commentSubmitButton = document.querySelector('#comment-submit-button');
    commentSubmitButton.addEventListener("click", commentSubmitListener);
};


    
