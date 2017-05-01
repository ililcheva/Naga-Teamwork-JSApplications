import booksDatabase from 'booksDatabase';
import hbars from 'hbars';
import booksFilter from 'booksFilter';

class GoogleBook {
    search(data) {
        booksDatabase.search(data)
            .then(result => {
                const filterResult = booksFilter.defaultFilter(result.items);
                console.log(filterResult);
            })
    }
}

const googleBook = new GoogleBook();
export default googleBook;
