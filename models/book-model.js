import booksDatabase from 'booksDatabase';
import dataBase from 'database';
import Handlebars from 'handlebars';
import booksFilter from 'booksFilter';
import events from 'events';

class GoogleBook {
    search(data) {
        booksDatabase.search(data)
            .then(result => {
                const filterResult = booksFilter.defaultFilter(result.items);
                const $resultInfo = $('#resultsInfo');
                $resultInfo.hide();
                $resultInfo.html('');
                filterResult.forEach(element => {
                    const html = Handlebars.templates['book-info'](element);
                    $resultInfo.append(html);
                    dataBase.readUserDataOnce('books')
                        .then( result => {
                            if(result && result.hasChild(element.id)){
                                const $added = $("[index2=" + element.id + "]");
                                $added.html('In My books');
                                $added.removeClass('add-button').addClass('added-button');
                            } else {
                                //not logged
                            }
                    })
                });
                $resultInfo.fadeIn(1500);
                events.displayInfo(filterResult);
                events.addUserInfo(filterResult);
            })
    }
}

const googleBook = new GoogleBook();
export default googleBook;
