import $ from 'jquery';

function handleHtml(content, target) {
    let targetElement = $(`#${target}`);
    return $.get(`htmls/${content}.html`,
        (data) => {$(`#${target}`).html(data);
    console.log(`${content} loaded`);
    });
}

export { handleHtml };