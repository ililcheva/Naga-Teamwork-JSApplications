import booksDatabase from 'booksDatabase';
import hbars from 'hbars';

class GoogleBook {
    search(data) {
        booksDatabase.search(data)
            .then((result) => {
                    //manipulate results here
                })
            .catch(() =>{console.log('please enter search parameters')});

    }
}

const googleBook = new GoogleBook();
export default googleBook;
