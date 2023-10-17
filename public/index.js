import { createMainContent } from './main.js';

// create outer div for centering all page content
const createPageLayout = () => {
    const pageBody = document.createElement('div');
    pageBody.className = ('page-body');
    document.body.appendChild(pageBody);
    return pageBody;
};


window.onload = () => {
    // create outer div
    const pageBody = createPageLayout();
    
    // create inner content, with reference to outer div
    createMainContent(pageBody);
};


    
