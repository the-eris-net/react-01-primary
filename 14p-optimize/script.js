const container = document.querySelector('.container');

function optimization() {
    let html = '';
    let startTime = new Date();
    for (let i = 0; i < 1000; i++) {
        html += `<div>${i}</div>`;
    }
    container.innerHTML += html;
    let endTime = new Date();
    console.log(`optimization : ${endTime - startTime}ms`);
}

optimization();
