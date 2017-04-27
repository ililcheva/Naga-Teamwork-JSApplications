import 'jquery';

const popUpError = (() => {


  function createPopUpError(err) {
      let content = $('#content'),
          popUp = $('<div><h1></h1></div>');
      content.blur();
      popUp.children().html(err);
  }

})();
