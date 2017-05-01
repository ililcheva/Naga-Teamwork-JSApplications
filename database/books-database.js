import $ from 'jquery';
const booksDatabase = {
    search: data => {
        const url = 'https://www.googleapis.com/books/v1/volumes?q=' + data + '&maxResults=20';
        return Promise.resolve($.get(url));
    }

};


export default booksDatabase;