import booksDatabase from 'booksDatabase';
import hbars from 'hbars';
import booksFilter from 'booksFilter';

class GoogleBook {
    search(data) {
        booksDatabase.search(data)
            .then(result => {
                const filterResult = booksFilter.defaultFilter(result.items);
                const $resultInfo = $('#resultsInfo');
                $resultInfo.html(" ");
                filterResult.forEach(element => {
                    const $thumbnail = $(`<img src="${element.imageLink}" alt=""> <div>${element.title} ${element.authors[0]} ${element.description} ${element.infoLink}</div>`);
                    $resultInfo.append($thumbnail);
                })
            })
    }
}

const googleBook = new GoogleBook();
export default googleBook;
