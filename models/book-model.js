import booksDatabase from 'booksDatabase';
import dataBase from 'database';
import Handlebars from 'handlebars';
import booksFilter from 'booksFilter';
import events from 'events';

class GoogleBook {
    search(data) {
        booksDatabase.search(data)
            .then(result => {
                booksFilter.defaultFilter(result.items);
                const filterResult = booksFilter.filteredData;
                const $resultInfo = $('#resultsInfo');
                $resultInfo.hide();
                $resultInfo.html('');
                filterResult.forEach(element => {
                    const html = Handlebars.templates['book-info'](element);
                    $resultInfo.append(html);
                });
                dataBase.readUserDataOnce('books')
                    .then( result => {
                        filterResult.map( element => {
                            if(result && result.hasChild(element.id)){
                                const $added = $("[index2=" + element.id + "]");
                                $added.html('In My books');
                                $added.removeClass('add-button').addClass('added-button');
                            } else {
                                //not logged
                            }
                        });
                    });
                events.inSearchDescription();
                events.addUserInfo();
                $resultInfo.fadeIn(1000);
            })
    }
}

const googleBook = new GoogleBook();
export default googleBook;
