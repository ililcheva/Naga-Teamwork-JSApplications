const booksFilter = {
    filteredData: [],
    defaultFilter: function(data) { //arrows ----> no this
        this.filteredData = [];
         data.map(element => {
            let title, authors, description, thumbnail, infoLink, id;
            if (element.volumeInfo.hasOwnProperty('title')) {
                title = element.volumeInfo.title;
            } else {
                title = 'There is no information about the title.';
            }
            if (element.volumeInfo.hasOwnProperty('authors')) {
                authors = element.volumeInfo.authors;
            } else {
                authors = ['There is no information about the authors.'];
            }
            if (element.volumeInfo.hasOwnProperty('description')) {
                description = element.volumeInfo.description;
            } else {
                description = 'There is no description provided.';
            }
            if (element.volumeInfo.hasOwnProperty('imageLinks')) {
                thumbnail =  element.volumeInfo.imageLinks.thumbnail;
            } else {
                thumbnail =  '/assets/img/nopreview.png';
            }
            infoLink = element.volumeInfo.infoLink;
            id = element.id;
            this.filteredData.push({
                title: title,
                authors: authors,
                description: description,
                imageLink: thumbnail,
                infoLink: infoLink,
                id: id
            });
        });
    },

};

export default booksFilter;