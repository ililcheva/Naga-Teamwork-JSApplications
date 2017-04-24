import 'navigo';
//have to link navigo in the index.html or use another router.js to keep index clean
const router = (() => {
    const root = null;
    const useHash = true; // Defaults to: false
    const hash = '#!'; // Defaults to: '#'
    return new Navigo(root, useHash, hash);
})();

export default router;




