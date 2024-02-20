const container = document.getElementById('container');
const btn = document.getElementById('btn');
const input = document.getElementById('input');

btn.addEventListener('click', () => {
    container.innerHTML = ''
    const value = parseInt(input.value)

    if (isNaN(value) && value == 0) {
        return;
    }

    if (value % 2 == 0) {
        const answer = document.createElement('span');
        answer.textContent = factorial(value)
        container.appendChild(answer)
    } else {
        const answer = document.createElement('span');
        answer.textContent = average(value)
        container.appendChild(answer)
    }

})

function factorial(value) {
    let newValue = 1;
    for (let i = 1; i <= value; i++) {
        newValue *= i;
    }
    return `Факториал ${value} = ${BigInt(newValue)}`;
}

function average(value) {
    return `Среднее арифметическое от 1 до ${value} = ${(value + 1) / 2}`
}

