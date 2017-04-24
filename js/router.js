import Navigo from 'navigo';

const router = (() => {
    const root = null;
    const useHash = true; // Defaults to: false
    const hash = '#!'; // Defaults to: '#'
    return new Navigo(root, useHash, hash);
})();



const result = document.getElementById('content');
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
    })
    .resolve();



export default router;




