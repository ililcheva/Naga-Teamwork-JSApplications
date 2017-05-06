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
    comment(str) {
        const user = firebase.auth().currentUser;
        if(user !== null){
            dataBase.readUserDataOnce().then( data => {
                const userdata = data.val(),
                    usr = userdata.username,
                    date = new Date();
                let obj = {
                    comment: str,
                    usr: usr,
                    date: date
                };
                let path = 'comments';
                dataBase.updateData(path,obj);
                const html = Handlebars.templates['comments'](obj);
                $('#comment-container').append(html);
            });
        } else {
            console.log('ur not logged')
        }
    }
    updateComments(){
        dataBase.readDataOnce('comments')
            .then(result => {
                let arr = Object.values(result.val());
                console.log(result.val());
                $('#comment-container').html('');
                arr.forEach( element => {
                    const html = Handlebars.templates['comments'](element);
                    $('#comment-container').append(html);
                })
            })
    }
}

const googleBook = new GoogleBook();
export default googleBook;
