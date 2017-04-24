import Navigo from 'navigo';

const router = (() => {
    const root = null;
    const useHash = true; // Defaults to: false
    const hash = '#!'; // Defaults to: '#'
    return new Navigo(root, useHash, hash);
})();
router
.on('/products', function () {
    // display all the products
    console.log('products')
  })
  .resolve();
  router.navigate('/products')


export default router;




