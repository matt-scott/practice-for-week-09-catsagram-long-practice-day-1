import { createMainContent, getNewCat } from './main.js';

// create outer div for centering all page content
const createPageLayout = () => {
    const pageBody = document.createElement('div');
    pageBody.className = ('page-body');
    document.body.appendChild(pageBody);
    return pageBody;
};


window.onload = () => {
/* ----------------------------------------------- */
/* ---------- HTML Content Construction ---------- */
/* ----------------------------------------------- */

    // create outer div
    const pageBody = createPageLayout();

    // create inner content, with reference to outer div
    createMainContent(pageBody);

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

/* ---------------------------------------------- */
/* ---------- Event Listener Functions ---------- */
/* ---------------------------------------------- */

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

};


    
