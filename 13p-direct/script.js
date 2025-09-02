const container = document.querySelector('.container');

function direct() {
    let startTime = new Date();
    for (let i = 0; i < 1000; i++) {
        container.innerHTML += `<div>${i}</div>`;
    }
    let endTime = new Date();
    console.log(`direct : ${endTime - startTime}ms`);
}

direct();
