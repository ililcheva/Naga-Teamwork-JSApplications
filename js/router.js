import Navigo from 'navigo';

const router = (() => {
    const root = null;
    const useHash = false; // Defaults to: false
    const hash = '#!'; // Defaults to: '#'
    return new Navigo(root, useHash, hash);
})();
//var router = new Navigo(null,false)



const result = document.querySelector('#content h1');
function print(text) {
    result.innerHTML = (text);
}
router
    .on({
        'home': function () {
            print("not home")
        },
        
        'books': function () {
            print("books")
        },
        'login': function () {

            print("login")
        },
        '/user/:id/:action': function (params) {

            print("user id: " + params.id + '\n' + "action: " + params.action )
        },
    })
    .resolve();



export default router;




