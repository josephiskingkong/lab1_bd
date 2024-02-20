const container = document.getElementById('container');
const btn = document.getElementById('btn');
const input = document.getElementById('input');

btn.addEventListener('click', () => {
    const quantity = parseInt(input.value);
    if (quantity && !isNaN(quantity) && quantity > 0) {
        getTable(quantity)
    }
})

function getTable(quantity) {
    container.innerHTML = '';
    for (let i = 1; i <= quantity; i++) {
        let line = document.createElement('span.line')
        line.textContent = `${i} * 5 = ${i * 5}`
        let lineSplitter = document.createElement('br')
        container.appendChild(line)
        container.appendChild(lineSplitter)
        console.log(i)
    }
}
