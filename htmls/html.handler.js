import $ from 'jquery';

function handleHtml(content, target) {
    $.get(`htmls/${content}.html`)
        .then((content) => $(`#${target}`).html(content))
        .done(() => {
            console.log(`${content} loaded`);
            return { loaded: true };
        });
}

export { handleHtml };