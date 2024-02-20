const container = document.getElementById('container');
const btn = document.getElementById('btn');
const input = document.getElementById('input');

const students = [
    ['Иванов', 'Пётр', '1 курс', 'ПИ-241'],
    ['Куприянов', 'Сергей', '3 курс', 'МОА-211'],
    ['Захаров', 'Иван', '1 курс', 'ПИ-241'],
    ['Машин', 'Роман', '1 курс', 'ПМИ-241'],
    ['Имамов', 'Захар', '2 курс', 'КП-221'],
    ['Сотникова', 'Елизавета', '2 курс', 'КП-221']
]

function findStudent(key) {
    let result = []
    students.forEach(student => {
        if (String(student[3]).toLowerCase() == String(key).toLowerCase()) {
            result.push(student)
        }
    })
    
    return result
}

function createOutput(list) {
    container.innerHTML = ''
    list.forEach(student => {
        const firstLine = document.createElement('p') 
        firstLine.textContent = `${student[0]} ${student[1]}`
        const secondLine = document.createElement('p')
        secondLine.textContent = `Курс: ${student[2]}, группа: ${student[3]}`
        const lineSplitter = document.createElement('br')
        container.appendChild(firstLine)
        container.appendChild(secondLine)
        container.appendChild(lineSplitter)
    })
}

function displayResult() {
    if (input.value == '') {
        return
    }

    const list = findStudent(input.value)
    if (list.length <= 0) {
        container.innerHTML = 'ничего не найдено'
        return
    }

    createOutput(list)
}

btn.onclick = displayResult

input.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        btn.click();
    }
});

