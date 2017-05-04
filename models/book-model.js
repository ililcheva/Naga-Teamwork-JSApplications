import booksDatabase from 'booksDatabase';
import Handlebars from 'handlebars';
import booksFilter from 'booksFilter';
import hbars from 'hbars';

class GoogleBook {
    search(data) {
        booksDatabase.search(data)
            .then(result => {
                const filterResult = booksFilter.defaultFilter(result.items);
                const $resultInfo = $('#resultsInfo');
                $resultInfo.html('');
                $resultInfo.hide();
                filterResult.forEach(element => {
                    const html = Handlebars.templates['book-info'](element);
                    $resultInfo.append(html);
                });
                $resultInfo.fadeIn(1500);
            })
    }
}

const googleBook = new GoogleBook();
export default googleBook;
