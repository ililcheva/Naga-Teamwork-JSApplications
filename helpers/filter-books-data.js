const booksFilter = {
    defaultFilter: data => {
        return data.map(element => {
            return {
                title: element.volumeInfo.title,
                authors: element.volumeInfo.authors,
                description: element.volumeInfo.description,
                imageLink: (() => {
                    if (element.volumeInfo.hasOwnProperty('imageLinks')) {
                        return element.volumeInfo.imageLinks.thumbnail;
                    }
                })()
            };
        });
    },
};


export default booksFilter;