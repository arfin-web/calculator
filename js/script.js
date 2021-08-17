const buttons = document.getElementsByClassName('btn');
for (const button of buttons) {
    button.addEventListener('click', function () {
        const input = document.getElementById('input');
        input.value = input.value + button.innerText;
    })
}

document.getElementById('calcy').addEventListener('click', function () {
    let result = document.getElementById('result');
    const input = document.getElementById('input');

    result.innerText = eval(input.value);
})

document.getElementById('clear').addEventListener('click', function () {
    const input = document.getElementById('input');
    let result = document.getElementById('result');

    input.value = '';
    result.innerText = '';
})