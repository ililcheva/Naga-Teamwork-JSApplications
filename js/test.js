import { Router } from './router';
let dest = 'about3';
Router.add(dest, function() {
    console.log(dest);
})
.navigate(dest)
.check(dest)

let kopche = function () {
    console.log('/kopche');
};

export { kopche };