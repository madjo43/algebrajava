const totalResult = 100;
const perPage = 9;

let totalPages;

totalPages = Math.ceil(totalResult / perPage);

console.log(`Total pages: ` , totalPages);

const currentPage = 9;

if (currentPage > 0 && currentPage <= totalPages){

let page1Before;
let page2Before;
let page1After;
let page2After;

page1Before = currentPage - 1;
page2Before = currentPage -2;
page1After = currentPage +1;
page2After = currentPage +2;

if (page1Before < 1) {
    page1Before = ``;
}

if (page2Before < 1) {
    page2Before = ``;
}

if (page1After > totalPages) {
    page1After = ``;
}

if (page2After > totalPages) {
    page2After = ``;
}

console.log(page2Before, page1Before, currentPage, page1After, page2After);
} else {
    console.log(`Page not found!`);
}